// Using Mongoose Task model schema
var Moment = require('../../models/moment')

// Exporting via the module pattern.
module.exports = function (req, res, next) {
  
    if (req.params.userId) {
        var userId = req.params.userId;

        Moment.find({user: userId}, function(err, moments) {
            if (err) {
                res.json({
                    status: 400,
                    error: err
                })
            } else {
                console.log("Show all of " + userId + "'s moments")
                res.json({
                    status: 200,
                    userId: userId,
                    moments: moments
                })
            }
        })
    } else {
        res.json({
            status: 400,
            error: 'No userId passed with request'
        })
    }
}