// Using Mongoose Task model schema
var Moment  = require('../../models/moment'),
    User    = require('../../models/user'),
    request = require('request')

// Exporting via the module pattern.
module.exports = function (req, res, next) {
    if (req.params.userId) {
        var userId = req.params.userId;
        User.findById(userId, function(err, user) {
            if (err) {
                res.send({
                    status: 400,
                    error: err
                })
            } else if (!user) {
                res.send({
                    status: 400,
                    error: "No user found for id: " + req.params.userId
                })
            } else {
                var mediaRequest = "https://api.instagram.com/v1/media/search?" + 
                    "lat=" + req.query.latitude +
                    "&lng=" + req.query.longitude +  
                    "&max_timestamp=" + req.query.timestamp +
                    "&distance=" + req.query.radius + 
                    "&access_token=" + user.get('accessToken')
                request(mediaRequest, function(err, response, body){
                    if (err) {
                        res.json({
                            status: 400,
                            error:  err
                        })
                    } else {
                        res.json({
                            status: 200,
                            userId: userId,
                            data: JSON.parse(body).data
                        })
                    }
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