import {WebConstant} from '../conf/app.conf';
import {WebUtil} from './utils';
import {WebApi} from './api';
import moment from 'moment';

exports.timeToYYYYMMDDHHmm = (time)=>{
    return moment(time,'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD HH:mm');
};
exports.timeToHHmmss = (time)=>{
    return moment(time,'YYYY-MM-DD HH:mm:ss').format('HH:mm:ss');
};
exports.toHH = (time)=>{
    let hours = moment(time,'HH:mm:ss').format('HH');
    if(hours == 0 && time == '24:00')
        return 24;
    else
        return hours;
};
exports.toMM = (time)=>{
    return moment(time,'HH:mm:ss').format('mm');
};
exports.arrayIntersection = (arr1,arr2)=>{
    let result = [];
    arr1.forEach(function (val1) {
        arr2.forEach(function (val2) {
            if (val1 == val2)
                result.push(val1)
        })
    });
    return result;
};
exports.getEquipmentTypePic = (picture)=>{
    if(!picture)
        return;
    picture =  picture.replace(/^\//,'');
    let splits = picture.split('.');
    splits[splits.length - 2] += '_2';
    picture = splits.join('.');
    return WebConstant.PICTURE_ADDRESS + picture;
};
exports.getPictureUrl = (picture)=>{
    if(!picture)
        return;
    return WebConstant.PICTURE_ADDRESS + 'original' + '/' + picture;
};
exports.getDocDefaultIcon = (name)=>{
    if(!name)
        return;
    let result = '';
    let extension = name.split('.').pop();
    if(extension == 'doc' || extension == 'docx')
        result = 'word.png';
    else if(extension == 'ppt' || extension == 'pptx')
        result = 'ppt.png';
    else if(extension == 'xls' || extension == 'xlsx')
        result = 'excel.png';
    else if(extension == 'pdf')
        result = 'pdf.png';
    else
        return '';
    return '../../static/assets/images/doc_type_'+ result;
};
exports.getFromCert = (picture) => {
    if(!picture) return '';
    picture = picture.split('getFromCert-');
    if(picture.length == 2){
        return 'data:image/jpeg;base64,' + picture[1];
    }
    picture.join('');
    return WebConstant.PICTURE_ADDRESS + 'thumbnail' + '/' + picture;
};
exports.getThumbnailUrl = (picture)=>{
    return WebConstant.PICTURE_ADDRESS + 'thumbnail' + '/' + picture;
};
exports.getPictureName = (picture)=>{
    if(!picture)
        return;
    return picture.substring(10,picture.length);
};
exports.getNeedFileList = (userTypeList,needFile)=>{
    if(!userTypeList){
        return [];
    }
    let noNeedArr = [];
    let NeedArr = [];
    userTypeList.forEach(function (val) {
        if(val == null) return;
        if(val.need_file == 0)
            noNeedArr.push(val);
        else
            NeedArr.push(val)
    });
    if(needFile == 0)
        return noNeedArr;
    else
        return NeedArr;
};
exports.getUserName = (user_id,userList)=>{
    if(!user_id){
        return
    }
    let user = userList.find(user => user.user_id == user_id);
    return user.real_name;
};
exports.getUserTypeName = (user_type_id,userTypeList)=>{
    let user_type = userTypeList.find(user_type => user_type.user_type_id == parseInt(user_type_id));
    return user_type.user_type_name;
};
exports.getUserTypeNameStr = (all_user_types)=>{
    if(typeof all_user_types == 'undefined' || all_user_types == null || WebUtil._typeof(all_user_types) != 'array') return '';
    // if(!all_user_types.length)
    //     return '';
    let result = '';
    all_user_types.forEach(val => {
        if(typeof val == 'undefined' || val == null) result += '';
        else result += val.user_type_name + ','
    });
    return result.substring(0,result.length-1);
};
exports.isSpecialWorkType = (user_type_id,userTypeList,user_types)=> {
    let specialIndex = userTypeList.findIndex(user_type => user_type.user_type_id == user_type_id);
    let index = user_types.findIndex(user_type => user_type == user_type_id);
    return specialIndex != -1 && index != -1;
};
exports.isImage = (file_name)=>{
    return WebUtil.isValidFileExtension(file_name);
};
exports.getSensorFunctionType = (status)=>{
    if(status == 1)
        return '定位';
    else if(status == 2)
        return '移动';
};
exports.getViolationType = (type,system_violation_types)=>{
    if(system_violation_types.length == 0)
        return;
    let result = system_violation_types.find(violation => violation.violation_type_id == type);
    if (result == undefined){
        return ' ';
    }
    return result.title
};
exports.getPointsType = (type,system_point_types)=>{
    if(system_point_types.length == 0)
        return;
    let result = system_point_types.find(point => point.point_type_id == type);
    if (result == undefined){
        return ' ';
    }
    return result.title
};
exports.getEquipmentName = (type,system_equipment_types)=>{
    if(system_equipment_types.length == 0)
        return;
    let result = system_equipment_types.find(equipment => equipment.equipment_type_id == type);
    if (result == undefined){
        return ' ';
    }
    return result.equipment_type_name
};
exports.getEquipmentCommandersName= (user_id,admin_user)=>{
    let result = '';
    if(admin_user instanceof Array){
        user_id.forEach(val => {
            result += admin_user.find( user => user.user_id == val).user_name + ','
        });
    }
    return result.substring(0,result.length-1);
};
exports.getAnswer = (answerList)=>{
    let result = '';
    answerList.forEach(answer =>{
        if(answer.user_selected == 1){
            result += answer.label + ','
        }
    });
    return result.substring(0,result.length-1);
};
exports.getWorkAreaName = (work_area)=>{
    let result = '';
    if(work_area.length == 0)
        return '';
    work_area.forEach(val =>{
        switch (val){
            case 1:
                result += 'A区' + ', ';
                break;
            case 2:
                result += 'B区' + ', ';
                break;
            case 3:
                result += 'C区' + ', ';
                break;
            case 4:
                result += '上跨段' + ', ';
                break;
            case 5:
                result += '顶管段' + ', ';
                break;
        }
    });
    return result.substring(0,result.length-2);
};
exports.getEquipmentUsedUserName = (users)=>{
    let result = '';
    if(WebUtil._typeof(users) != 'array') return result;
    users.forEach((user) =>{
        if(user == null) result += '  ';
        else if((user + '') === '-1'){
            result += '不限  ';
        }
        else result += user.real_name + ', ';
    });
    return result.substring(0,result.length-2);
};
exports.unique = (arr)=>{
    let res = [];
    let json = {};
    for(let i = 0; i < arr.length; i++){
        if(!json[arr[i]]){
            res.push(arr[i]);
            json[arr[i]] = 1;
        }
    }
    return res;
};
/**
 * 筛选权限
 * @param arr1 总权限数组
 * @param arr2 规定的权限数组（根据该数组的排列顺序返回筛选后的权限数组）
 * @returns {Array} 筛选后的权限数组
 */
exports.filterAuth = (arr1,arr2)=>{
    let res = [];
    for(let i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i])>-1)
            res.push(arr2[i]);
    }
    return res;
};
exports.getUserTypeCategory = typeCode => {
    let result = '';
    if(typeCode == null || typeof typeCode == 'undefined') return result;
    WebConstant.USER_TYPE_CATEGORYS.forEach(category => {
        if(category.code == typeCode) result = category.msg;
    });
    return result;
};
exports.getClassifyName = (type,systemEventClassify)=>{
    let result = '';
    if(type != null && systemEventClassify != null){
        if(typeof systemEventClassify === 'object'){
			for(let key in systemEventClassify){
				if(key == type){
					result = systemEventClassify[key].event_classify_name;
                    return result;
				}
			}
        }
    }
    return result;
};
exports.getUserTypeNames = (user_type_id_list, all_user_types)=>{
    let result = [];
    if(user_type_id_list != null)
        user_type_id_list.forEach(user_type_id=>{
            let user_type = all_user_types.find(user_type=> user_type.user_type_id == user_type_id);
            if(typeof user_type != 'undefined' && user_type != null)
                result.push(user_type.user_type_name);
        });
    return result.join(',');
};
exports.getCapacity = (type)=>{
    let result = '';
    switch (type){
        case 0:
            result = '0%';
            break;
        case 1:
            result = '25%';
            break;
        case 2:
            result = '40%';
            break;
        case 3:
            result = '60%';
            break;
        case 4:
            result = '80%';
            break;
        case 5:
            result = '100%';
            break;
    }
    return result;
};
exports.getEventContentType = (type)=>{
    let result = '';
    switch (type){
        case 0:
            result = '链接';
            break;
        case 1:
            result = '图文';
            break;
    }
    return result;
};
exports.getViolationAddType = (type)=>{
    let result = '';
    switch (type){
        case -1:
            result = '';
            break;
        case 1:
            result = '撤消违章';
            break;
        case 0:
            result = '记为违章';
            break;
    }
    return result;
};
exports.getPointAddType = (type)=>{
    let result = '';
    switch (type){
        case -1:
            result = '';
            break;
        case 1:
            result = '取消加分';
            break;
        case 0:
            result = '加积分';
            break;
    }
    return result;
};
exports.getRequestStatusName = (type)=>{
    let result = '';
    switch (type){
        case 2:
            result = '进行中';
            break;
        case 3:
            result = '已完成';
            break;
        case 4:
            result = '已终止';
            break;
    }
    return result;
};
exports.isReviewer = (currentUser, currentReviewer)=>{
    return WebUtil.isReviewer(currentUser, currentReviewer);
};
exports.isButtonVisible = (request, currentUser, currentReviewer)=>{
    if(request != null)
        if(request.current_workflow_node_number != 1 && request.status != WebConstant.REQUEST_STATUS_TERMINATED && request.status != WebConstant.REQUEST_STATUS_FINISHED)
            return WebUtil.isReviewer(currentUser, currentReviewer);
    return false;
};
exports.isSubmit2Visible = (request)=>{
    if(request.current_workflow_node_number == 2 &&(request.workflow_id == 8 || request.workflow_id == 10))
        return true;
    else if(request.current_workflow_node_number == 3 && request.workflow_id == 11)
        return true;
    else
        return false;
};
exports.isApproveVisible = (request)=>{
    if(request.current_workflow_node_number == 2 &&(request.workflow_id == 8 || request.workflow_id == 10))
        return false;
    else if(request.current_workflow_node_number == 3 && request.workflow_id == 11)
        return false;
    else
        return true;
};
exports.isRejectVisible = (request)=>{
    if(request.current_workflow_node_number == 2 && (request.workflow_id == 8 || request.workflow_id == 10))
        return false;
    else if(request.current_workflow_node_number == 3 && request.workflow_id == 11)
        return false;
    else
        return true;
};
exports.isTerminateVisible = (request)=>{
    if(request.current_workflow_node_number == 2 && (request.workflow_id != 3 && request.workflow_id != 6))
        return false;
    else if(request.current_workflow_node_number == 3 && (request.workflow_id == 3 || request.workflow_id == 5 || request.workflow_id == 8 || request.workflow_id == 10 || request.workflow_id == 11) )
        return false;
    else if(request.current_workflow_node_number == 4 && (request.workflow_id != 1 && request.workflow_id != 6) )
        return false;
    else if(request.current_workflow_node_number == 5 && (request.workflow_id == 2 || request.workflow_id == 5 || request.workflow_id == 8) )
        return false;
    else
        return true;
};
exports.isSubmitButtonVisible = (request, currentUser)=>{
    if(request != null)
        if(request.current_workflow_node_number == 1 && request.status != WebConstant.REQUEST_STATUS_FINISHED)
            if(request.create_by_user_id == currentUser.user_id || request.create_source == 2)
                return true;
    return false;
};
/**
 * html解码
 * @param str
 * @returns {string}
 */
