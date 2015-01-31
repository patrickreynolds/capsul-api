var controller = require('../controllers'),
    users      = controller.users,
    auth       = controller.auth
    // locations  = controller.locations; 

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


    // Locations
    // GET /users/:id/locations
    // app.get('/users/:id/locations', locations.all);

    // // POST /users/:id/locations
    // app.post('/users/:id/locations', locations.create);

    // // GET /users/:id/locations/:id
    // app.get('/users/:id/locations/:id', locationsshow);

    // // GET /users/:id/locations/:id
    // app.put('/users/:id/locations/:id', locations.update);

    // // GET /users/:id/locations/:id
    // app.delete('/users/:id/locations/:id', locations.delete);

    // Auth
    // GET /login
    app.get('/login', auth.login);
    
    // GET /signup
};