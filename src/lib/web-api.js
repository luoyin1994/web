import Vue from 'vue'
import {WebUtil} from './web-util.js';
import {WebHttp} from './web-http.js';
import {WebConstant} from './web-constant.js';
import router from '../core/router'

var WebApi = {
    tk: null,
    progress_started: false,
    configFile: null,
    pageSize: 10,
    startProgress(time){
        if(router.app.loading)
            router.app.loading = false;
        router.app.loading = true;
    },
    finishProgress(){
        router.app.loading = false;
    },
    failProgress(){
        router.app.loading = false;
    },
    setTk(tk){
        if(tk != undefined){
            this.tk = tk;
        }
    },
    setConfigFile(file){
        if(file != undefined){
            this.configFile = file;
        }
    },
    setPageSize(size){
        this.pageSize = size;
    },
    login(user_name,user_password){
        return WebHttp.ajax('pc/user-login', {user_name,user_password},false);
    },
    logout(){
        return WebHttp.ajax('pc/logout');
    },
    forgetPassword(user_mobile, sms_code, new_password){
        return WebHttp.ajax('pc/forget-password', {user_mobile, sms_code, new_password},false);
    },
    sendVerificationCode(mobile,image_code,unique_code){
        return WebHttp.ajax('pc/send-verification-code', {mobile,image_code,unique_code},false);
    },
    getVerifyImage(unique_code){
        return WebHttp.ajax('app/get-verify-image',{unique_code},false);
    },
    uploadDataImage(data_image){
        return WebHttp.ajax('pc/upload-data-image', {data_image});
    },
    changePassword(old_password,new_password){
        return WebHttp.ajax('pc/change-password', {old_password,new_password});
    },
    getVideosUrl(){
        return WebHttp.ajax('pc/get-videos-url');
    },
    getUserList(real_name,user_type,company_id,page, page_size){
        return WebHttp.ajax('pc/get-user-list', {real_name,user_type,company_id,page, page_size});
    },
    reverseUserStatus(user_id){
        return WebHttp.ajax('pc/reverse-user-status', {user_id});
    },
    createUser(user_name,real_name,user_password,user_mobile,gender,ethnic_group,identity_card,identity_card_picture,birth_date,user_address,company_id,real_picture,user_remark,user_types,user_type_files,enter_site_jiaodi,education_jiaodi,seasonal_jiaodi,safety_jiaodi){
        return WebHttp.ajax('pc/create-user', {user_name,real_name,user_password,user_mobile,gender,ethnic_group,identity_card,identity_card_picture,birth_date,user_address,company_id,real_picture,user_remark,user_types,user_type_files,enter_site_jiaodi,education_jiaodi,seasonal_jiaodi,safety_jiaodi});
    },
    editUser(user_id,user_name,real_name,user_mobile,gender,ethnic_group,identity_card,identity_card_picture,birth_date,user_address,company_id,real_picture,user_remark,user_types,user_type_files,enter_site_jiaodi,education_jiaodi,seasonal_jiaodi,safety_jiaodi){
        return WebHttp.ajax('pc/edit-user', {user_id,user_name,real_name,user_mobile,gender,ethnic_group,identity_card,identity_card_picture,birth_date,user_address,company_id,real_picture,user_remark,user_types,user_type_files,enter_site_jiaodi,education_jiaodi,seasonal_jiaodi,safety_jiaodi});
    },
    deleteUser(user_id){
        return WebHttp.ajax('pc/delete-user', {user_id});
    },
    getUserDetail(user_id){
        return WebHttp.ajax('pc/get-user-detail', {user_id});
    },
    getCompanyList(){
        return WebHttp.ajax('pc/get-all-companys');
    },
    addUserPoint(user_id,point_type,point_remark){
        return WebHttp.ajax('pc/add-user-point',{user_id,point_type,point_remark});
    },
    addUserViolation(user_id,violation_type,violation_remark){
        return WebHttp.ajax('pc/add-user-violation',{user_id,violation_type,violation_remark});
    },
    getViolationHistoryList(real_name,violation_type,company_id,page, page_size){
        return WebHttp.ajax('pc/get-violation-list',{real_name,violation_type,company_id,page, page_size});
    },
    deleteViolationHistory(violation_history_id){
        return WebHttp.ajax('pc/delete-violation',{violation_history_id});
    },
    getPointHistoryList(real_name,admin_name,point_type,page, page_size){
        return WebHttp.ajax('pc/get-point-list',{real_name,admin_name,point_type,page, page_size});
    },
    getExamList(real_name,page, page_size){
        return WebHttp.ajax('pc/get-exam-list',{real_name,page, page_size});
    },
    getExamDetail(exam_history_id){
        return WebHttp.ajax('pc/get-exam-detail',{exam_history_id});
    },
    uploadFile(file){
        var data = new FormData();
        data.append('file', file);
        return WebHttp.ajax('pc/upload-file', data);
    },
    getUserTypeList(user_type_name,user_type_category,page, page_size){
        return WebHttp.ajax('pc/get-user-type-list', {user_type_name,user_type_category,page, page_size});
    },
    getAllUserTypes(){
        return WebHttp.ajax('pc/get-all-user-types');
    },
    deleteUserType(user_type_id){
        return WebHttp.ajax('pc/delete-user-type', {user_type_id});
    },
    createUserType(user_type_name,user_type_category,user_type_color,need_file,user_type_auth,need_msg_sendee){
        return WebHttp.ajax('pc/create-user-type', {user_type_name,user_type_category,user_type_color,need_file,user_type_auth,need_msg_sendee});
    },
    getUserTypeDetail(user_type_id){
        return WebHttp.ajax('pc/get-user-type-detail', {user_type_id});
    },
    editUserType(user_type_id,user_type_name,user_type_category,user_type_color,need_file,user_type_auth,user_count,need_msg_sendee){
        return WebHttp.ajax('pc/edit-user-type', {user_type_id,user_type_name,user_type_category,user_type_color,need_file,user_type_auth,user_count,need_msg_sendee});
    },
    getUserTypeUser(user_type_id){
        return WebHttp.ajax('pc/get-user-type-user', {user_type_id});
    },
    getEventList(event_classify,page, page_size){
        return WebHttp.ajax('pc/get-event-list', {event_classify,page, page_size});
    },
    getEventDetail(event_id){
        return WebHttp.ajax('pc/get-event-detail', {event_id});
    },
    createEvent(event_title,event_classify,event_content_type,event_content,event_files,recipient_company_ids,recipient_user_type_ids){
        return WebHttp.ajax('pc/create-event', {event_title,event_classify,event_content_type,event_content,event_files,recipient_company_ids,recipient_user_type_ids});
    },
    getEventReadList(event_id){
        return WebHttp.ajax('pc/get-event-read-list', {event_id});
    },
    getSensorList(sensor_key,page, page_size){
        return WebHttp.ajax('pc/get-sensor-list', {sensor_key,page, page_size});
    },
    createSensor(sensor_key){
        return WebHttp.ajax('pc/create-sensor', {sensor_key});
    },
    deleteSensor(sensor_id){
        return WebHttp.ajax('pc/delete-sensor', {sensor_id});
    },
    getEquipmentList(equipment_name,management_company_id,user_company_id,rent_company_id,page, page_size,equipment_group,equipment_type_id){
        return WebHttp.ajax('pc/get-equipment-list', {equipment_name,management_company_id,user_company_id,rent_company_id,page, page_size,equipment_group,equipment_type_id});
    },
    getDangerousEquipmentList(equipment_name,management_company_id,user_company_id,rent_company_id,page, page_size,equipment_group,equipment_type_id){
        return WebHttp.ajax('pc/get-equipment-list', {equipment_name,management_company_id,user_company_id,rent_company_id,page, page_size,equipment_group,equipment_type_id});
    },
    reverseEquipment(equipment_id){
        return WebHttp.ajax('pc/reverse-equipment', {equipment_id});
    },
    createDangerousEquipment(equipment_name,equipment_type,equipment_radius,equipment_user_type_id,equipment_users,equipment_commanders,management_company_id,user_company_id,rent_company_id,work_area,need_apply,equipment_remark,equipment_group,stay_time){
        return WebHttp.ajax('pc/create-equipment', {equipment_name,equipment_type,equipment_radius,equipment_user_type_id,equipment_users,equipment_commanders,management_company_id,user_company_id,rent_company_id,work_area,need_apply,equipment_remark,equipment_group,stay_time});
    },
    editDangerousEquipment(equipment_id,equipment_name,equipment_type,equipment_radius,equipment_user_type_id,equipment_users,equipment_commanders,management_company_id,user_company_id,rent_company_id,work_area,need_apply,equipment_remark,equipment_group,stay_time){
        return WebHttp.ajax('pc/edit-equipment', {equipment_id,equipment_name,equipment_type,equipment_radius,equipment_user_type_id,equipment_users,equipment_commanders,management_company_id,user_company_id,rent_company_id,work_area,need_apply,equipment_remark,equipment_group,stay_time});
    },
    createEquipment(equipment_name,equipment_type,equipment_radius,equipment_user_type_id,equipment_users,equipment_commanders,management_company_id,user_company_id,rent_company_id,work_area,need_apply,equipment_model,enter_site_date,out_site_date,stay_time,certificate_number,test_report_number,test_report_expiry_date,test_report_picture,equipment_group,media_player_url,equipment_brand,maintenance_date,certificate_picture){
        return WebHttp.ajax('pc/create-equipment', {equipment_name,equipment_type,equipment_radius,equipment_user_type_id,equipment_users,equipment_commanders,management_company_id,user_company_id,rent_company_id,work_area,need_apply,equipment_model,enter_site_date,out_site_date,stay_time,certificate_number,test_report_number,test_report_expiry_date,test_report_picture,equipment_group,media_player_url,equipment_brand,maintenance_date,certificate_picture});
    },
    editEquipment(equipment_id,equipment_name,equipment_type,equipment_radius,equipment_user_type_id,equipment_users,equipment_commanders,management_company_id,user_company_id,rent_company_id,work_area,need_apply,equipment_model,enter_site_date,out_site_date,stay_time,certificate_number,test_report_number,test_report_expiry_date,test_report_picture,equipment_group,media_player_url,equipment_brand,maintenance_date,certificate_picture){
        return WebHttp.ajax('pc/edit-equipment', {equipment_id,equipment_name,equipment_type,equipment_radius,equipment_user_type_id,equipment_users,equipment_commanders,management_company_id,user_company_id,rent_company_id,work_area,need_apply,equipment_model,enter_site_date,out_site_date,stay_time,certificate_number,test_report_number,test_report_expiry_date,test_report_picture,equipment_group,media_player_url,equipment_brand,maintenance_date,certificate_picture});
    },
    deleteEquipment(equipment_id){
        return WebHttp.ajax('pc/delete-equipment', {equipment_id});
    },
    getEquipmentDetail(equipment_id){
        return WebHttp.ajax('pc/get-equipment-detail', {equipment_id});
    },
    getEquipmentUsedList(page, page_size,equipment_type){
        return WebHttp.ajax('pc/get-equipment-used-list', {page, page_size,equipment_type});
    },
    getEquipmentUsedHistoryList(equipment_used_id){
        return WebHttp.ajax('pc/get-equipment-used-history-list', {equipment_used_id});
    },
    createEquipmentUsed(equipment_type,equipment_id,allow_users,usage_amount,start_date,end_date,start_time,end_time){
        return WebHttp.ajax('pc/create-equipment-used', {equipment_type,equipment_id,allow_users,usage_amount,start_date,end_date,start_time,end_time});
    },
    editEquipmentUsed(equipment_used_id,equipment_type,equipment_id,allow_users,usage_amount,start_date,end_date,start_time,end_time){
        return WebHttp.ajax('pc/edit-equipment-used', {equipment_used_id,equipment_type,equipment_id,allow_users,usage_amount,start_date,end_date,start_time,end_time});
    },
    deleteEquipmentUsed(equipment_used_id){
        return WebHttp.ajax('pc/delete-equipment-used', {equipment_used_id});
    },
    getSpecificEquipmentType(){
        return WebHttp.ajax('pc/get-specific-equipment-type')
    },
    getEquipmentUsers(equipment_type){
        return WebHttp.ajax('pc/get-equipment-users', {equipment_type});
    },
    getTypeOfEquipment(equipment_type){
        return WebHttp.ajax('pc/get-type-of-equipment', {equipment_type});
    },
    getEquipmentUsedDetail(equipment_used_id){
        return WebHttp.ajax('pc/get-equipment-used-detail', {equipment_used_id});
    },
    getConfigurationSystemFile(){
        return WebHttp.ajax('pc/get-configuration-system-file');
    },
    editPassword(user_id,new_password){
        return WebHttp.ajax('pc/change-user-password',{user_id,new_password});
    },
    getSysWorkflowList(){
        return WebHttp.ajax('pc/get-sys-workflow-list');
    },
    getAllSysWorkflowList(){
        return WebHttp.ajax('pc/get-all-sys-workflow-list');
    },
    getTaskList(workflow_id,page, page_size,request_name){
        return WebHttp.ajax('pc/get-task-list', {workflow_id,page, page_size,request_name});
    },
    getMyRequestList(workflow_id,page, page_size,request_name){
        return WebHttp.ajax('pc/get-my-task-list', {workflow_id,page, page_size,request_name});
    },
    getRequestDetail(request_id){
        return WebHttp.ajax('pc/get-request-detail', {request_id});
    },
    createRequest(request_name,workflow_id,request_documents){
        return WebHttp.ajax('pc/create-request', {request_name,workflow_id,request_documents});
    },
    submitRequest(request_id,request_name,description,next_reviewer,current_workflow_node_id ,request_documents,request_data){
        return WebHttp.ajax('pc/submit-request', {request_id,request_name,description,next_reviewer,current_workflow_node_id ,request_documents,request_data});
    },
    approveRequest(request_id,comment,next_reviewer,current_workflow_node_id,request_documents,request_data){
        return WebHttp.ajax('pc/approve-request', {request_id,comment,next_reviewer,current_workflow_node_id,request_documents,request_data});
    },
    rejectRequest(request_id,comment,current_workflow_node_id,reject_workflow_node_id,request_documents,request_data){
        return WebHttp.ajax('pc/reject-request', {request_id,comment,current_workflow_node_id,reject_workflow_node_id,request_documents,request_data});
    },
    terminateRequest(request_id,comment,request_documents,request_data){
        return WebHttp.ajax('pc/terminate-request', {request_id,comment,request_documents,request_data});
    },
    createDraftRequest(request_id,request_name,description,request_documents,request_data){
        return WebHttp.ajax('pc/create-draft-request', {request_id,request_name,description,request_documents,request_data});
    },
    getAllMyRequestCount(){
        return WebHttp.ajax('pc/get-all-my-request-count');
    },
    getAllRequestCount(){
        return WebHttp.ajax('pc/get-all-request-count');
    },
    getAllUserList(){
        return WebHttp.ajax('app/get-all-user-list');
    },
    reversePoint(event_id){
        return WebHttp.ajax('pc/reverse-point', {event_id});
    },
    reverseViolation(event_id){
        return WebHttp.ajax('pc/reverse-violation', {event_id});
    },
    updateProgress(query){
        return WebHttp.ajax('pc/update-progress', query);
    },
    getProgressList(progress_date){
        return WebHttp.ajax('pc/get-progress-list', {progress_date});
    },
    getProgressDetail(progress_id,progress_number){
        return WebHttp.ajax('pc/get-progress-detail', {progress_id,progress_number});
    },
    changeConfigurationPageSize(page_size){
        return WebHttp.ajax('pc/change-configuration-page-size', {page_size});
    },
    // news
    getNewsList(page,page_size){
		return WebHttp.ajax('pc/get-news-list', {page,page_size});
	},
    getNewsDetail(news_id){
		return WebHttp.ajax('pc/get-news-detail', {news_id});
	},
    createNews(news_title,news_cover_picture,news_content,is_top,news_position){
		return WebHttp.ajax('pc/create-news', {news_title,news_cover_picture,news_content,is_top,news_position});
	},
    editNews(news_id,news_title,news_cover_picture,news_content,is_top,news_position){
		return WebHttp.ajax('pc/edit-news', {news_id,news_title,news_cover_picture,news_content,is_top,news_position});
	},
    deleteNews(news_id){
		return WebHttp.ajax('pc/delete-news', {news_id});
	},
    // 安全教育管理
    getEducationList(page,page_size,education_article_type){
        return WebHttp.ajax('pc/get-education-article-list', {page,page_size,education_article_type});
    },
    getEducationDetail(education_article_id){
        return WebHttp.ajax('pc/get-education-article-detail', {education_article_id});
    },
    createEducation(education_article_title,is_top,education_article_type,education_article_summary,education_article_content){
        return WebHttp.ajax('pc/create-education-article', {education_article_title,is_top,education_article_type,education_article_summary,education_article_content});
    },
    editEducation(education_article_id,education_article_title,is_top,education_article_type,education_article_summary,education_article_content){
        return WebHttp.ajax('pc/edit-education-article', {education_article_id,education_article_title,is_top,education_article_type,education_article_summary,education_article_content});
    },
    deleteEducation(education_article_id){
        return WebHttp.ajax('pc/delete-education-article', {education_article_id});
    },
};
module.exports.WebApi = WebApi;
