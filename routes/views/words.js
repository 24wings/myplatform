var keystone = require('keystone');
var Word = keystone.list('Word');
async function get(req, res, next) {
    var words = await Word.model.find().exec();
    console.log(words);
    res.render('words', {
        words
    });


}




module.exports = {
    get
}