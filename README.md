# Adopt Pet WebApp

# What do you need to build the most simple web page ?

The necessary file is index.html. We can add CSS file for styling. 

# When creating a project from scratch what usually we need to do first ?

- Create project repository
- First commit
- Optional: use npm as package manager.

# REST API

A Rest api is a server.
- All requests answer with a json response.
- All requests are done with a json body.

HTTP Methods
  - GET /: 
    -  /pets
  - POST /: 
    - /pet
      - Body: json with information about the pet (Age, race, color, name, registration datetime)
  - PATCH /:
    - /pet
      - Body: json with pet ID and adopted = true { id: someid, adopted: true, owner: Pepito };
  - PUT /:
    - /pet:
      - Body: send all the information of the pet.
  - DELETE /:
    - /pet:
      - BODY: json with pet id. 

