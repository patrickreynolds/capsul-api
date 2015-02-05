// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var moment = {
        name: req.body.name,
        lat: req.body.latitude,
        lng: req.body.longitude,
        timestamp: req.body.timestamp
    }

    // Inserting a new task into MongoDB
    // via Mongoose create method.
    User.findById(req.params.userId, function(err, user) {
        if (err) { 
            res.json({
                status: 400,
                error: err
            })
        } else {
            user.moments.push(moment)
            res.json({
                status: 200,
                moments: user.get('moments')
            })
        }
    })
}