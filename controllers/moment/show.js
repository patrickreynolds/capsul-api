// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    // Query MongoDB users by id
    User.findById(req.params.userId, function(err, user) {
        if (err) {
            res.json({
              status: 400,
              error: "No user found with id: " + id 
            })
        } else {
            var foundMoment;
            user.get('moments').forEach(function(moment) {
                if (moment._id.toHexString() === req.params.momentId) {
                    foundMoment = moment;
                }
            })
            if (foundMoment) {
                res.json({
                    status: 200,
                    userId: user.get('_id'),
                    moment: foundMoment
                })
            } else {
                res.json({
                    status: 400,
                    error: "No moment found with id: " + req.params.momentId
                })
            }
        }
    })
}