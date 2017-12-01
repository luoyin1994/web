import Toast from 'vue-toast-mobile';
export const toast = (msg, duration = 1500) => {
    Toast({
        message : msg,
        position: 'middle',
        duration: duration
    });
};

