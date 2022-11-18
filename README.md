# store-manager-api

An API that manager store sales and products .


# Table of contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [More Info](#more-info)
- [Contact](#contact)

## Getting Started

This API was developed by me in the trybe course where it works with a json file to save and get the data, many endpoints have validations and are working with route management, it works locally, so you need to download the repository


SOME ENDPOINTS:    
talkers: http://localhost:3000/talker to show all talker data.     
login: http://localhost:3000/login to validate your login    
find talker by ID: http://localhost:3000/talker/${id}          
find talker by name: http://localhost:3000/talker/search?q=${name}    

### Prerequisites

node 16 version

### Installation

```

Clone the repo:   
$ git clone https://github.com/RuhamLeal/store-manager-api.git    

Go to project folder:     
$ cd store-manager-api  

Install dependencies:    
$ npm install

Run database scripts:    
$ npm run migration && npm run seed

Run server:

$ npm start

```
If you dont have node 16 version installed, you can run with docker-compose
```
$ docker-compose up -d
 
Await download the image and then:

$ docker exec -it talker_manager bash

Inside the container, install dependecies:

$ npm install

And Run server:

$ npm start
```

### More Info

This Project will was done with node.js, express.js, docker-compose.

### Contact

Ruham Leal    
Email: ruhamxlpro@hotmail.com    
Linkedin: https://www.linkedin.com/in/ruham-leal-dos-santos-sutil-38a837243/
