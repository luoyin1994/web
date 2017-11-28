var WebConstant = {
    DEBUG_MODE: false,
    // API_URL: 'http://localhost:8030/api/1.0/',
    // PICTURE_ADDRESS: 'http://localhost:8030/file/',
    //内部测试接口
    API_URL: 'http://180.168.216.242:8071/api/1.0/',
    PICTURE_ADDRESS: 'http://180.168.216.242:8071/file/',
    // SOCKET_URL: '180.168.216.242:3000',
    // MAP_WIDTH: 1065,
    // MAP_HEIGHT: 533,
    // MAP_CENTER_X: 375,
    // MAP_CENTER_Y: 415,
    // MAP_METERS: 10,
    // MAP_START_ZOOM: 0,
    // MAP_MAX_ZOOM: 3,

    //工地接口
    // API_URL: 'http://sml.worknrock.com/api/1.0/',
    // PICTURE_ADDRESS: 'http://sml.worknrock.com/file/',
    SOCKET_URL: '222.73.24.45:3000',

    MAP_WIDTH: 22980,
    MAP_HEIGHT: 27700,
    MAP_CENTER_X: 13000,
    MAP_CENTER_Y: 12528,
    MAP_METERS: 15.69,
    MAP_START_ZOOM: 3,
    MAP_MAX_ZOOM: 6,
    MAP_ICON_SIZE: 95,

//开发人本地接口
//     API_URL: 'http://gongdi.worknrock.com:8030/api/1.0/',
//     PICTURE_ADDRESS: 'http://gongdi.worknrock.com:8030/file/',
//     SOCKET_URL: '127.0.0.1:3000',

    /**
     * 请求api返回配置
     */
    RETURN_OK: '1', //成功
    RETURN_ERR_OTHER_MSG: '服务器内部错误',
    // 需特殊处理的error code
    ERR_WRONG_USERNAME_PWD: '-9',    // 用户名密码错误 || 原密码错误
    ERR_USER_NOT_EXIST: '-14',       // 用户不存在 || 系统中未存在您的手机号，请联系管理员修改您的密码
    ERR_IMAGE_CODE_NOT_EXIST: '-12', // 图形验证码错误
    ERR_NETWORK: '-100',             // 网络错误
    // 通用error code
    RETURN_ERROR_CODES: [
        {code: '-1', msg:'版本号错误'}, //版本号错误
        {code: '-2', msg:'接口名称错误或非法'}, //接口名称错误或非法（字母数字中划线组合）
        {code: '-3', msg:'接口参数错误'}, //接口参数错误
        // {code: '-4', msg:'数据库读写错误'}, //数据库读写错误
        {code: '-5', msg:''},
        {code: '-6', msg:''},
        {code: '-7', msg:''},
        {code: '-8', msg:'没有权限'}, //用户没有权限
        {code: '-9', msg:'用户名密码错误'},     //该用户密码错误
        {code: '-10', msg:'会话过期，请重新登录'}, //用户没有登录
        {code: '-11', msg:'短信发送失败'},   //短信发送失败
        {code: '-12', msg:'图形验证码错误'},   //图形验证码错误
        {code: '-13', msg:'短消息验证码错误'},   //短消息验证码错误
        {code: '-14', msg:'用户不存在'},    //用户不存在
        {code: '-15', msg:'事件不存在'},   //事件不存在
        {code: '-16', msg:'错误的操作'},    //错误的操作
        {code: '-17', msg:'积分类型不存在'},    //积分类型不存在
        {code: '-18', msg:'违章类型不存在'},    //违章类型不存在
        {code: '-19', msg:'参数不合法'},    //参数不合法
        {code: '-20', msg:'设备类型不存在'},    //设备类型不存在
        {code: '-21', msg:'设备使用不存在'},    //设备使用不存在
        {code: '-22', msg:'短信验证码错误'}, //验证码错误
        {code: '-23', msg:'手机号已经被绑定'}, //手机号已经被绑定
        {code: '-24', msg:'设备领用已满'},    //设备领用已满
        {code: '-25', msg:'设备已过期'},    //设备已过期
        {code: '-26', msg:'设备已被领用'},    //设备已被领用
        {code: '-27', msg:'设备不存在'},    //设备不存在
        {code: '-28', msg:'时间不合法'},    //时间不合法
        {code: '-29', msg:'设备已绑定标签'},    //设备已绑定标签
        {code: '-30', msg:'违章记录不存在'},    //违章记录不存在
        {code: '-31', msg:'定位标签不存在'},  //定位标签不存在
        {code: '-32', msg:'标签已被绑定'},  //标签已被绑定
        {code: '-33', msg:'该用户没有考试'},    //该用户没有考试
        {code: '-34', msg:'该工种下没有用户'},   //该工种下没有用户
        {code: '-35', msg:'没有该工种'},    //没有该工种
        {code: '-36', msg:'标签已存在'},   //标签已存在
        {code: '-37', msg:'设备未归还'}, //设备未归还
        {code: '-38', msg:'工种下已经有用户'},   //工种下已经有用户
        {code: '-39', msg:'该设备必须申请使用'},   //该设备必须申请使用
        {code: '-40', msg:'安全教育文章不存在'},   //安全教育文章不存在
        {code: '-41', msg:'用户不允许使用该设备'},   //用户不允许使用该设备
        {code: '-42', msg:'用户名已经存在'},   //用户名已经存在
        {code: '-43', msg:'通知消息已阅'},   //通知消息已阅
        {code: '-44', msg:'缩略图创建失败'},   //缩略图创建失败
        {code: '-45', msg:'任务不存在'},   //任务不存在
        {code: '-46', msg:'该设备无法绑定移动标签'},   //该设备无法绑定移动标签
        {code: '-47', msg:'系统工种无法删除'},   //系统工种无法删除
        {code: '-48', msg:'任务已经完成'},    //任务已经完成
        {code: '-49', msg:'workflow_node_id不匹配'},    //workflow_node_id不匹配
        {code: '-50', msg:'会跳节点错误'},    //会跳节点错误
        {code: '-51', msg:'有设备绑定了该工种'},    //有设备绑定了该工种
        {code: '-52', msg:'设备检测报告已过期'},   //设备检测报告已过期
        {code: '-100', msg:'网络错误'},
    ],

    MODULE_NEWS_TEXT: '新闻中心',
    MODULE_POSITION_TEXT: '实时定位',
    MODULE_VIDEO_TEXT: '视频监控',
    MODULE_EVENT_TEXT: '事件通知',
    MODULE_NEW_TASK_TEXT: '新建任务',
    MODULE_UPCOMING_TASK_TEXT: '待办任务',
    MODULE_ALL_TASK_TEXT: '全部任务',
    MODULE_ADMIN_TEXT: '人员管理',
    MODULE_ILLEGAL_TEXT: '违章记录',
    MODULE_INTEGRAL_TEXT: '印花积分明细',
    MODULE_EDUCATION_TEXT: '教育评测记录',
    MODULE_LARGE_MEDIUM_DEVICE_TEXT: '大中型设备管理',
    MODULE_DANGEROUS_DEVICE_TEXT  : '危险品设备管理',
    MODULE_DEVICE_USED_TEXT: '特殊设备使用',
    MODULE_TYPE_WORK_TEXT: '工种管理',
    MODULE_POSITION_LABEL_TEXT: '定位标签',
    MODULE_SAFETY_EDUCATION_TEXT: '安全教育管理',
    MODULE_PROGRESS_TEXT: '工程进度管理',


    PC_READ_AUTH_LIVE_POSITION: 11,  //实时定位访问权限
    PC_READ_AUTH_VIDEO_MONITOR: 12,  //视频监控访问权限
    PC_READ_AUTH_EVENT_NOTICE: 13,   //事件通知访问权限
    PC_WRITE_AUTH_EVENT_NOTICE: 14,  //事件通知编辑权限
    PC_READ_AUTH_WORKFLOW: 15,  //任务管理访问权限
    PC_WRITE_AUTH_WORKFLOW: 16, //任务管理编辑权限
    PC_READ_AUTH_USER: 17, //人员管理访问权限
    PC_WRITE_AUTH_USER: 18, //人员管理编辑权限
    PC_READ_AUTH_VIOLATION_HISTORY: 19,  //违章记录访问权限
    PC_WRITE_AUTH_VIOLATION_HISTORY: 20, //违章记录编辑权限
    PC_READ_AUTH_POINT_HISTORY: 21,  //印花积分访问权限
    PC_READ_AUTH_EXAM_HISTORY: 22, //教育评测访问权限
    PC_READ_AUTH_LARGE_EQUIPMENT: 23, //大中型设备管理访问权限
    PC_WRITE_AUTH_LARGE_EQUIPMENT: 24, //大中型设备管理编辑权限
    PC_READ_AUTH_DANGER_EQUIPMENT: 45, //危险品设备管理访问权限
    PC_WRITE_AUTH_DANGER_EQUIPMENT: 46, //危险品设备管理编辑权限
    PC_READ_AUTH_EQUIPMENT_USED: 25, //特殊设备管理访问权限
    PC_WRITE_AUTH_EQUIPMENT_USED: 26, //特殊设备管理编辑权限
    PC_READ_AUTH_USER_TYPE: 27,  //工种设置访问权限
    PC_WRITE_AUTH_USER_TYPE: 28,  //工种设置编辑权限
    PC_READ_AUTH_SENSOR: 29, //定位标签访问权限
    PC_WRITE_AUTH_SENSOR: 30,  //定位标签编辑权限
    PC_READ_AUTH_PROGRESS : 51, //工程进度访问权限
    PC_WRITE_AUTH_PROGRESS: 52,  //工程进度编辑权限
    PC_READ_AUTH_NEWS : 53, //新闻中心访问权限
    PC_WRITE_AUTH_NEWS: 54,  //新闻中心编辑权限
    PC_WRITE_AUTH_EDUCATION: 57,  //安全教育管理编辑权限
    PC_AUTH:[11,12,53,54,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,45,46,51,52,57], // 通过该顺序设置左侧导航默认的选中

    MESSAGE_REQUIRED: '必填',
    MESSAGE_OPERATION_IN_PROGRESS: '上次操作还未完成，请等待',

    /**
     * 事件类别
     */
    // 需特殊处理的事件
    EVENT_EMERGENCY_CODE: 1003,  // 紧急重大问题拨号

    // 工种类别
    USER_TYPE_CATEGORYS:[
        {code:4,msg:'监理工种'},
        {code:3,msg:'管理工种'},
        {code:2,msg:'特殊工种'},
        {code:1,msg:'一般工种'},
    ],

    EDIT_FIELD_POSITION_NONE: -10,
    EDIT_FIELD_POSITION_ALL: -20,
    EDIT_FIELD_POSITION_ALL_TEXT: 'all',

    EDIT_FIELD_READ_ONLY: -1,
    EDIT_FIELD_EDITABLE: -2,
    EDIT_FIELD_EDITABLE_AND_MANDATORY: -3,

    REVIEWER_STATUS_PENDING: 2,
    REVIEWER_STATUS_APPROVED: 3,
    REVIEWER_STATUS_FORWARDED: 5,

    REQUEST_STATUS_REJECT: 1,
    REQUEST_STATUS_IN_PROGRESS: 2,
    REQUEST_STATUS_FINISHED: 3,           //任务完成code
    REQUEST_STATUS_TERMINATED: 4,
    TOTAL_MANAGER_USER_TYPE_ID: 81,       //总包项目管理工种id
    SUBCONTRACTING_MANAGER_USER_TYPE_ID: 63,       //分包项目管理工种id


    COMMANDERS_TYPE_ID : 3,               //指挥人员ID
    // ELECTRIC_WELDER_TYPE_ID: 16,          //电焊工ID 50
    ELECTRIC_WELDER_TYPE_ID: 75,          //电焊工ID sml
    SAFETY_EDUCATION_PLACE_TYPE_ID: 14,   //安全教育讲评点类型ID
    CAMERA_TYPE_ID: 15,                   //摄像头类型ID
    WORKFLOW_TEMPLATE_FIRST_ID: 9,        //样板先行ID

	/**
     * GUID
	 */
	AREAS_GUID: '9a3cd42abec24a299a56bee949745ab5',  // 区域GUID
    RANT_NAME_GUID:  '29fb6994264a4ccbbd4115b8c812322f', // 真实姓名GUID
    COMPANY_GUID:  '78284bf68aba4b0c84b26b928fd9db43', // 单位GUID
	/**
     * 民族
	 */
	ETHNICGROUPLIST: ["汉族","蒙古族","回族","藏族","维吾尔族","苗族","彝族","壮族","布依族","朝鲜族","满族","侗族","瑶族","白族","土家族", "哈尼族","哈萨克族","傣族","黎族","傈僳族","佤族","畲族","高山族","拉祜族","水族","东乡族","纳西族","景颇族","柯尔克孜族", "土族","达斡尔族","仫佬族","羌族","布朗族","撒拉族","毛南族","仡佬族","锡伯族","阿昌族","普米族","塔吉克族","怒族", "乌孜别克族", "俄罗斯族","鄂温克族","德昂族","保安族","裕固族","京族","塔塔尔族","独龙族","鄂伦春族","赫哲族","门巴族","珞巴族","基诺族"],

    /**
     * 交底
     */
    DISCLOSURE: {
        items:[
            {name: "进场教育", name_en: "enter_site_jiaodi"}, // name_en基于后台api定义的字段
            {name: "安全技术交底", name_en: "safety_jiaodi"}, // name_en基于后台api定义的字段
            {name: "三级教育", name_en: "education_jiaodi"}, // name_en基于后台api定义的字段
            {name: "操作规程交底", name_en: "seasonal_jiaodi"}, // name_en基于后台api定义的字段
        ],
        state: {
            right: {code: 1, msg: '已完成'}, // 已交底
            wrong: {code: 0, msg: '未完成'}, // 未交底
            needless: {code: -1, msg: '无'}, // 不需要交底
        }
    }
};
module.exports.WebConstant = WebConstant;