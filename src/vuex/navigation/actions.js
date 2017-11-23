import * as types from '../mutation-types'

export const setCurrentModule = ({dispatch}, module) => {
    dispatch(types.SET_CURRENT_MODULE, module)
};
