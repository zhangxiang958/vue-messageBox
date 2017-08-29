import Vue from 'vue';
import App from './components/app.vue';
import Dialog from './components/layer/Dialog';
Vue.use(Dialog);
const app = new Vue({
    components: {
        App
    }
}).$mount('#app');