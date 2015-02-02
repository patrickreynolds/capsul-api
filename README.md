Capsul API
---

RESTful API to manage users and locations for the Capsul iOS application.

===

# CURL Commands
### GET
    curl -i -X GET http://localhost:4000/users
    curl -i -X GET http://localhost:4000/users/:id

### POST
    curl -i -X POST -H 'Content-Type: application/json' -d '{"username": "patrick@gmail.com", "password": "test"}' http://capsul-api.herokuapp.com/users
    
### PUT
    curl -i -X PUT -H 'Content-Type: application/json' -d '{"username": "test@gmail.com", "password": "test"}' http://localhost:4000/users/:id
    
### DELETE
    curl -i -X DELETE http://localhost:4000/users/:id