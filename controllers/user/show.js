// Using Mongoose User model schema
var User = require('../../models/user')
var Moment = require('../../models/moment')

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
                Moment.find({user: id}, function(err, moments) {
                    if (err) {
                        res.json({
                            status: 400,
                            error: "Error reading moments for user with id: " + id 
                        })        
                    } else {
                        user.moments = moments;
                        user.test = "test"
                        res.json({
                            status: 200,
                            user: user
                        })
                    }
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