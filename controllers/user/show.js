// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var id = req.params.id

    // Query MongoDB tasks by id
    User.findById(id, function(err, user) {
        if (err) {
            res.json({
              status: 400,
              error: "No user found with id: " + id 
            })
        } else {
            if (user) {
                console.log("\nRetrieving User: " + user.username + "\n")
                res.json({
                    status: 200,
                    user: user
                })
            } else {
                res.json({
                    status: 400,
                    error: "No user found with id: " + id 
                })
            }
        }
    })
}