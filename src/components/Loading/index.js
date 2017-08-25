import Template from './index.vue';

let instance;

const globalOptions = {
    show: true,
    cssClass: {
        'is-loadingShow': true, 
        'is-loadingHide': false
    },
    style: {},
    duration: 3000
}

const Loading = (message, options = {}) => {

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
    // instance.$data.message = message;
    document.body.appendChild(instance.$mount().$el);
}

const Dismiss = () => {
    instance.$data.show = false;
    instance.$data.cssClass['is-loadingShow'] = false;
    instance.$data.cssClass['is-loadingHide'] = true;
}


export default {
    install(Vue) {
        let Tpl = Vue.extend(Template);
        instance = new Tpl();
        Vue.prototype.$Loading = Loading;
        Vue.prototype.$Loading.Dismiss = Dismiss;
    }
}
