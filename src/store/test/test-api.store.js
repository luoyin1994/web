import api from '../../lib/api';
import {RETURN_OK} from '../../conf/api.conf';

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
            let testApiData = await api.getEducation3({education_article_id: 101});
            // let testApiData = await api.getEducation2();
            if (testApiData.code === RETURN_OK) {
                console.log(testApiData, 'RETURN_OK');
                commit('changeState', {
                    name : 'education',
                    value: testApiData.data
                });
            }
            // else {
            //     console.log(testApiData, 'ERR');
            // }
        }
    }
};