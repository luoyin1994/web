import ajax from './ajax';

export default {
    tk: 'cf484bba8127b6de99ce5175253d2f31',
    getEducation(params = {education_article_id: 101}) {
        return ajax('pc/get-education-article-detail', params);
    }
};
