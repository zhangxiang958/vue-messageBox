<script>
    // import vueToast from './layer/vue-toast.js';

    export default {
        mounted() {
            this.$Dialog({
                closable: false,
                // type: 'info',
                title: {
                    content: '1233333333333333333333333'
                },
                message: {
                    content: '<div>123</div>'
                },
                buttons: [{
                    label: 'submit',
                    cssClass: '',
                    style: {},
                    action: function(){

                    }
                }, {
                    label: 'submit',
                    cssClass: '',
                    style: {},
                    action: function(){

                    }
                }],
                closeBtn: {

                },
                messageBox: {
                    // cssClass: 'test'
                }
            });
            this.$Dialog.alert('message!!!', function(){
                
            });
            this.$Dialog.confirm('message!!!!', function(result){
                if(result) {
                    alert('确定');
                } else {
                    alert('取消'); 
                }
            });
        },
        data() {
            return {
                
            }
        },
        methods: {
            toast() {
                this.$Toast('数据请求出错, 请稍后重试!', {
                    cssClass: '123123 234234',
                    style: {
                        background: 'red',
                    }
                });
                // this.$refs.toast.showToast(new Date, {
                //     theme: 'error',
                //     timeLife: 3000,
                //     closeBtn: true
                // })
            }
        },
        components: {
            // vueToast
        }
    }
</script>

<template>
    <div class="app">
        <button @click="toast">toast</button>   
    </div>
</template>

<style>
    .app {
        margin: 0;
    }

</style>