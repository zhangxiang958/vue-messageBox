import Template from './index.vue';

const merge = (src, target) => {
    let o = {};
    for(let key in src) {
        if(src.hasOwnProperty(key)) {
            if(typeof src[key] === 'object') {
                o[key] = merge({}, src[key]);
            } else {
                o[key] = src[key];
            }
        }
    }

    for(let key in target) {
        if(target.hasOwnProperty(key)) {
            if(typeof target[key] === 'object') {
                o[key] = merge({}, target[key]);
            } else {
                o[key] = target[key];
            }
        }
    }
    return o;
};

let instance;

const globalOptions = {
    show: true,
    cssClass: {
        'is-toastShow': true, 
        'is-toastHide': false
    },
    style: {},
    duration: 3000
}

const Toast = (message, options = {}) => {

    options.cssClass && (globalOptions.cssClass[options.cssClass] = true) && (options.cssClass = globalOptions.cssClass);
    options = merge(globalOptions, options);
    for(let key in options) {
        if(options.hasOwnProperty(key)) {
            instance.$data[key] = options[key];
        }
    }
    console.log('toast', options);
    instance.$data.messages.push(message);
    let idx = instance.$data.messages.length - 1;
    document.body.appendChild(instance.$mount().$el);
    setTimeout(() => {
        Dismiss(idx);   
        instance.$data.messages.shift();
    }, options.duration);
}

const Dismiss = (idx) => {
    // instance.$data.show = false;
    // instance.$data.cssClass['is-toastShow'] = false;
    // instance.$data.cssClass['is-toastHide'] = true;
    // instance.$data.messages.shift();
    let className = instance.$mount().$el.children[idx].className.replace(/\bis-toastShow\b/g, 'is-toastHide');
    console.log('children', className);
    instance.$mount().$el.children[idx].className = className;
    console.log('data', instance.$data.messages);
}


export default {
    install(Vue) {
        let Tpl = Vue.extend(Template);
        instance = new Tpl();
        Vue.prototype.$Toast = Toast;
    }
}
