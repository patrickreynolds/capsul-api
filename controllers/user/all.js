// Using Mongoose Task model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function (req, res, next) {
  User.find(function(err, users) {
    if (err) {
        res.json({
            status: 400,
            error: err
        })
    } else {
        console.log("Show all users")
        res.json({
            status: 200,
            users: users
        })
    }
  })
}