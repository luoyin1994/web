import Toast from 'vue-toast-mobile';
import moment from 'moment';
import validIdentityCard from './identity-card';
import {WebConstant} from './web-constant'
import {WebApi} from './api'


var WebUtil = {
    getInt(val){
        if(typeof val !== 'undefined' && val != null){
            return parseInt(val, 10);
        }
        return val;
    },
    format(date, fmt) {
        var o = {
            "M+" : date.getMonth()+1,                 //月份
            "d+" : date.getDate(),                    //日
            "h+" : date.getHours(),                   //小时
            "m+" : date.getMinutes(),                 //分
            "s+" : date.getSeconds(),                 //秒
            "q+" : Math.floor((date.getMonth()+3)/3), //季度
            "S"  : date.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    },
    getDateTimeString(){
        return this.format(new Date(), 'yyyy-MM-dd hh:mm:ss')
    },
    isValidEmail(email){
        if ((email.length > 128) || (email.length < 6))
            return false;
        var format = /^[A-Za-z0-9+]+[A-Za-z0-9\.\_\-+]*@([A-Za-z0-9\-]+\.)+[A-Za-z0-9]+$/;
        if (!email.match(format))
            return false;
        return true;
    },
    /**
     * 验证手机号
     * @param phoneNumber
     * @returns {boolean}
     */
    isValidPhoneNumber(phoneNumber){
        let reg = /^1[0-9]{10}$/;
        let flag = reg.test(phoneNumber);
        return flag;
    },
    /**
     * 验证身份证
     * @param identityCard
     * @returns {*}
     */
    isValidIdentityCard(identityCard){
        return validIdentityCard.checkCard(identityCard)
    },
    /**
     * 从身份证中获取生日字符串
     * @param identityCard
     * @returns {*}
     */
    getBirthdayFromIdentityCard(identityCard){
        if(typeof identityCard === 'undefined' || identityCard === '' ) return '';
        let birthdayObj =  validIdentityCard.extractBirthDayObj(identityCard);
        return `${birthdayObj.year}-${birthdayObj.month}-${birthdayObj.day}`;
    },
    /**
     * 查询一个日期是否在指定的日期范围内
     * @param searchDate
     * @param beginDate
     * @param endDate
     * @returns {boolean}
     */
    isBetweenDate(searchDate,beginDate,endDate){
        let start = new Date(beginDate);
        let end = new Date(endDate);
        let between = new Date(searchDate);
        let flagDown = between - start >= 0;
        let flagUp = between - end <= 0;
        if(flagDown && flagUp) return true;
    },
    /**
     * 获取年龄
     * @param birthDateString
     * @returns {number}
     */
    getAge(birthDateString) {
        let today = new Date();
        let birthDate = new Date(birthDateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    },
    toast(msg, duration=1500){
        Toast({
            message: msg,
            position: 'middle',
            duration: duration
        });
    },
    getFileExtension(file_name){
        let extension = file_name.split('.').pop();
        return file_name == extension? '': '.' + extension;
    }
    ,
    trimFileExtension(file_name){
        return file_name.split(".").slice(0,-1).join(".")
    },
    getFileName(file_path) {
        return file_path.replace(/^(.*[/\\])?/, '').replace(/(\.[^.]*)$/, '');
    },
    hasCommonBracketString(bracket_string_a, bracket_string_b){
        if(bracket_string_a == null || bracket_string_b == null)
            return false;
        let arr = bracket_string_a.split(']');
        for(var s in arr){
            if(s != '')
                if(bracket_string_b.indexOf(s + ']') > -1)
                    return true;
        }
        return false;
    },
    isValidFileExtension(file_name){
        let validFileExtensions = [".jpg", ".jpeg", ".png", ".bmp"];
        let ext = this.getFileExtension(file_name);
        for (let i = 0; i < validFileExtensions.length; i++) {
            var sCurExtension = validFileExtensions[i];
            if (ext.toLowerCase() == sCurExtension)
                return true;
        }
        return false;
    },
    isValidFileExtensionFile(file_name){
        let validFileExtensions = [".jpg", ".jpeg", ".png", ".bmp",'.doc','.docx','.ppt','.pptx','.xls','.xlsx','.pdf'];
        let ext = this.getFileExtension(file_name);
        for (let i = 0; i < validFileExtensions.length; i++) {
            var sCurExtension = validFileExtensions[i];
            if (ext.toLowerCase() == sCurExtension)
                return true;
        }
        return false;
    },
    convertBracketStringToArray(str){
        if(str == null || str == '')
            return [];
        let arr = [];
        let s = str.substring(1, str.length-1);
        s.split("][").forEach(function (val) {
            arr.push(parseInt(val))
        });
        return arr;
    },
    toYYMMDD2(date_time_str){
        return moment(date_time_str, 'YYYYMMDD').format('YYYY-MM-DD');
    },
    toYYMMDD(date_time_str){
        return moment(date_time_str, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD');
    },
    toHHmm(date_time_str){
        return moment(date_time_str, 'YYYY-MM-DD HH:mm:ss').format('HH:mm');
    },
    isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
    getTextByValue(val, items){
        if(items != null){
            let find = items.find(item => item.value == val);
            if(typeof find != 'undefined' && find != null)
                return find.text;
        }
        return '';
    },
    isReviewer(currentUser, currentReviewer){
        let result = false;
        if(currentUser == null || currentReviewer == null || currentReviewer == '')
            return false;
        currentReviewer[0].users.forEach( val => {
            if(val.user_id == currentUser.user_id)
                result = true;
        });
        return result;
    },
    goback(){
        window.history.go(-1);
    },
    _typeof(type){
        let toString = Object.prototype.toString;
        let string = toString.call(type).match(/^\[object\s(\w*)\]$/)[1];
        return string.toLowerCase();
    },
    testUrl(url){
        if(typeof url != 'string') return false;
        let reg=/^(\w+):\/\/([^/:]+)(:\d*)?([^ ]*)$/;
        return reg.test(url);
    },
    /**
     * 获取返回code的对应massage
     * @param code
     * @param dataCodes
     * @returns {undefined}
     */
    getCodeMsg(code,dataCodes){
        let data = dataCodes.find(item => item.code == code);
        return typeof data === 'undefined' ? WebConstant.RETURN_ERR_OTHER_MSG : data.msg;
    },
	/**
     * 根据有无滚动条table自动对齐
	 * @constructor
	 */
	AutoOrderedTableHead(){
		let tableHeadWarp = window.document.querySelector(".container-content-warp_head");
		let tableWarp = window.document.querySelector(".container-content-warp");
		let table = window.document.querySelector(".container-content-warp > table");
		let tableWarpHeight = tableWarp.offsetHeight;
		let tableHeight = table.offsetHeight;
		let tableWidth = table.offsetWidth;
		let tableHeadWarpWidth = tableHeadWarp.offsetWidth;
		if(tableHeight > tableWarpHeight){
			tableHeadWarp.style.paddingRight = tableHeadWarpWidth - tableWidth + 'px';
		}else{
			tableHeadWarp.style.paddingRight = 0;
		}
	},
	/**
	 * 合并组件中props属性
	 * 到props.data
	 */
	mergeProps() {
        let props = this.$options.props;
        for(let key in props){
            if(this.inputDataObj == null) {
				this.$set(this.$data, `inputDataObj`, {});
			}
            // 单独传该key的值时
            if(this[key] != null){
                if(key === 'images') {
                    this.$set(this.$data, `inputDataObj.${key}`, this[key]);
                }
                else if(key === 'image') {
                    // 把image的值添加到数组images中
                    this.$set(this.$data, `inputDataObj.${key}s`, [this[key]]);
                }
                else if(key !== 'inputDataObj'){
                    // 有默认值时
                    if(props[key].default != null){
                        let keyValue = this.inputDataObj[key] != null ? this.inputDataObj[key] : this[key];
                        this.$set(this.$data, `inputDataObj.${key}`, keyValue);
                    }else{
                        this.$set(this.$data, `inputDataObj.${key}`, this[key]);
                    }
                }

            }else{
                // this[key]为null或者为undefined时
                if(WebUtil._typeof(props[key].type()) === 'object'){
                    this.$set(this.$data, `inputDataObj.${key}`, {});
                }else if(WebUtil._typeof(props[key].type()) === 'array'){
                    this.$set(this.$data, `inputDataObj.${key}`, []);
                }
            }
        }
        // console.log(this.data)
    },
	/**
     * 判断是否给定值
	 * @param value
	 * @returns {boolean}
	 */
	isNotAssigned(value){
		if(value === null) return true;
		if(value === undefined) return true;
		if(typeof value === 'string' && value.trim() === '') return true;
		if(Object.prototype.toString.call(value) === '[object Object]' && Object.getOwnPropertyNames(value).length === 0) return true;
		if(Object.prototype.toString.call(value) === '[object Array]' && value.length === 0) return true;
		return false;
	},
	/**
	 * 表单输入验证
	 * @param obj
	 * @returns {boolean}
	 */
	validate(obj){
		let checkItems = obj.items;
		let notFillInMsgs = obj.msgs;
		for(let i = 0; i < checkItems.length; i++){
			if(WebUtil.isNotAssigned(checkItems[i])) {
				WebUtil.toast(notFillInMsgs[i]);
				return false;
			}
		}
		return true;
	},
	/**
	 * 是否需要滚动加载数据
	 * @param event // 滚对事件对象
	 * @param contentQuerySelectorString // 内容区域的查找字符串
	 */
	isNeedLoading(event, contentQuerySelectorString = '.container-content') {
		return new Promise((resolve) => {
			// 滚动层
			let container = event.target;
			// 获取滚动条向下滚动的距离
			let scrollTop = container.scrollTop;
			let onePageHeight = container.offsetHeight;
			// 内容层
			let content = container.querySelector(contentQuerySelectorString);
			// 获取数据渲染后容器的当前高度
			let currentHeight = content.offsetHeight;
			let isNeedLoading = parseInt(currentHeight - (scrollTop + onePageHeight)) === 0;
			if(isNeedLoading) {
				let currentPage = ++this.scroll.currentPage;
				resolve(currentPage);
			}
			// console.log(scrollTop + onePageHeight,'scroll')
			// console.log(currentHeight,'尽头')
		});
	},
    /**
     * 滚动条回到顶部
     * @param scrolledWrapper
     */
    scroll2Top(scrolledWrapper) {
        let baseTime         = 5; // 执行频率
        let time             = 300; // 全部完成的时间
        let currentScrollTop = scrolledWrapper.scrollTop; // 当前滚动点
        let targetScrollTop  = 0; // 目标滚动点
        let space            = Math.abs(currentScrollTop - targetScrollTop); // 距离目标点的间距
        let amount           = Math.floor(time / baseTime); // 总执行次数
        let oneStep          = space / amount; // 每一次执行的距离

        let timer = setInterval(() => {
            scrolledWrapper.scrollTop -= oneStep; // scrollTop 不会出现负数，减到底为0
            if (scrolledWrapper.scrollTop === 0) {
                clearInterval(timer);
                timer = null;
            }
        }, baseTime);
    },
    /**
     * 增加map弹层list项
     * @param obj
     * @returns {*}
     */
    addPopupListItem(obj,marker) {
        class PopupListItem{
            constructor(obj){
                this.name = obj.name; // [String]item的左侧名字
                this.value = obj.value; // [String]item具体值
                this.class = obj.class; // [String]item的扩展css类
                this.imgGallery = obj.imgGallery; // [Array]item的图片 {id, images, fn, setFn}
                this.defaultValue = obj.defaultValue; // [String]默认item的value值。没有具体值时的返回值。
                this.noValueIsHidden = obj.noValueIsHidden || false; // [Boolean]item没有具体值是否隐藏
                this.validate();
                this.judge();
                this.content = this.init();
            }
            validate(){
                // string处理
                let strings = ['name','value','class','defaultValue'];
                strings.forEach(key => {
                    // 没有值得初始值为空字符串
                    if(this[key] == null) this[key] = '';
                    if(typeof this[key] !== 'string'){
                        throw new Error(`"${key}"必须是String类型`);
                    }
                })
            }
            template(value){
                value = value || '';
                let attrTitle = `title="${value}"`;
                let imagesGallery = '';
                if(this.hasImages === true){
                    attrTitle = '';
                    marker.on('popupopen ',() => {
                        // 通过id注册lightGallery id同名只能为第一个注册
                        this.imgGallery.setFn(this.imgGallery.id);
                    });
                    imagesGallery = this.imgGallery.fn(this.imgGallery.id, this.imgGallery.images);
                }
                return `
                    <div class="item ${this.class} clear"><div class="name">${this.name}</div><div class="value ellipsis" ${attrTitle}>${imagesGallery}${value}</div></div>
                `
            }
            judge(){
                // 以下类型都为[Boolean]
                this.hasValue = this.value !== ''; // item是否 有具体的值
                this.hasImages = this.imgGallery && Array.isArray(this.imgGallery.images) === true && this.imgGallery.images.length > 0; // item是否 有图片的值
                this.isOnlyShowValue = this.hasValue && !this.hasImages; // item是否 只显示value
                this.isOnlyShowImages = !this.hasValue && this.hasImages; // item是否 只显示图片
                this.isShowValueAndImages = this.hasValue && this.hasImages; // item是否 同时显示value和图片
            }
            init(){
                if(this.isOnlyShowValue){
                    console.log('isOnlyShowValue');
                    return this.template(this.value);
                }else if(this.isOnlyShowImages){
                    console.log('isOnlyShowImages');
                    return this.template();
                }else if(this.isShowValueAndImages){
                    console.log('isShowValueAndImages');
                    return this.template(this.value);
                }else if(this.noValueIsHidden){
                    console.log('noValueIsHidden');
                    return '';
                }else{
                    console.log('defaultValue');
                    return this.template(this.defaultValue);
                }
            }
        }
        let popopListItem = new PopupListItem(obj);
        let content = popopListItem.content;
        popopListItem = null;
        return content;
    },
    /**
     * 获取查询字符串中key对应的值
     * 应用在vue-router  页面初始时route:{data(transition){}}中
     * @param transition  route:{data(transition){}}的transition
     * @param key  查询字符串中key
     * @param valueType  希望返回的类型
     * @returns {*}  没有值返回undefined
     */
    getRouterQuery(route, key, valueType = 'string') {
        let value = route.query[key];
        console.log(value)
        if (value != null) {
            // value有值时返回的默认为字符串
            if(valueType === 'string' && value.trim() != '') return value;
            if(valueType === 'number') return Number(value);
        }
        return undefined;
    },
    /**
     * 在web-api中设置select需要的数据
     * [{value, msg}] value对应select中option的value，msg对应option的显示字符串
     */
    setWebConstantSystemSafetyEducation__select() {
        if (WebApi.configFile != null) {
            if (Array.isArray(WebApi.configFile.system_safety_education)) {
                // 获取所有的安全教育类型
                WebApi.configFile.system_safety_education.forEach((item, index) => {
                    let obj   = {};
                    obj.value = item.education_article_type;
                    obj.msg   = item.education_title;
                    if (WebApi.configFile.system_safety_education__select == null)
                        WebApi.configFile.system_safety_education__select = [];
                    WebApi.configFile.system_safety_education__select.push(obj);
                });
            }
        }
    }
};
module.exports.WebUtil = WebUtil;