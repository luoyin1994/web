import * as types from '../mutation-types'
import {WebConstant}  from '../../lib/web-constant.js'

const state = {
    current_module: WebConstant.MODULE_MONITOR
};
console.log(state.current_module)
const mutations = {
    [types.SET_CURRENT_MODULE] (state, module) {
        state.current_module = module;
    }
};

export default {
    state,
    mutations
}
