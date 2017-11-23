import * as types from '../mutation-types'

const state = {
    current_user: null,
    task_total: 0,
};

const mutations = {
    [types.SET_CURRENT_USER] (state, user) {
        state.current_user = user;
    },
    [types.SET_TASK_TOTAL] (state, total) {
        state.task_total = total;
    }
};

export default {
    state,
    mutations
}
