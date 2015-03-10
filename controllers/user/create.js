// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var newUser = {
    }

    console.log(req.body)
    console.log(req.params)

    newUser.username  = req.body.username
    newUser.password  = req.body.password
    newUser.updatedAt =  Date.now()
    newUser.createdAt =  Date.now()
    newUser.instagramAccessToken = req.body.instagramAccessToken

    // Inserting a new task into MongoDB
    // via Mongoose create method.
    User.create(newUser, function(err, user) {
        if (err) { 
            res.json({
                status: 400,
                error: err
            })
        } else {
            console.log("Created User: " + user);
            res.json({
                status: 200,
                user: user
            })
        }
    })
}