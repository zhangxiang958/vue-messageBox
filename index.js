var MsgBox = {};
MsgBox.install = function(Vue, options){
    Vue.prototype.$confirm = '';
    Vue.prototype.$toast = '';
    Vue.prototype.$alert = '';
    Vue.prototype.$prompt = '';
}

module.exports = MsgBox;
