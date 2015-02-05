Capsul API
---

RESTful API to manage users and locations for the Capsul iOS application.

===

# CURL Commands
### GET
    curl -i -X GET http://localhost:4000/users  
    curl -i -X GET http://localhost:4000/users/:id  
    curl -i -X GET -H 'Content-Type: application/json' http://localhost:4000/users/54d335c596cece7eddf412fd/moments/54d33b8b0f92e6dfe5c45749  

### POST
    curl -i -X POST -H 'Content-Type: application/json' -d '{"username": "patrick@gmail.com", "password": "test"}' http://capsul-api.herokuapp.com/users  

    curl -i -X POST -H 'Content-Type: application/json' -d '{"moment": {"name": "First Moment", "latitude": 123456, "longitude": 654321, "timestamp": 987654}}' http://localhost:4000/users/54d335c596cece7eddf412fd/moments
    
### PUT
    curl -i -X PUT -H 'Content-Type: application/json' -d '{"username": "test@gmail.com", "password": "test"}' http://localhost:4000/users/:id  


    curl -i -X PUT -H 'Content-Type: application/json' -d '{"moment": {"name": "Second Moment", "latitude": 1234567, "longitude": 1234567, "timestamp": 98765432, "_id": "54d33ceff51fce88e74eaa74"}}' http://localhost:4000/users/54d335c596cece7eddf412fd/moments  


    
### DELETE
    curl -i -X DELETE http://localhost:4000/users/:id  

    curl -i -X DELETE -H 'Content-Type: application/json' -d '{"moment": {"name": "First Moment", "latitude": 123456, "longitude": 654321, "timestamp": 98765432, "_id": 54d330d2da573ceed640483a}}' http://localhost:4000/users/54d32c287ccf1231d04e5a2b/moments