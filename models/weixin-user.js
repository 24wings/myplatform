/**
 * User Model 
 */

var keystone = require('keystone'),
    Types = keystone.Field.Types;

var WeixinUser = new keystone.List('WeixinUser', {
    label: '微信用户'
});
/**
 * theres has few fileds attribute  in Model filed
 * see 
 */
WeixinUser.add({
    username: {
        label: '姓名',
        type: String,
        required: true,
        index: true
    },
    phone: {
        label: '手机号',
        type: String,
        required: true
    },
    qq: {
        label: 'QQ',
        type: String,
        required: true
    },
    grader: {
        label: '年级',
        type: String,
        required: true
    },
    subject: {
        label: '专业',
        type: String,
        required: true
    }
});

WeixinUser.register();