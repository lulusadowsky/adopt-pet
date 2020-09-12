# Adopt Pet WebApp

# What do you need to build the most simple web page ?

The necessary file is index.html. We can add CSS file for styling. 

# When creating a project from scratch what usually we need to do first ?

- Create project repository - done
- First commit - done
- Optional: use npm as package manager.

# Which initial dependencies are we going to use ?

- Bootstrap
  - Bootstrap dependencies.
- json-server (to fake a local backend)

# TODO: Always think about mobile first.
- Create index.html - done 
- Add bootstrap to index.html - done
- Setup basic navbar menu - done
  - Home - done
  - Adopt - done
  - Do you want to host a dog? (Apply with a form)
  - Sponsor/Donate
  - About - done 
  - Contact - done
- Add standard footer - done
- Add hero (jumbotron) with the inmediate information we want to convey to the clients. - done
- Host page with form
- Sponsor/Donate page -> Implement a paypal donate button.

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

