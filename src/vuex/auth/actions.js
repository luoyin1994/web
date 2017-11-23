import * as types from '../mutation-types'

export const setCurrentAuth = ({dispatch}, module) => {
    dispatch(types.SET_CURRENT_AUTH, module)
};
