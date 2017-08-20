import Vue from 'vue';
import App from './components/app.vue';
import Modal from './components/Dialog/index.js';
import Toast from './components/Toast/index.js';
Vue.use(Modal);
Vue.use(Toast);
const app = new Vue({
    components: {
        App
    }
}).$mount('#app');