import ajax from './ajax';

export default {
    tk              : 'cf484bba8127b6de99ce5175253d2f31',
    progress_started: false,
    configFile      : null,
    pageSize        : 10,
    getEducation(education_article_id = 101) {
        return ajax('pc/get-education-article-detail', {education_article_id});
    }
};
