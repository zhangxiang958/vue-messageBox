import Template from './index.vue';

let globalOptions = {
    show: false,
    closable: true,
    title: {
        content: '',
        cssClass: '',
        style: {}
    },
    message: {
        content: '',
        cssClass: '',
        style: {}
    },
    buttons: [],
    closeBtn: {
        cssClass: '',
        style: {}
    },
    messageBox: {
        cssClass: '',
        style: {}
    }
};

let instance;

const Dialog = (config = {}) => {
    config = {
        ...globalOptions,
        ...config
    };
    for(let key in config) {
        if(config.hasOwnProperty(key)) {
            instance.$data[key] = config[key];
        }
    }
    instance.$data.show = true;
    console.log('msg', instance.$data);
    document.body.style.overflow = 'hidden';
    document.body.appendChild(instance.$mount().$el);
}

const Alert = (message, callback) => {
    let alertConfig = merge(globalOptions, {
        type: 'info',
        message: {
            content: message
        },
        buttons: [{
            label: '确定',
            style: {
                textAlign: 'center'
            },
            action: function(){
                Dismiss();
                callback && callback();
            }
        }]
    });
    Dialog(alertConfig);
}

const Confirm = function(message, callback){
    let confirmConfig = merge(globalOptions, {
        type: 'info',
        message: {
            content: message
        },
        buttons: [{
            label: '确定',
            style: {
                boxSizing: 'border-box',
                textAlign: 'center',
                width: '50%',
                borderRight: '1px solid #f8f8f8',
                lineHeight: '40px'
            },
            action: function(){
                Dismiss();
                callback && callback(true);
            }
        }, {
            label: '取消',
            style: {
                boxSizing: 'border-box',
                textAlign: 'center',
                width: '50%',
                lineHeight: '40px'
            },
            action: function(){
                Dismiss();
                callback && callback(false);
            }
        }]
    });
    Dialog(confirmConfig);
}

const Dismiss = () => {
    instance.$data.show = false;
    document.body.style.overflow = 'auto';
}

export default {
    install(Vue) {
        let Tpl = Vue.extend(Template);
        instance = new Tpl();
        Vue.prototype.$Dialog = Dialog;
        Vue.prototype.$Dialog.alert = Alert;
        Vue.prototype.$Dialog.confirm = Confirm;
        Vue.prototype.$Dialog['dismiss'] = Dismiss;
    }
}
