// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    // Query MongoDB users by id
    User.findById(req.params.id, function(err, user) {

        user.username  = req.body.username  || user.get('username')
        user.password  = req.body.password  || user.get('password')
        user.firstName = req.body.firstName || user.get('firstName')
        user.lastName = req.body.lastName   || user.get('lastName')
        user.instagramAccessToken = req.instagramAccessToken || user.get('instagramAccessToken')
        user.updatedAt = Date.now()

        user.save(function(err){
            if (err) {
                res.json({
                    status: 400,
                    error: err
                })
            } else {
                res.json({
                    status: 200
                })
            }
        })
    })
}