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
    },
    msgFooter: {
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
    let alertConfig = {
        type: 'info',
        message: {
            content: message
        },
        buttons: [{
            label: '确定',
            style: {
                margin: '0',
                width: '100%',
                boxSizing: 'border-box',
                border: 'none'
            },
            action: function(){
                Dismiss();
                callback && callback();
            }
        }],
        msgFooter: {
            style: {
                padding: '0'
            }
        }
    };
    Dialog({
        ...globalOptions,
        ...alertConfig
    });
}

const Confirm = function(message, callback){
    let confirmConfig = {
        type: 'info',
        message: {
            content: message
        },
        buttons: [{
            label: '确定',
            style: {
                margin: '0',
                padding: '3%',
                width: '50%',
                height: '40%',
                boxSizing: 'border-box',
                border: 'none',
                borderRight: '1px solid #f8f8f8',
                lineHeight: '2'
            },
            action: function(){
                Dismiss();
                callback && callback(true);
            }
        }, {
            label: '取消',
            style: {
                margin: '0',
                padding: '3%',
                width: '50%',
                height: '40%',
                boxSizing: 'border-box',
                border: 'none',
                lineHeight: '2'
            },
            action: function(){
                Dismiss();
                callback && callback(false);
            }
        }],
        msgFooter: {
            style: {
                padding: '0'
            }
        }
    };
    
    Dialog({
        ...globalOptions,
        ...confirmConfig
    });
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
