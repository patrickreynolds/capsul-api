var controller = require('../controllers'),
    users      = controller.users,
    auth       = controller.auth,
    moments    = controller.moments; 

module.exports = function(app){

    // GET /
    app.get('/',function(req, res, next) {
    res.json({"welcome" : "Welcome to Capsul"})
    });

    // Users
    // GET /users
    app.get('/users', users.all);

    // POST /users
    app.post('/users', users.create);

    // GET /users/:id
    app.get('/users/:id', users.show);

    // UPDATE /users/:id
    app.put('/users/:id', users.update);

    // DELETE /users/:id
    app.delete('/users/:id', users.destroy);


    // Moments
    // GET /users/:id/moments
    app.get('/users/:userId/moments', moments.all);

    // // POST /users/:userId/moments
    app.post('/users/:userId/moments', moments.create);

    // // GET /users/:userId/moments/:momentId
    app.get('/users/:userId/moments/:momentId', moments.show);

    // // GET /users/:userId/moments/:momentId
    app.put('/users/:userId/moments', moments.update);

    // // GET /users/:userId/moments/:momentId
    app.delete('/users/:userId/moments', moments.destroy);

    // Auth
    // GET /login
    app.post('/login', auth.login);
    
    // GET /signup
    app.post('/signup', auth.signup);

};