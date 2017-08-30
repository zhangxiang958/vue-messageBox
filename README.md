# vue-messageBox

> this component is attend to offer a easy way to cue user with message but not by bowser's way.

## Requirements
this project is base on ECMAScript 6, so maybe you need babel.
## Why vue-messsageBox
Because my project need a modal which only show some simple text, and the native modal on mobile is ugly and is not a custom component.
## Live Demo

https://zhangxiang958.github.io/vue-messageBox/
## Installation
```
npm install --save vue-messageBox-addon

or

<script src="www.exampleCDN.com/vue-messageBox.min.js"></script>
```
## Usage
### Options of messageBox
Here list options on messageBox

| Option | Description |
| ----- | ----- |
| closable | optional, the switch of dismiss way |
| title | optional, Object, the setting of title |
| message | Object, the setting of message |
| buttons | optional, Array, the item of Array is object, the object is the setting of footer button |
| closeBtn | optional, Object, here you can set the closeBtn's outlook |
| msgBody | optional, Object, here you can set the message's outlook |
| msgFooter | optional, Object, here you can set the message footer's outlook |
```
closable: false,  // default true, if you set false , click mask will not dismiss the dialog, you must click the closeBtn 
title: { 
    content: '1233333333333333333333333',  //String, title content 
    cssClass: '',  // className of title
    style: {}  // style of title
},
message: {
    content: '<div>123</div>', //String or DOM String, message content
    cssClass: '',  // className of message
    style: {}  // style of message
},
buttons: [{
    label: 'submit',  //text label of footer button
    cssClass: '',  // className of the footer button
    style: {},  // style of the footer button
    action: function(){
      // if wil fire when this button was clicked
    }
}],
closeBtn: {
    cssClass: '', // className of close botton
    style: {}  // style of close button
},
msgBody: {
    cssClass: '',  // className of messageBox
    style: {}   // style of messageBox
}
msgFooter: {
    cssClass: '',  // className of messageBox
    style: {}   // style of messageBox
}
```

### MessageBox
```
//main.js
import MsgBox from 'vue-messgaeBox-freedom';
Vue.use(MsgBox);

//app.vue
this.$Message({
    closable: false,
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
        action: () => {
            this.$Message.dissmiss();
        }
    }],
    closeBtn: {

    },
    msgBody: {
        // cssClass: 'test'
    }
});
this.$Message.alert('message!!!', function(){

});
this.$Message.confirm('message!!!!', function(result){
    if(result) {
        alert('确定');
    } else {
        alert('取消'); 
    }
});

// close the messageBox
this.$Message.dissmiss();
```

## Licence
MIT License

Copyright (c) 2017 Shawn Cheung

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Concat
Mail [958033967@qq.com](mailto 958033967@qq.com)

Blog zhangxiang958.github.io
