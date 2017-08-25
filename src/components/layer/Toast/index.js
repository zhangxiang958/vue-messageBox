import Template from './index.vue';

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
    console.log({  ...globalOptions, ...options });
    options = {
        ...globalOptions,
        ...options
    };
    for(let key in options) {
        if(options.hasOwnProperty(key)) {
            instance.$data[key] = options[key];
        }
    }
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
