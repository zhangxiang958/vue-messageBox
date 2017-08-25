<script>
    export default {
        data() {
            return {
                show: false,
                message: '',
                cssClass: {
                    'is-toastShow': this.show,
                    'is-toastHide': !this.show
                },
                style: {}
            }
        },
        methods: {
        }
    }
</script>
<template>
    <div class="toast">
        <div class="toastMsg" 
            :class="cssClass"
            :style="style"
        >
            {{ message }}
        </div>
    </div>
</template>

<style scoped>
    .toast {
        position: fixed;
        bottom: 15%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 999;
    }
    .toastMsg {
        margin-bottom: 16px;
        padding: 0 16px;
        width: auto;
        height: 32px;
        line-height: 32px;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.8);
        font-size: 14px;
        color: #fff;
        white-space: nowrap;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }
    .toastMsg.is-toastHide, .toastMsg.is-toastShow {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
        -webkit-animation-duration: .4s;
        animation-duration: .4s;
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
