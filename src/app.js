import Vue from 'vue';
import App from './components/app.vue';
import Modal from './components/Dialog/index.js';
import Toast from './components/Toast/index.js';
import Loading from './components/Loading/index.js';
Vue.use(Modal);
Vue.use(Toast);
Vue.use(Loading);
const app = new Vue({
    components: {
        App
    }
}).$mount('#app');