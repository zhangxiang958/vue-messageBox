<script>
    export default {
        data() {
            return {
                show: false,
                message: ''
            }
        },
        methods: {
        }
    }
</script>
<template>
    <transition name="modal">
        <div class="toast" v-if="show">
            {{ message }}
        </div>
    </transition>
</template>

<style scoped>
    .toast {
        position: absolute;
        bottom: 15%;
        left: 50%;
        transform: translateX(-50%);
        padding: 0 20px;
        line-height: 1.5;
        border-radius: 15px;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        background: rgba(85, 85, 85, 0.9);
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        transition: all 0.3s ease; 
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
