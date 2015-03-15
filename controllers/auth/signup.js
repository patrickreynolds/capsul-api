// Using Mongoose User model schema
var User = require('../../models/user')

// Exporting via the module pattern.
module.exports = function(req, res, next) {
    if (req.body.id !== "" || req.body.username !== "") {
        var newUser = {
            id:             req.body.id,
            username:       req.body.username,
            fullName:       req.body.full_name || "",
            profilePicture: req.body.profile_picture || "",
            accessToken:    req.body.access_token,
            updatedAt:      Date.now(),
            createdAt:      Date.now()
        }

        console.log(JSON.stringify(newUser))

        // Inserting a new user into MongoDB
        // via Mongoose create method.
        User.create(newUser, function(err, user) {
            if (err) { 
                res.json({
                    status: 400,
                    error: err
                })
            } else {
                console.log("Created User: " + user);
                res.json({
                    status: 200,
                    user: user
                })
            }
        })
    } else if (req.body.id === "") {
        res.json({
            status: 400,
            field: "id",
            error: "No id was provided"
        })
    } else if (req.body.username === "") {
        res.json({
            status: 400,
            field: "username",
            error: "No username was provided"
        })
    }
}
