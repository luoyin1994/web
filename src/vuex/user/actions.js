import * as types from '../mutation-types'

export const setCurrentUser = ({dispatch}, user) => {
    dispatch(types.SET_CURRENT_USER, user)
};
export const setTaskTotal = ({dispatch}, total) => {
    dispatch(types.SET_TASK_TOTAL, total)
};



