// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    // Query MongoDB users by id
    User.findById(req.params.id, function(err, user) {

        user.username  = req.body.username || user.username
        user.password  = req.body.password || user.password
        user.firstName = req.body.firstName || user.firstName
        user.lastName = req.body.lastName || user.lastName
        user.instagramAccessToken = req.instagramAccessToken || user.instagramAccessToken
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