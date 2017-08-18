import Template from './index.vue';
// https://nakupanda.github.io/bootstrap3-dialog/
let merge = (src, target) => {
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

let globalOptions = {
    title: {
        text: '',
        cssClass: '',
        style: {}
    },
    message: {
        text: '',
        cssClass: '',
        style: {}
    },
    buttons: [],
    closeBtnStyle: {

    }
};

let instance;

const Alert = function(config = {}){
    config = merge(globalOptions, config);
    for(let key in config) {
        if(config.hasOwnProperty(key)) {
            instance.$data[key] = config[key];
        }
    }
    console.log('msg', instance.$data);
    document.body.style.overflow = 'hidden';
    document.body.appendChild(instance.$mount().$el);
}

export default {
    install(Vue) {
        let Tpl = Vue.extend(Template);
        instance = new Tpl();
        Vue.prototype.$alert = Alert;
        Vue.prototype.$alert['dismiss'] = function(){
            instance.$data.show = false;
            document.body.style.overflow = 'auto';
        }
    }
}
