import Vue from 'vue';
import App from './components/app.vue';
import Modal from './components/Alert/index.js';

Vue.use(Modal);

const app = new Vue({
    components: {
        App
    }
}).$mount('#app');