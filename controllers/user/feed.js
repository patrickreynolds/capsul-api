var request = require('request'),
    async   = require('async'),
    Moment  = require('../../models/moment'),
    User    = require('../../models/user')

module.exports = function (req, res, next) {
    User.findById(req.params.userId, function(err, user) {
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
            Moment.find({user: req.params.userId}, function(err, moments) {
                console.log(moments.length)
                if (err) {
                    res.send({
                        status: 400,
                        error:  err
                    })
                } else {

                    async.waterfall([
                        function(asyncCallback) {
                            var momentUrls = moments.map(function(moment) {
                                moment.url = "https://api.instagram.com/v1/media/search?" + 
                                        "lat=" + moment.get('latitude') +
                                        "&lng=" + moment.get('longitude') +  
                                        "&max_timestamp=" + moment.get('timestamp') +
                                        "&distance=" + moment.get('distance') + 
                                        "&access_token=" + user.get('instagramAccessToken')
                                return moment
                            })

                            asyncCallback(null, momentUrls)

                        }, function(moments, asyncCallback) {
                            var momentQueries = moments.map(function(moment) {
                                return function(queryCallback) {
                                    console.log("Requesting: " + moment.name)
                                    request(moment.url, function(err, res, body) {
                                        if (err) {
                                            queryCallback(err)
                                        } else {
                                            queryCallback(null, body)
                                        }
                                    })
                                }
                            })
                            asyncCallback(null, momentQueries)
                        }, function(queries, asyncCallback) {
                            async.parallel(queries, function(err, results) {
                                if (err) {
                                    asyncCallback(err)
                                } else {
                                    asyncCallback(null, results)
                                }
                            })
                        }
                    ],
                    function(err, media) {
                        if (err) {
                            res.send({
                                status: 400,
                                error:  err
                            })
                        } else {
                            res.send({
                                status: 200,
                                user:   req.params.userId,
                                moments: media
                            })
                        }
                    })
                }
            })
        }
    })
}