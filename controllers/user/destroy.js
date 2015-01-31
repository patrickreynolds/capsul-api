// Using Mongoose User model schema
var User = require('../../models/user');

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var id = req.params.id
    User.remove({
        _id: id
    }, function(err, user) {
        if (err) {
            res.json({
                status: 400,
                error: err
            })
        } else {
            console.log('\nDestroying user with id: ' + id + '\n')
            res.json({
                status: 200
            })
        }
    })
}