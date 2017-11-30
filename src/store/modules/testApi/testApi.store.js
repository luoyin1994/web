import api from '@api';

export default {
    namespaced: true,
    state     : {
        title: '',
        msg  : ''
    },
    getter    : {},
    mutations : {
        changeState(state, obj) {
            state[obj.name] = obj.value;
        }
    },
    actions   : {
        async getTestApiData({commit}) {
            let testApiData = await api.getTestApiData();
            console.log(testApiData.data);
            // Object.keys(testApiData.data).forEach(key => {
            //     commit('changeState', {
            //         name : key,
            //         value: testApiData.data[key],
            //     });
            // });
        }
    }
};