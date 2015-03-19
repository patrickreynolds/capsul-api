// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var id = req.body.id;
    console.log(id)
    // Query MongoDB tasks by id
    User.findOne({id: id}, function(err, user) {
        if (err) {
            res.json({
                status: 400,
                error: err
            })
        } if (!user) {
            console.log(user)
            console.log("\nCan't Authenticate User: " + id + "\n")
            res.json({
                status: 400,
                error: "No user found with instagramID: " + id
            });
        } else {
            console.log("\nAuthenticating User: " + id + "\n")
            console.log(user)
            res.json({
                status: 200,
                user: user
            });
        }
    })
}
