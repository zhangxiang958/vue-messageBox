# vue-modal

> this component is attend to offer a easy way to cue user with message but not by bowser's way.

## Requirements
this project is base on ECMAScript 6, so maybe you need babel.
## Why vue-modal

## Live Demo

## Installation

## Usage
### Options of Dialog
Here list options on Dialog

| Option | Description |
| ----- | ----- |
| closable | optional, the switch of dismiss way |
| type | optional, String, the type of dialog, three type can be choose: 'info', 'warning', 'danger' |
| title | optional, Object, the setting of title |
| message | Object, the setting of message |
| buttons | optional, Array, the item of Array is object, the object is the setting of footer button |
| closeBtn | optional, Object, here you can set the closeBtn's outlook |
| messageBox | optional, Object, here you can set the message's outlook |

```
closable: false,  //optional, true default, if you set false , click mask will not dismiss the dialog, you must click the closeBtn 
type: 'info', //optional, accept String, default value is 'default', you can set one of 'info', 'warning', 'danger'.
title: { // optional,
    content: '1233333333333333333333333',  //String, title content 
    cssClass: '',  // className of title
    style: {}  //style of title
},
message: {
    content: '<div>123</div>', //String or DOM String, message content
    cssClass: '',  //className of message
    style: {}  //style of message
},
buttons: [{ // optional,
    label: 'submit',  //text label of footer button
    cssClass: '',  //optional, className of the footer button
    style: {},  //optional,style of the footer button
    action: function(){
      // optional, if wil fire when this button was clicked
    }
}],
closeBtn: { //optional
    cssClass: '', // optional, className of close botton
    style: {}  //optional style of close button
},
messageBox: { // optional
    cssClass: '',  // className of messageBox
    style: {}   // style of messageBox
}
```

### Dialog
```
//main.js
Vue.use(Modal);

//app.vue
this.$Dialog({
     closable: false,
     type: 'info',
     title: {
         content: '1233333333333333333333333',
         cssClass: '',
         style: {}
     },
     message: {
         content: '<div>123</div>',
         cssClass: '',
         style: {}
     },
     buttons: [{
         label: 'submit',
         cssClass: '',
         style: {},
         action: function(){

         }
     }],
     closeBtn: {
         cssClass: '',
         style: {}
     },
     messageBox: {
         cssClass: 'test',
         style: {}
     }
 });
 // plugin offer two quick way to let you fire alert/confirm 
 this.$Dialog.alert('message');  //without callback
 //with callback
 this.$Dialog.alert('message', function(){  
     alert('message');
 });
 //without callback
 this.$Dialog.confirm('message');
 //with callback
 this.$Dialog.confirm('message!!!!', function(result){
    if(result) {
        //submit
        alert('确定');
    } else {
        //cancel
        alert('取消');
    }
 });
```

### Options of Toast

### Toast

### Options of Loading

### Loading


## Licence
MIT License

Copyright (c) 2017 Shawn Cheung

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Concat
Mail [958033967@qq.com](mailto 958033967@qq.com)

Blog zhangxiang958.github.io
