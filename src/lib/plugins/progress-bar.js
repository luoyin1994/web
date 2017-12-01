import Vue from 'vue';

export default {
    progressStarted: false,
    startProgress(time) {
        if (!this.progressStarted) {
            this.progressStarted = true;
            if (time !== null || time !== undefined) {
                time = 2000;
            }
            Vue.prototype.$Progress.start(time);
        }
    },
    finishProgress() {
        Vue.prototype.$Progress.finish();
        this.progressStarted = false;
    },
    failProgress() {
        Vue.prototype.$Progress.fail();
        this.progressStarted = false;
    }
};