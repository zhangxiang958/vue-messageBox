<template>
  <div id="app">
      1231231212
  </div>
</template>

<script>
export default {
  name: 'app',
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
    
  }
}
</script>

<style lang="scss">
.example {
  text-align: center;
  margin-bottom: 20px;
  button {
    border: 1px solid #ccc;
    height: 30px;
    background: #fff;
  }
}
</style>
