# store-manager-api

An API that manages the store's sales and products. You can add, update, find and delete specific products and the same for sales.    

Project made in @trybe's course and uses node.js, express, mysql, chai, sinon and has the Model, Service and Controller architecture.


# Table of contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Tests](#tests)
- [Contact](#contact)

## Getting Started

This API was developed by me and it works with a mysql database, many endpoints have validations and are working with route management, has unit tests for all layers, it works locally so you need to download the repository    

The api was uploaded with a public IP through the AWS cloud system with EC2. To see the code of the project you can install it locally ( Below you will find the instructions ).      



BASE URL: http://15.228.199.125:3001

SOME ENDPOINTS:    
products: http://15.228.199.125:3001/products to show all products data.      
sales: http://15.228.199.125:3001/sales to show all sales data    
find product by ID: http://15.228.199.125:3001/products/${id}            
find sale by ID: http://15.228.199.125:3001/sales/${id}     
delete a sale: http://15.228.199.125:3001/sales/${id}  with delete method      
delete a product: http://15.228.199.125:3001/products/${id}  with delete method     

Project have more endpoints, install repo and see more !

### Prerequisites

node 16 version         
MySQL 5.7 version or 8.0 version        
Docker(v20.10) and docker-compose(v2.5.0) (If you dont have MySQL installed)        

### Installation  

Clone the repo:     
```
git clone https://github.com/RuhamLeal/store-manager-api.git    
```

Go to project folder:     
```
cd store-manager-api   
```

Install dependencies:     
```
npm install    
```

Populate database with scripts:    

migration.sql then seed.sql

Run server:
```
npm start    
```           
               
                  
                    
                     
### If you dont have node 16 version or MySQL installed, you can run with docker-compose:   
```
docker-compose up -d
```
 
Await download the images and then:    
```
docker exec -it store_manager bash
```

Inside the container, install dependecies:       
```
npm install
```

Populate database with scripts:    

migration.sql then seed.sql

And run server:       
```
$ npm start
```

### Tests

The aplication has unit tests for all layers, run with:
```
npm run test:mocha
```

### Contact

Ruham Leal    
Email: ruhamxlpro@hotmail.com    
Linkedin: https://www.linkedin.com/in/ruham-leal-dos-santos-sutil-38a837243/
