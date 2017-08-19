<script>

    export default {
        mounted() {
            this.$alert({
                show: true,
                title: {
                    text: 'test'
                },
                message: {
                    text: '123'
                },
                buttons: [{
                    label: 'submit',
                    cssClass: '',
                    style: {},
                    action: function(){

                    }
                }],
                closeBtn: {

                }
            });
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