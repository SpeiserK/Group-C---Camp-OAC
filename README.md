# Group-C---Camp-OAC
COSC 499 Capstone Project
a MobileFriendly website to automate the process of obtaining campfire wood <br />
This automation process looks like: <br />
(1) user views advertisement on Facebook or any other site; <br />
(2) clicks link/hotspot and is directed to our wood sales web site (to be created as part of this project); <br />
(3) chooses their general location ie. West Kelowna, Mission, Rutland etc... and number of bags of firewood desired; <br />
(4) purchaser an invoice that is produced based on pricing and quantity desired,  <br />
(5) Payment is processed Receipt is generated automatically. <br />
(6) instructs purchaser on address where firewood is available for pickup;<br />

## Group Members:
Zach Prenovost<br />
Aidan Murphy<br />
Cam Wilson<br />
Karlen Speiser<br />

## Tech Stack Installation:

### ***Node.js***:
Download Node.js from [here](https://nodejs.org/en/download/)

1.
In your Node server file(backend), create new package.json file with: 
```
npm init -y
```
2.
Use npm to install the following dependencies: 
```
npm install express cors mongoose dotenv
```
Express: middleware for MERN stack, provides robust functions for Node.js<br />
Cors: permits AJAX requests from the remote host<br />
Mongoose: helps node server interact with MongoDB<br />
Dotenv: help loading environment variables<br />

3.
Install nodemon, which auto restarts node app during development:
```
npm install -g nodemon
```
See MERN Scripts/backend for use of the libraries<br />

### ***React***:

1.
In your main project folder(MERN Scripts), create React.js application:
```
npx create-react-app mern-emsystem
```
2.
Navigate to mern-emsystem directory, start the web server:
```
npm start
```

### ***MongoDB***:

To link the database to your Node.js server, create a .env in the Node server file<br />
Use the connection string with the appropriate username and password to connect<br />

### ***Jest***:
click [here](https://jestjs.io/docs/getting-started) for info from developers

1. 
```
npm install --save-dev jest
```

2. 
create test files using naming convention:
```
name.test.js
```

3. 
format package.json file appropriately
```
{
  "scripts": {
    "test": "jest"
  }
}
```
4.
run `npm test` in code directory