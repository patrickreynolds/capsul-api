// Using Mongoose Moment model schema
var Moment = require('../../models/moment')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var moment = {
        name:        req.body.name,
        latitude:    req.body.latitude,
        longitude:   req.body.longitude,
        timestamp:   Date.now(),
        radius:      req.body.radius,
        createdAt:   Date.now(),
        updatedAt:   Date.now(),
        user:        req.params.userId
    }

    // Inserting a new task into MongoDB
    // via Mongoose create method.
    Moment.create(moment, function(err, moment) {
        if (err) { 
            res.json({
                status: 400,
                error: err
            })
        } else {
            if (err) { 
                res.json({
                    status: 400,
                    error: err
                })
            } else {
                res.json({
                    status: 200,
                    userId: req.params.userId,
                    moment: moment
                })
            }
        }
    })
}