var keystone = require('keystone');
var Student = keystone.list('Student');


//新增一个学生
async function post(req, res, next) {
    var { email, password } = req.body;
    var student = await Student.model({ email, password }).save();
    res.redirect('/');

}




module.exports = {
    post
}