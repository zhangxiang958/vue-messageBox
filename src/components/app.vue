<script>

    export default {
        mounted() {
            // this.$Dialog({
            //     closable: false,
            //     // type: 'info',
            //     title: {
            //         content: '1233333333333333333333333'
            //     },
            //     message: {
            //         content: '<div>123</div>'
            //     },
            //     buttons: [{
            //         label: 'submit',
            //         cssClass: '',
            //         style: {},
            //         action: function(){

            //         }
            //     }],
            //     closeBtn: {

            //     },
            //     messageBox: {
            //         // cssClass: 'test'
            //     }
            // });
            // this.$Dialog.alert('message!!!', function(){
            //     alert('fuck');
            // });
            // this.$Dialog.confirm('message!!!!', function(result){
            //     if(result) {
            //         alert('确定');
            //     } else {
            //         alert('取消'); 
            //     }
            // });
            // this.$Toast('数据请求出错, 请稍后重试!', {
            //     cssClass: '123123 234234',
            //     style: {
            //         background: 'red'
            //     }
            // });
            // setTimeout(() => {
            //     this.$Toast('数据请求出错2, 请稍后重试!', {
            //         cssClass: '123123 234234',
            //         style: {
            //             // background: 'red'
            //         }
            //     });
            // }, 2000);
            // setTimeout(() => {
            //     this.$Toast('数据请求出错3, 请稍后重试!', {
            //         cssClass: '123123 234234',
            //         style: {
            //             // background: 'red'
            //         }
            //     });
            // }, 4000);
            // setTimeout(() => {
            //     this.$Toast('数据请求出错4, 请稍后重试!', {
            //         cssClass: '123123 234234',
            //         style: {
            //             // background: 'red'
            //         }
            //     });
            // }, 6000);  
            this.$Loading();
            setTimeout(() => {
                this.$Loading.Dismiss();
            }, 5000);
        },
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        components: {
            
        }
    }
</script>

<template>
    <div class="app">
        
    </div>
</template>

<style scoped>
    .app {
        margin: 0;
    }
</style>