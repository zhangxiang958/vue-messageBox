import Vue from 'vue';
import App from './components/app.vue';
import { Dialog, Toast, Loading } from './components/layer';

Vue.use(Dialog);
Vue.use(Toast);
Vue.use(Loading);
const app = new Vue({
    components: {
        App
    }
}).$mount('#app');