// Using Mongoose Task model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function (req, res, next) {
  User.findById(req.params.userId, function(err, user) {
    if (err) {
        res.json({
            status: 400,
            error: err
        })
    } else {
        console.log("Show all of " + user.get('username') + "'s moments")
        res.json({
            status: 200,
            userId: user.get('_id'),
            moments: user.get('moments')
        })
    }
  })
}