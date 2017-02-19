var keystone = require('keystone');
var WeixinUser = keystone.list('WeixinUser');

exports.addWeixinUser = function (req, res) {
    var {
        username,
        phone,
        qq,
        grade,
        subject
    } = req.query;
    new WeixinUser.model({
        username,
        phone,
        qq,
        grade,
        subject
    }).save(function (err, result) {
        res.json({
            issuccess: !err,
            data: result
        });
    })

};