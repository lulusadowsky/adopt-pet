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
    - Create page with a form.
    - Adopt button should send the user to the form page and autoselect the type of adoption and be "Long term".
    - Temporary Housing button should send the user to the form page and autoselect the type of adoption and be "Temporary Housing".
    - BUT. BOTH buttons should send you to the same form page and use the form.
    - Form needs: 
      - Name
      - Lastname
      - email
      - phone number
      - datepicker
      - Type of adoption (dropdown)
  - Do you want to host a dog? (Apply with a form)
  - Sponsor/Donate
  - About - done 
  - Contact - done
- Add standard footer - done
- Add hero (jumbotron) with the inmediate information we want to convey to the clients. - done (though somehow I can't get ONLY the bg blurred, even if I create a separate class)
- Host (have a dog until an owner is found) page with form
- Sponsor/Donate page -> Implement a paypal donate button.

# Home Work

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

How to create HTML cards with JavaScript and add it to the container?
 1. Fetch - we need to get the data
 2. response - what we get
 3. complete stream (in json)
    - we recevie an array of objects
 4. make an html element with that data
    - now we have an array of objects and we need to create an HTML element for each object;
    - start with 1 card
    - create a div in container where you want to implement data from json
    - use ie document.getElementById('id of the data you want to present').src = dogs[]

`json-server server/db.json --watch`
