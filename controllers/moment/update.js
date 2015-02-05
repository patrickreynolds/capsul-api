// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    // Query MongoDB users by id
    User.findById(req.params.userId, function(err, user) {
        if (err) {
            res.json({
                status: 400,
                error: err
            })
        } else {
            user.moments = user.get('moments').map(function(moment) {
                if (moment._id.toHexString() === req.body.moment._id) {
                    moment.name = parseFloat(req.body.moment.name)
                    moment.lat  = parseFloat(req.body.moment.latitude)
                    moment.lng  = parseFloat(req.body.moment.longitude)
                    moment.timestamp = parseFloat(req.body.moment.timestamp)
                    return moment
                } else
                    return moment
            })
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