export default {
    namespaced: true,
    state     : {
        title: '兄弟组件信息沟通栗子',
        msg  : '我是massage'
    },
    getters   : {},
    mutations : {
        changeMsg(state, msg) {
            state.msg = msg;
        }
    },
    actions   : {
        changeMsgAsync({commit}, msg) {
            return new Promise(reject => {
                setTimeout(() => {
                    commit('changeMsg', msg);
                    reject();
                }, 1000);
            });
        }
    }
};