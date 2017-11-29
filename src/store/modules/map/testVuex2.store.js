export default {
    namespaced: true,
    state     : {
        title: '我是map下的testVuex2.vue',
        msg  : '我是massage',
    },
    getters   : {},
    mutations : {
        changeMsg(state, msg) {
            state.msg = msg;
        },
    },
    actions   : {
        changeMsgAsync({commit}, msg) {
            return new Promise(reject => {
                setTimeout(() => {
                    commit('changeMsg', msg);
                    reject();
                }, 1000);
            });
        },
    },
};