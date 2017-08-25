<script>
    export default {
        data() {
            return {
                show: false,
                message: '加载中，请稍后...',
                cssClass: {
                    'is-loadingShow': this.show,
                    'is-loadingHide': !this.show
                },
                style: {}
            }
        },
        methods: {
        }
    }
</script>
<template>
    <div class="loading">
        <div class="loadingMsg" 
            :class="cssClass"
            :style="style"
        >
            <div class="loading-fake">
                <div class="loadingCircle circle1"></div>
                <div class="loadingCircle circle2"></div>
                <div class="loadingCircle circle3"></div>
                <div class="loadingCircle circle4"></div>
                <div class="loadingCircle circle5"></div>
                <div class="loadingCircle circle6"></div>
                <div class="loadingCircle circle7"></div>
                <div class="loadingCircle circle8"></div>
                <div class="loadingCircle circle9"></div>
                <div class="loadingCircle circle10"></div>
                <div class="loadingCircle circle11"></div>
                <div class="loadingCircle circle12"></div>
            </div>
            {{ message }}
        </div>
        <div class="mask" :class="{ 'is-loadingShow': show, 'is-loadingHide': !show }"></div>
    </div>
</template>

<style scoped>
    .loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /*transform: translate(-50%, -50%);*/
        /*z-index: 999;*/
    }
    .mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 0;
    }
    .loadingMsg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        padding: 0 16px;
        width: 50%;
        height: 30%;
        border-radius: 20px;
        background: rgba(0, 0, 0, 0.8);
        font-size: 14px;
        color: #fff;
        text-align: center;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        transition: all 0.3s ease;
        z-index: 9999;
    }

    .loading-fake {
        position: relative;
        margin: 20% auto;
        width: 30%;
        height: 30%;
    }

    .loadingCircle {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
    }

    .loadingCircle:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 10%;
        height: 10%;
        background: #fff;
        border-radius: 50%;
        animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
    }

    .circle1 {
        transform: rotate(0deg);
    }
    .circle2 {
        transform: rotate(30deg);
    }
    .circle3 {
        transform: rotate(60deg);
    }
    .circle4 {
        transform: rotate(90deg);
    }
    .circle5 {
        transform: rotate(120deg);
    }
    .circle6 {
        transform: rotate(150deg);
    }
    .circle7 {
        transform: rotate(180deg);
    }
    .circle8 {
        transform: rotate(210deg);
    }
    .circle9 {
        transform: rotate(240deg);
    }
    .circle10 {
        transform: rotate(270deg);
    }
    .circle11 {
        transform: rotate(300deg);
    }
    .circle12 {
        transform: rotate(330deg);
    }

    .loading-fake .circle2:before {animation-delay: -1.1s; }
    .loading-fake .circle3:before {animation-delay: -1.0s; }
    .loading-fake .circle4:before {animation-delay: -0.9s; }
    .loading-fake .circle5:before {animation-delay: -0.8s; }
    .loading-fake .circle6:before {animation-delay: -0.7s; }
    .loading-fake .circle7:before {animation-delay: -0.6s; }
    .loading-fake .circle8:before {animation-delay: -0.5s; }
    .loading-fake .circle9:before {animation-delay: -0.4s; }
    .loading-fake .circle10:before {animation-delay: -0.3s; }
    .loading-fake .circle11:before {animation-delay: -0.2s; }
    .loading-fake .circle12:before {animation-delay: -0.1s; }

    .loadingMsg.is-loadingHide, .loadingMsg.is-loadingShow, .mask.is-loadingHide, .mask.is-loadingShow {
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
        -webkit-animation-duration: .4s;
        animation-duration: .4s;
    }

    .loadingMsg.is-loadingShow, .mask.is-loadingShow {
        -webkit-animation-name: loadingshow;
        animation-name: loadingshow;
        -webkit-animation-timing-function: cubic-bezier(0, .33, .2, 1);
        animation-timing-function: cubic-bezier(0, .33, .2, 1);
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }
    .loadingMsg.is-loadingHide, .mask.is-loadingHide {
        -webkit-animation-name: loadinghide;
        animation-name: loadinghide;
        -webkit-animation-timing-function: cubic-bezier(0, .33, .2, 1);
        animation-timing-function: cubic-bezier(0, .33, .2, 1);
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }
    @-webkit-keyframes loadingshow {
        0% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes loadingshow {
        0% {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @-webkit-keyframes loadinghide {
        0% {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    @keyframes loadinghide {
        0% {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @-webkit-keyframes sk-circleFadeDelay {
        0%, 39%, 100% { 
            opacity: 0; 
        }
        40% { 
            opacity: 1; 
        }
    }
    @keyframes sk-circleFadeDelay {
        0%, 39%, 100% { 
            opacity: 0; 
        }
        40% { 
            opacity: 1; 
        } 
    }
</style>
