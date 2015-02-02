// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var newUser = {
    }

    user.username  = req.body.username || user.username
    user.password  = req.body.password || user.password
    user.firstName = req.body.firstName || user.firstName
    user.lastName  = req.body.lastName || user.lastName
    newUser.updatedAt =  Date.now()
    newUser.createdAt =  Date.now()
    user.instagramAccessToken = req.instagramAccessToken || user.instagramAccessToken

    // Inserting a new task into MongoDB
    // via Mongoose create method.
    User.create(newUser, function(err) {
        if (err) { 
            res.json({
                status: 400,
                error: err
            })
        } else {
            console.log("Created User: " + newUser.username);
            res.json({
                status: 200
            })
        }
    })
}