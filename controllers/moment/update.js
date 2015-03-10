// Using Mongoose User model schema
var Moment = require('../../models/moment')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    // Query MongoDB moment by id
    Moment.findById(req.params.momentId, function(err, moment) {

        moment.name        = req.body.moment.name
        moment.latitude    = req.body.moment.latitude
        moment.lng         = req.body.moment.longitude
        moment.radius      = req.body.moment.radius
        moment.timestamp   = req.body.moment.timestamp
        moment.description = req.body.moment.description
        updatedAt          = Date.now()
        user               = req.params.userId

        moment.save(function(err){
            if (err) {
                res.json({
                    status: 400,
                    error: err
                })
            } else {
                res.json({
                    status: 200
                })
            }
        })
    })
}