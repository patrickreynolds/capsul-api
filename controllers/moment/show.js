// Using Mongoose User model schema
var Moment = require('../../models/moment')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    // Query MongoDB users by id
    Moment.findById(req.params.momentId, function(err, moment) {
        if (err) {
            res.json({
              status: 400,
              error: "No user found with id: " + id 
            })
        } else {
            res.json({
                status: 200,
                userId: req.params.userId,
                moment: moment
            })
        }
    })
}