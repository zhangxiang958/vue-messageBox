<script>
    export default {
        data() {
            return {
                // show: false,
                messages: [],
/*                cssClass: {
                    'is-toastShow': this.show,
                    'is-toastHide': !this.show
                },
                style: {}*/
            }
        },
        methods: {
        }
    }
</script>
<template>
    <div class="toast">
        <transition-group 
            tag='div'
            name="toastShow"
        >
            <div class="toastMsg" 
                v-for="message in messages"
                :key="message.id"
                v-if="message.show"
                :class="message.cssClass"
                :style="message.style"
            >
                {{ message.content }}
            </div>
        </transition-group>
    </div>
</template>

<style scoped>
    .toast {
        position: fixed;
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
    }
    .toastMsg {
        margin-bottom: 5px;
        padding: 0 16px;
        width: auto;
        height: 32px;
        line-height: 32px;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.8);
        font-size: 14px;
        color: #fff;
        white-space: nowrap;
    }
    .toastMsg.is-toastHide, .toastMsg.is-toastShow {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
        -webkit-animation-duration: .4s;
        animation-duration: .4s;
    }

    .toastShow-enter {
        transform: translateY(100%);
        opacity: 0;
        transition: all 0.3s ease;
    }

    .toastShow-enter-active {
        opacity: 0;
        transition: all 0.3s ease-out;
    }

    .toastShow-enter-to {
        opacity: 1;
    }

    .toastShow-leave-active {
        opacity: 1;
        transition: all 0.3s ease-out;
    }

    .toastShow-leave-to {
        transform: translateY(-100%);
        opacity: 0;
    }

    .toastMsg.is-toastShow {
        -webkit-animation-name: toastshow;
        animation-name: toastshow;
        -webkit-animation-timing-function: cubic-bezier(0, .33, .2, 1);
        animation-timing-function: cubic-bezier(0, .33, .2, 1);
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }
    .toastMsg.is-toastHide {
        -webkit-animation-name: toasthide;
        animation-name: toasthide;
        -webkit-animation-timing-function: cubic-bezier(0, .33, .2, 1);
        animation-timing-function: cubic-bezier(0, .33, .2, 1);
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }
    @-webkit-keyframes toastshow {
        0% {
            opacity: 0;
            -webkit-transform: scale(1.185);
            transform: scale(1.185);
        }
        to {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
    @keyframes toastshow {
        0% {
            opacity: 0;
            -webkit-transform: scale(1.185);
            transform: scale(1.185);
        }
        to {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
    @-webkit-keyframes toasthide {
        0% {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        to {
            opacity: 0;
            -webkit-transform: scale(.815);
            transform: scale(.815);
        }
    }
    @keyframes toasthide {
        0% {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        to {
            opacity: 0;
            -webkit-transform: scale(.815);
            transform: scale(.815);
        }
    }
</style>
