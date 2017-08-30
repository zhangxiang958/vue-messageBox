<script>
    export default {
        data() {
            return {
                show: false,
                closable: true,
                type: 'default',
                title: {
                    content: '',
                    cssClass: '',
                    style: {}
                },
                message: {
                    content: '',
                    cssClass: '',
                    style: {}
                },
                buttons: [],
                closeBtn: {
                    cssClass: '',
                    style: {}
                },
                msgBody: {
                    cssClass: '',
                    style: {}
                },
                msgFooter: {
                    cssClass: '',
                    style: {}
                }
            }
        },
        methods: {
            dismiss(event) {
                if(!this.closable && event.target.getAttribute('role') != 'close-button') {
                    return;
                }
                this.show = false;
                document.body.style.overflow = 'auto';
            },
            notAllowTouchMove(event) {
                event.preventDefault();
            }
        }
    }
</script>
<template>
    <transition name="modal">
        <div class="msgBox" v-if="show"
            @touchmove="notAllowTouchMove($event)">
            <div class="message"
                :class="msgBody.cssClass"
                :style="msgBody.style"
            >
                <div class="title"
                    :cssClass="title.cssClass"
                    :style="title.style"
                >
                    {{ title.content }}
                    <div class="closeBtn" 
                         role="close-button" 
                        :class="closeBtn.cssClass" 
                        :style="closeBtn.style"
                        @click="dismiss($event)"></div>
                </div>
                <div class="msg" v-html="message.content" :style="message.style" :class="message.cssClass"></div>
                <div class="msgFooter"
                    :class="msgFooter.cssClass"
                    :style="msgFooter.style"
                >
                    <div class="footerBtn"
                    v-for="item in buttons"
                    :class="item.cssClass"
                    :style="item.style"
                    @click="item.action">
                        {{ item.label }}
                    </div>
                </div>
            </div>
            <div class="mask" @click="dismiss($event)"></div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
    .msgBox {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        -webkit-transition: opacity 0.3s ease;
        -moz-transition: opacity 0.3s ease;
        transition: opacity 0.3s ease;
        z-index: 9999;
        -webkit-user-select: none;
    }
    .title {
        position: relative;
        padding: 15px;
        padding-bottom: 0;
        background: #fff;
    }
    .closeBtn {
        position: absolute;
        top: 23px;
        right: 10px;
        transform: translateY(-50%);
        text-align: center;
        font-size: 18px;
        z-index: 999;
        cursor: pointer;
        &:after {
            content: "\2A2F";
        }
    }
    .message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 75%;
        border-radius: 10px;
        background: #fff;
        z-index: 9999;
        overflow: hidden;
    }
    .msg {
        position: relative;
        padding: 30px 20px;
        overflow: hidden;
    }
    .msgFooter {
        position: relative;
        box-sizing: border-box;
        padding: 2%;
        border-top: 1px solid #e8e8e8;
        background: #fff;
        text-align: right;
        overflow: hidden;
    }
    .footerBtn {
        display: inline-block;
        position: relative;
        margin-right: 5px;
        margin-bottom: 0;
        padding: 0 15px;
        line-height: 1.15;
        height: 28px;
        line-height: 28px;
        border-radius: 4px;
        border: 1px solid transparent;
        border-color: #d9d9d9;
        background-color: #fff;
        color: rgba(0, 0, 0, .65);
        font-weight: 500;
        font-size: 12px;
        text-align: center;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        white-space: nowrap;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
        transition: all .3s cubic-bezier(.645,.045,.355,1);
    }
    .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
