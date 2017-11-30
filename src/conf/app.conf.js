export default {
    SOCKET_URL: '222.73.24.45:3000',

    MAP_WIDTH: 22980,
    MAP_HEIGHT: 27700,
    MAP_CENTER_X: 13000,
    MAP_CENTER_Y: 12528,
    MAP_METERS: 15.69,
    MAP_START_ZOOM: 3,
    MAP_MAX_ZOOM: 6,
    MAP_ICON_SIZE: 95,

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