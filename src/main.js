import Vue from 'vue'
import App from './App.vue'
import MsgBox from './lib/index.js';
Vue.use(MsgBox);
new Vue({
  el: '#app',
  render: h => h(App)
})
