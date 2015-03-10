// Using Mongoose Moment model schema
var Moment = require('../../models/moment');

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var id = req.params.momentId
    User.remove({
        _id: id
    }, function(err) {
        if (err) {
            res.json({
                status: 400,
                error: err
            })
        } else {
            console.log('\nDestroying moment with id: ' + id + '\n')
            res.json({
                status: 200
            })
        }
    })
}