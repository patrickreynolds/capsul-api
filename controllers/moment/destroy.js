// Using Mongoose User model schema
var User = require('../../models/user');

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    User.findById(req.params.userId, function(err, user) {
        if (err) {
            res.json({
                status: 400,
                error: err
            })
        } else {
            user.moments = user.get('moments').filter(function(moment) {
                return moment["_id"] != req.body.moment["_id"]
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