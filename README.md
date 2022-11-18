# store-manager-api

An API that manages the store's sales and products. You can add, update, find and delete specific products and the same for sales.    

Project made in @trybe's course and uses node.js, express, mysql, chai, sinon and has the Model, Service and Controller architecture.


# Table of contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [More Info](#more-info)
- [Contact](#contact)

## Getting Started

This API was developed by me in the trybe course where it works with a mysql database, many endpoints have validations and are working with route management, it works locally, so you need to download the repository


SOME ENDPOINTS:    
products: http://localhost:3000/products to show all products data.      
sales: http://localhost:3000/sales to show all sales data    
find product by ID: http://localhost:3000/products/${id}            
find sale by ID: http://localhost:3000/sales/${id}     
delete a sale: http://localhost:3000/sales/${id}  with delete method      
delete a product: http://localhost:3000/products/${id}  with delete method     

Project have more endpoints, install repo and see more !

### Prerequisites

node 16 version         
MySQL 5.7 version or 8.0 version        
Docker(v20.10) and docker-compose(v2.5.0) (If you dont have MySQL installed)        

### Installation

If you dont have MySQL installed, follow the steps below:

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
