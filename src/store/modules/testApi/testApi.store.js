import api from '../../../lib/api';

export default {
    namespaced: true,
    state     : {
        education: {}
    },
    getter    : {},
    mutations : {
        changeState(state, obj) {
            state[obj.name] = obj.value;
        },
        clearTestApiData(state) {
            state.education = {};
        }
    },
    actions   : {
        async getTestApiData({commit}) {
            let testApiData = await api.getEducation();
            console.log(testApiData);
            commit('changeState', {
                name : 'education',
                value: testApiData.data
            });
            // Object.keys(testApiData.data).forEach(key => {
            //     commit('changeState', {
            //         name : key,
            //         value: testApiData.data[key],
            //     });
            // });
        }
    }
};