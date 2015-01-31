// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    // Query MongoDB tasks by id
    User.findOne({"username": username}, function(err, retrievedUser) {
        if (err) res.json(err)
        if (retrievedUser) {
            if (retrievedUser.get('password', String) === password) {
                console.log("\nAuthenticating User: " + username + "\n")
                res.json({
                    status: 200,
                    user: retrievedUser
                });
            } else {
                res.json({
                    status: 400,
                    field: "password",
                    error: "Invalid password for username: " + username 
                })
            }
        } else {
            res.json({
                status: 400,
                field: "username",
                error: "No user found with username: " + username 
            })
        }
    })
}
