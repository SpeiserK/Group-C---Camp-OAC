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

## Task Prioritization List

Check out our Gantt chart [here](https://docs.google.com/spreadsheets/d/18zKV2q8-GVcxCED7rnHJwNiDU7VvHJ5I/edit?usp=sharing&ouid=106485498433338308480&rtpof=true&sd=true)

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
npm install express cors mongoose dotenv axios jsonwebtoken joi joi-password-complexity bcrypt 
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


### ***Square Payments***
To handle credit and debit purchases, the following must be installed:

1.
```
npm install react-square-web-payments-sdk
```

2.
```
npm install square
```

### ***Node Mailer***
click [here](https://nodemailer.com/about/) for node mailer documentation

1.
In the backend folder, install nodemailer
```
npm install nodemailer
npm install express-pino-logger
npm install twilio --save-dev
npm install --save @sendgrid/mail
npm install promise
```
2.
You will need to add necessary token to .env file


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

run 
```
npm test
``` 
in code directory

## Optional features:
### ***Concurrent execution of node server and react project***:

1.
navigate to the root directory of your project ('MERN Scripts'), which should contain the 'Backend' and 'mern-emsystem' folders, and start another node project:

```
npm init
```

install the package: `Concurrently` When prompted, otherwise press return for all other prompts.

2.
Run the react project and launches the node server with one command:

```
npm run dev

```
