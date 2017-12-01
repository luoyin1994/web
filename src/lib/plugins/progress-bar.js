import Vue from 'vue';

/**
 * 异步任务时的进度条
 * @type {{progressStarted: boolean, startProgress: (function(*=)), finishProgress: (function()), failProgress: (function())}}
 */
const progressBar = {
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

export default progressBar;