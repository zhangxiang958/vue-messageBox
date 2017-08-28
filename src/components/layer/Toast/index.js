import Template from './index.vue';

let instance;
let id = 0;
const globalOptions = {
    show: true,
    cssClass: {},
    style: {},
    duration: 3000
}

const Toast = (message, options = {}) => {

    options.cssClass && 
    (globalOptions.cssClass[options.cssClass] = true) && 
    (options.cssClass = {
        ...globalOptions.cssClass
    });
    options = {
        id: id ++,
        content: message,
        ...globalOptions,
        ...options
    };
    // for(let key in options) {
    //     if(options.hasOwnProperty(key)) {
    //         instance.$data[key] = options[key];
    //     }
    // }
    console.log(options);
    options.style['transform'] = `translateY(${100 * (id - 1)}%)`;
    instance.$data.messages.push(options);
    console.log(instance.$data.messages);
    document.body.appendChild(instance.$mount().$el);
    let idx = instance.$data.messages.length - 1;
    setTimeout(() => {
        // Dismiss(idx);
    }, options.duration);
}

const Dismiss = (idx) => {
    instance.$data.messages[idx].show = false;
}


export default {
    install(Vue) {
        let Tpl = Vue.extend(Template);
        instance = new Tpl();
        Vue.prototype.$Toast = Toast;
    }
}
