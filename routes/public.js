/**
 * Created by Anis on 11/02/2015.
 */
module.exports = function(app) {

    var funnyPicIndex = Math.floor(Math.random()*12);
    function getNextFunnyPic() {
        funnyPicIndex++;
        if (funnyPicIndex > 12) {
            funnyPicIndex = 0;
        }
        return __dirname + '/../funny-pics/' + funnyPicIndex + '.jpg';
    }

    app.get('/funny-pic', function(req, res) {
        if (req.user) {
            res.sendfile(getNextFunnyPic());
        } else {
            res.json(403, { message: 'Not authorized' });
        }
    });
}