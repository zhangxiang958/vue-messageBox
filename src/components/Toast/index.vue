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
                messageBox: {
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
            :class="{ 
                info: type === 'info',
                warning: type === 'warning',
                danger: type === 'danger', 
                showMsgBox: show  }" 
            @touchmove="notAllowTouchMove($event)">
            <div class="message"
                :class="messageBox.cssClass"
                :style="messageBox.style"
            >
                <div class="title">
                    {{ title.content }}
                    <div class="closeBtn" 
                         role="close-button" 
                        :class="closeBtn.cssClass" 
                        :style="closeBtn.style"
                        @click="dismiss($event)"></div>
                </div>
                <div class="msg" v-html="message.content" :style="message.style" :class="message.cssClass"></div>
                <div class="msgFooter">
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

<style scoped>
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
    .msgBox.info .title {
        background: #007aff;
    }
    .msgBox.warning .title {
        background: #f0ad4e;
    }
    .msgBox.danger .title {
        background: #dd524d;
    }
    .closeBtn {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
        max-width: 5%;
        max-height: 25%;
        min-width: 15px;
        min-height: 15px;
        background: url('data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAESSURBVHjarNZNSgMxAIDR19QruOgJFP/AMzi68gSCBxQ8gDBad26kiroRr+BCELe2bmYghI5NZiYHyEtIvpBJXdcwxRIr440JJlVVLQMC3rHA9kjADG940QAr/OAYdyNAM8yxj+8YOWvkw4FQC+ziCectAp84wesAKAUqfMVIC1U9oU4gRfpCMbBIgXVIKZQCpynQheRCWcB/yCYoG9iEdEFHJQBsZdycFrptgOdmcVlAzk5i6LJ53wJ+cZEDlCAzXEXAFNe5HYUeoe2VBht6hPZRGmwoAOJDLnoZwoCSs6HQAdxndpBC83VQ6AB2CjqIoYN1UBgIZEFhBGAjFJpfRT0Q6IJuYmSJh4FACj028/obAFx3gkG2/PgIAAAAAElFTkSuQmCC') no-repeat;
        background-size: 100%;
    }
    .message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 75%;
        border-radius: 10px;
        z-index: 9999;
        overflow: hidden;
        transition: all .3s ease;
    }
    .title {
        position: relative;
        padding: 15px;
        background: #fff;
    }
    .msg {
        padding: 10px;
        background: #fff;
        overflow: hidden;
    }
    .msgFooter {
        border-top: 1px solid #e8e8e8;
        background: #fff;
        overflow: hidden;
    }
    .footerBtn {
        float: left;
        border-collapse: collapse;
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
