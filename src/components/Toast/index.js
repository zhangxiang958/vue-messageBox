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
    instance.$data.message = message;
    document.body.appendChild(instance.$mount().$el);
    setTimeout(() => {
        Dismiss();    
    }, options.duration);
}

const Dismiss = () => {
    instance.$data.show = false;
    instance.$data.cssClass['is-toastShow'] = false;
    instance.$data.cssClass['is-toastHide'] = true;
}


export default {
    install(Vue) {
        let Tpl = Vue.extend(Template);
        instance = new Tpl();
        Vue.prototype.$Toast = Toast;
    }
}
