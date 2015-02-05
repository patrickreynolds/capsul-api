// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    var moment = {
        name: req.body.moment.name,
        lat: parseFloat(req.body.moment.latitude),
        lng: parseFloat(req.body.moment.longitude),
        timestamp: parseFloat(req.body.moment.timestamp)
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
            if (!user.get('moments')) {
                user.moments = []
            }
            user.moments = user.get('moments').push(moment)
            User.findByIdAndUpdate(req.params.userId, {"moments": user.moments}, function(err) {
                if (err) { 
                    res.json({
                        status: 400,
                        error: err
                    })
                } else {
                    res.json({
                        status: 200,
                        userId: user.get('_id'),
                        moments: user.get('moments')
                    })
                }
            })
        }
    })
}