import * as types from '../mutation-types'

const state = {
    current_auth: null
};

const mutations = {
    [types.SET_CURRENT_AUTH] (state, module) {
        state.current_auth = module;
    }
};

export default {
    state,
    mutations
}