exports.htmlDecode =  (str) => {
    let s = "";
    if(typeof str != 'string') return;
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    return s;
};
exports.parseInt = (val) => {
    return parseInt(val);
};
exports.getEquipmentType = (type)=>{
    let result = '';
    WebApi.configFile.system_equipment_types.forEach(function (value) {
        if(value.equipment_type_id == type) result = value.equipment_type_name
    })
    return result;
};
exports.getEquipmentNeedApply = (status)=>{
    if(status == 1)
        return '需要';
    else if(status == 0)
        return '不需要';
};
exports.getTextByValue = (val, items)=>{
    return WebUtil.getTextByValue(val, items);
};
exports.filterFiled = (form, request)=>{
    if(!form)
        return '';
    let arr = [];
    let result = [];
   if(request.create_source == 1){
       form.forEach(val => {
           if(val.guid != 'e38d08d1398d463cafde5d86fed51fd8' && val.guid != '6d6495b2590e49889592893660c60206')
               arr.push(val)
       });
   }else
       arr = form;

    if(request.current_workflow_node_number == 1 && request.workflow_id == 10){
        arr.forEach(val => {
            if(val.guid != '190a8fa620a04ac38fae9e903dcfe03e' && val.guid != 'a0c83b98deea44b38cd0dd2f96cc55b6')
                result.push(val)
        })
    }else
        result = arr;
   return result;
};
exports.getCurrentWorkflowCounts = (workflow_id, counts)=>{
    let count = counts.find(val => val.workflow_id == workflow_id);
    if(count)
        return count.my_request_cnt;
    else
        return null;
};
exports.filterHistoryList = (historyList)=>{
    let action_0 = historyList.findIndex(history => history.action == 0);
    let action_1 = historyList.findIndex(history => history.action == 1);
    if(action_0)
        historyList.splice(action_0,1);
    if(action_1)
        historyList.splice(action_1,1);
    return historyList;
};
exports.getActionName = (action,request,current_workflow_name)=>{
    let result = '';
    switch (action){
        case -1:
            result = '创建';
            break;
        case 0:
            result = '提交';
            break;
        case 1:
            result = '通过';
            break;
        case 2:
            result = '不通过';
            break;
        case 4:
            result = '终止';
            break;
    }
    if(request.workflow_id == 8 && action == 1 && current_workflow_name == '分包单位整改中')
        result = '已整改';
    if(request.workflow_id == 10 && action == 1 && current_workflow_name == '分包项目经理上报施工情况')
        result = '已完成';
    if(request.workflow_id == 11 && action == 1 && current_workflow_name == '分包上传进出门证图片')
        result = '已提交';
    return result;
};
exports.getDocName = (name)=>{
    if(!name.length)
        return '';
    return name.substring(10,name.length)
};
exports.getOptGroupName = (name)=>{
    if(!name)
        return '';
    if(name == 'civilized_construction')
        return '文明施工整改问题';
    if(name == 'safe_production')
        return '安全生产整改问题';
    if(name == 'quality_control')
        return '质量控制整改问题';
};
exports.getUserTypeMap = (all_user_types)=>{
    let userTypeMap = {};
    if(all_user_types == null || typeof all_user_types == 'undefined') return userTypeMap;
    for(let i in all_user_types) {
        if (
            all_user_types[i] == null
            || all_user_types[i].user_type_category == null
            || typeof all_user_types[i].user_type_category == 'undefined'
        ) break;
        if (typeof userTypeMap['category-' + all_user_types[i].user_type_category] == 'undefined') {
            userTypeMap['category-' + all_user_types[i].user_type_category] = [];
        }
        userTypeMap['category-' + all_user_types[i].user_type_category].push(all_user_types[i]);
    }
    return userTypeMap;
};
exports.toEmptyStyleStr = val => {
    let result = '';
    result = (val === '' || val === null || val === undefined)
        ? '-'
        : val;
    return result;
};
exports.toEmptyStyle = val => {
    let result = '';
    result = (val === '' || val === null || val === undefined)
        ? ''
        : val;
    return result;
};
exports.toEmptyStyleNum = val => {
    let result = 0;
    result = (val === '' || val === null || val === undefined)
        ? 0
        : val;
    return result;
};
exports.getEthnic = val => {
    let result = 'X族';
    if(!isNaN(parseInt(val))) result = WebConstant.ETHNICGROUPLIST[val-1];
    return result;
};
exports.arrToString = arr => {
    let result = '';
    if(!Array.isArray(arr)) return result;
    if(arr.length === 0) return '-';
    arr.forEach(item => result += item + ', ');
    return result.slice(0, result.length - 2);
};
exports.filterEditableFields = (editableFields,field_guid,guid)=>{
    if(!editableFields)
        return true;
    else
        return !(field_guid == guid);
};
exports.getAreasText = (request_data,form)=>{
    if(request_data == null || request_data == undefined || form == null || form == undefined)
        return '-';
    let area_obj = form.find(item => item.guid === WebConstant.AREAS_GUID).items;
    let area_value = request_data.value.findIndex(item => item.field_guid == WebConstant.AREAS_GUID);

    if(!(area_value>-1))
        return '-';
    else
        return area_obj.find(item => item.value == request_data.value[area_value].value).text;
};
exports.extractText = str => {
	let result = '';
	if(str) {
	    if(typeof str === 'string'){
			let splits = str.split(/['"]+/);
			result = splits[0] === ''
				? splits[1]
				: splits[0];
        }else return str;
	}
	return result;
};
exports.convertRequestStatus = (request)=>{
    if(request == null)
        return '';
    if(request.status == WebConstant.REQUEST_STATUS_TERMINATED)
        return '已终止';
    if(request.status == WebConstant.REQUEST_STATUS_FINISHED)
        return '已完成';
    return request.current_workflow_node_description;
};
/**
 * 获取交底msg
 * @param code
 * @returns {string}
 */
exports.getDisclosureMsg = code => {
    let result = '';
    if(!isNaN(Number(code))){
        const State = WebConstant.DISCLOSURE.state;
        for (let key in State){
            if(State[key].code == code){
                result = State[key].msg;
                break;
            }
        }
    }
    return result;
};
/**
 * 返回相应安全教育类型number对应文字
 * @param typeNum 安全教育类型number
 * @returns {string} 对应文字
 */
exports.getEducationArticleType = typeNum => {
    let result = '';
    if(!isNaN(Number(typeNum))){
        let systemSafetyEducation = [];
        if(WebApi.configFile != null){
            if(Array.isArray(WebApi.configFile.system_safety_education)){
                // 获取所有的安全教育类型
                systemSafetyEducation = WebApi.configFile.system_safety_education;
            }
        }
        result = systemSafetyEducation.find(item => typeNum === item.education_article_type).education_title;
    }else{
        console.warn('The argument "typeNum" expects a number!!!');
    }
    return result;
};

