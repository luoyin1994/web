import ajax from './plugins/ajax';

export default {
    tk: 'cf484bba8127b6de99ce5175253d2f31',
    setTk(tk) {
        if (tk != undefined) {
            this.tk = tk;
        }
    },
    getEducation(params = {education_article_id: 101}) {
        return ajax('pc/get-education-article-detail', params);
    }
};
