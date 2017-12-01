import {ajax} from './plugins/ajax';
let api = {
    tk: 'cf484bba8127b6de99ce5175253d2f31',
    setTk(tk) {
        if (tk != undefined) {
            this.tk = tk;
        }
    },
    getEducation(params = {education_article_id: '', arg2: ''}) {
        return ajax('pc/get-education-article-detail', params);
    },
    getEducation2(params = {education_article_id: ''}, options = {}) {
        return api.getEducation(params, Object.assign({openProgressBar: false, specialErrorCodesMap: [{code: '-2', msg: 'test inner'}]}, options));
    },
    getEducation3(params = {education_article_id: ''}, options = {specialErrorCodesMap: [{code: '-2', msg: 'test outer'}]}) {
        return api.getEducation(params, Object.assign({openProgressBar: false, specialErrorCodesMap: [{code: '-2', msg: 'test inner'}]}, options));
    },
    getEducation4(params = {education_article_id: ''},options = {}){
        return api.getEducation(params, options);
    },
    getEducation5(params = {education_article_id: ''}){
        return api.getEducation(params);
    }
};
export default api;
