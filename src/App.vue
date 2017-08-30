<template>
  <div id="app">
      <button @click="messageBox">message</button>
      <pre class="code">
          this.$Message({
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
                msgBody: {
                    cssClass: 'test'
                }
            });
      </pre>
      <button @click="messageBox">alert</button>
      <pre class="code">
          this.$Message({
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
                msgBody: {
                    // cssClass: 'test'
                }
            });
      </pre>
      <button @click="messageBox">confirm</button>
      <pre class="code">
          this.$Message({
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
                msgBody: {
                    // cssClass: 'test'
                }
            });
      </pre>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() { 
  },
  data() {
    return {
    }
  },
  methods: {
    messageBox() {
        this.$Message({
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
            msgBody: {
                cssClass: 'test'
            }
        });
    },
    alert() {
        this.$Message.alert('message!!!', function(){
                
            });
    },
    confirm() {
        this.$Message.confirm('message!!!!', function(result){
            if(result) {
                alert('确定');
            } else {
                alert('取消'); 
            }
        });
    }
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
.code {
    background: #666;
    color: #fff;
}
</style>
