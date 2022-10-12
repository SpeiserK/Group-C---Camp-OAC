# Camp OAC - C Requirements report

## Software Description
The product will be a website that allows customers to purchase firewood from Camp OAC, and receive a pickup location after the purchase has been completed. The firewood stock will then be automatically updated. The objective is to automate the process which has been performed manually for 2 years. The website will have a button on the homepage which leads to the purchasing page where the customer fills in a preferred contact method, the amount of firewood they would like, and the area they would like to pick up the firewood from. They then click next, and the page contents change to the square payment method. After this is done, and the purchase is confirmed the exact pickup location will be given to them, and they can go and pickup their firewood. The admin/staff will receive the new order on the same website, (they can confirm the purchase maybe) and then they will prepare the order and confirm that the stock for the order has been removed, this will update a database(?) containing the stock information.
There are 2 user groups for this software:
- Customers: will navigate the website, and enter payment details into the system to purchase firewood, ideally there is no login for customers, only entering contact details to receive the payment confirmation and pickup location.
- admin/staff: will need to login to the website to maintain security, staff will be able to manually adjust stock levels, and choose which locations will be selling firewood at any given time.

## System Architecture (DFD)

### Level 0 DFD

<img width="779" alt="Screen Shot 2022-10-10 at 12 57 07 PM" src="https://user-images.githubusercontent.com/99511208/194943467-ce6c9eb3-63a1-4304-a07d-0e575ac13985.png">


The level 0 DFD depicts our system as a single process and the connections from the customer and administrators to the system.

### Level 1 DFD



<img width="472" alt="Screen Shot 2022-09-30 at 7 13 52 PM" src="Group-C---Camp-OAC/images/Camp OAC DFD lvl1.png">

The level 1 DFD shows the main * functions * of our system. The main process is broken down into the important processes that are necessary for our system.

For our 2nd milestone: Peer Testing I, the 'sign in' process, firewood request amount, and the location selection feature will be completed. Also, we will complete the front-end development for the payment selection as well as generation for confirmation receipts and location information receipts.<br />
For our 3rd milestone: Peer Testing II, we will construct confirmation features to be used by our administrators. There will be a measurement feature to check if inventory stock is available, an independent process used to communicate with customers that are paying by cash/e-trasfer, and a manual process used to verify inventory stock.<br />For the 4th milestone: Finished Product, we will have implemented the use of our database. This database will store collections of payment transactions and inventory stock by location. Also, our payment processes will be sorted, including the use of online payment using SQAURE.<br />

## Milestone timeline

### Functional requirements
*Requirements Report & Presentation*

*Video Demo & Peer-testing I*
- Front End Working (based on DFD lvl. 1)
1. Enter contact details
2. Select pick-up  location
3. Select payment option
4. Send location-information
*Video Demo & Peer-testing II*
- Back end working
1. Inventory check
2. payment with square
3. send payment receipt
4. Customer info db
*Final report & Presentation of Finished Product*
- Everything working

### Non-Functional requirements
*Requirements Report & Presentation*

- plan for db and website cost+limit

*Video Demo & Peer-testing I*

- Usability: With our user group having such a wide range, the web application needs to be easy to learn and use. We will do this using React.js, optimizing UX by minimizing actions needed and increasing efficiency using the frameworks functions.

-Scalability: Using MongoDB's NoSQL style database, the database will be very flexible and horizontally scalable. This will smoother changes if they are needed in the future.

-Error-handling: UI will be programmed such that it is difficult to make invalid actions. Order of operations should be clear to the user and error prevention will be implemented. 

*Video Demo & Peer-testing II*

*Final report & Presentation of Finished Product*

## Tech Stack
### Front-End:<br />
-Javascript<br />
-CSS<br />
-HTML<br />

Possible JavaScript frameworks:

**Angular**<br />
*Pros:*<br />
-Two way data-binding: Data binding is straightforward in Angular. It ensures that any changes made to the view/presentation(HTML) layer immediately updates the project data model.<br />
-Open source: available for anyone to incorporate into a project.<br />
-Easy to test: Allows for simplified end-to-end testing, simplifying tests and debugging.<br />
-Improved server performance: reduces the burden on server CPUs because AngularJS supports caching and other useful processes.<br />
*Cons:*<br />
-Javascript support mandatory: Users would need a javascript enabled device to access the website.<br />
-Difficult to learn: AngularJS has minimal documentation, with complex scopes that may  prove challenging to understand.<br />
-Large size: Angular's file size is much larger than React or Vue.<br />

**React**<br />
*Pros:*<br />
-Can create cross-platform applications: Can easily create web apps, can also use React-Native which is used to develop apps for iOS and/or Android devices in React  using the same syntax.<br />
-Open source and popular:  Free to use and has a large user base, which is great for troubleshooting problems.<br />
-Reusable components: Let’s developers reuse pieces of UI in any project and combine them into a larger UI system.<br />
-Backward compatibility: React API remains unchanged after updates. Allowing for prolonged functionality of React without requiring much code maintenance.<br />
*Cons:*<br />
-Mixed views by default: Unlike AngularJS there isn’t separated component logic and view. Instead, the component contains a function which returns JSX. (syntax extension)<br />
-Based on 3rd party libraries:  React itself doesn’t have many base tools, it relies on 3rd party libraries which can sometimes cause version compatibility issues.<br />


**Vue.js**<br />
*Pros:*<br />
-Very lightweight: Framework itself is very small and simple, improving user experience and search engine optimization (if needed).<br />
-Virtual DOM: by using a virtual Document Object Model, Vue optimizes application performance by reducing DOM update times.<br />
-Two-way data binding: Similar to AngularJS, Vue uses  two-way data binding to enable data exchange between the DOM view and data model.<br />
-Compatibility with mobile devices:  Vue can be used for building apps for iOS and Android using NativeScript, Ionic, or other UI frameworks.<br />
-Compatible with Electron framework for desktop development.<br />
*Cons:*<br />
-Limited resources: Not as many available libraries to work with compared to AngularJS.<br />
-Lack of support for large-scale projects: Vue still has a relatively small dev team and community, so it's better to use it in smaller projects.<br />
-Not fully stable: 90% of API remains the same after updates.<br /> 

Possible HTML and CSS toolkits:<br />

**Bootstrap**<br />
*Pros:*<br />
-Consistent framework and majority of browsers: Bootstrap remains open source and is compatible with the most commonly used browsers.<br />
-Responsive structures and styles: Responsive design lets websites ‘adapt’ to different screen sizes without compromising usability and UX.<br />
-Accelerated testing: Bootstrap allows for developers to easily test prototypes without having to deal with compatibility issues.<br />
-Massive ecosystem: Offers the most in terms of layouts and UI elements, also has a large and active community.<br />
*Cons:*<br />
-Can require many style overrides: Can cause redundancy in CSS elements causing performance loss.<br />
-Require extra customization: Many websites using bootstrap with heavy customization look the same.<br />

**Foundation**<br />
*Pros:*<br />
-Better customization: Foundation offers a better customization function that allows most projects using Foundation to have a unique look.<br />
-Great browser support: Like Bootstrap, Foundation is compatible with Chrome, Safari, Firefox, and Opera. Foundations supports newer versions of Internet Explorer than Bootstrap.<br />
-Flexible grid system: Foundation offers more grid-related features when it comes to managing a grid system.<br />
*Cons:*<br />
-Learning curve: It will take more time for team members to familiarize themselves with the framework.<br />
-Lack of support: Due to Bootstraps overwhelming usage, its support on Twitter and for troubleshooting in general is much better than Foundation’s.<br />


**Bulma:**<br />
*Pros:*<br />
-Easy to use: Bulma’s modular design and great customization options make it a commonly used toolkit.<br />
-Easy to learn: Bulma is designed to be easily navigable, to make the learning process as quick as possible.<br />
-Browser compatibility: Websites designed using Bulma are compatible with most major browsers, making it great for testing.<br />
-Framework is lightweight.<br />
*Cons:*<br />
-New toolkit: Bulma’s final version is still yet to release, so its community and documentation may not be as comprehensive as its competition.<br />
-CSS Only: Bulma does not include inbuilt JavaScript or jQuery like Bootstrap does.<br />

### Back-End:<br />

Chosen language for backend: Javascript <br />
Why? <br/>
Because we are already using it for frontend and can use it for backend. JavaScript has the ability to be employed on the frontend and backend. By using JavaScript on both ends, the overall flexibility and efficiency of the project can be increased. </br>


Frameworks:<br />

**Node.js** <br />
Not a framework, but a runtime environment. Needs a framework.<br />
*Pros:*<br />
-Open source: Free and available to anyone who needs an environment to run JavaScript.<br />
-Fast-processing: Uses Chrome's V8 JavaScript engine, resulting in very fast execution times.<br />
-Event-based model: Due to node.js's asynchronous, non-blocking, single-threaded nature, node.js is great for web apps that have constant updates.<br />
*Cons:*<br />
-Single threaded: Since node is single threaded, CPU heavy tasks tend to decrease performance.(Mulit-threading is remains experimental)<br />
-Callbacks: Node.js uses callbacks when executing multiple tasks, which can become complex affecting performance if not managed properly.<br />

**Express.js** <br />
*Pros:*<br />
-Easy to learn: Only uses JavaScript, which is necessary for front end anyway.<br />
-Supports Node.js.<br />
-Supported by google V8 engine: High performance using a new(er) engine from Google.<br />
-Supports caching: Allows webpages to load even faster for people who have visited before.<br />
*Cons:*<br />
-Can have callbacks issues.<br />

Web servers:<br />
-Will figure out at a later date. When testing becomes applicable. We will run a local server for testing, and look into web server options when we reach that point in the project.

## Databases:

### SQL vs NOSQL <br />

SQL: **S**tructured **Q**uery **L**anguage <br />
- Used for relational databases like mySQL <br />
- Very strict requirements for data (Clear Schema) <br />
    - all records must follow this Schema <br />
- uses relations like one - one, one to many, etc. <br />

#### Summary:  <br />
*data is stored across multiple tables that are connected with relations and queried with SQL* <br />

### NOSQL: Different than SQL <br />
#### MONGODB <br />
- Collections instead of tables<br />
- Documents instead of rows <br />
- Documents dont have a strict schema (different structure in each one) <br />
- advantage is super flexible in case of shifting requirements <br />
- no relations (relational data needs to be merged manually) <br />
- collections should contain all neccecary data for querying, no joins possible <br/>
- duplicate data would be an issue, as would need to write same info multiple times <br/>
- collections can be merged <br/>


*we need to decide what tables / fields we need. whether we can keep it in one collection or multiple* <br/>
- if one: then MONGODB may be best <br/>
- if multiple: then SQL could be better<br/>
- if requirements change or we want flexibility in what is stored MONGO is best<br/>
- if requirements are fairly predictable sql would be fine<br/>

Scaling: Harder for SQL way easier for NOSQL. Mongo could have some better longevity after we have left if the database continues to grow. <br/>

## MONGODB EXAMPLE: <br/>
### How would this work with our data? <br/>
1. Orders collection <br/>
    - customer info; <br/>
    - order id; <br/>
    - location id; <br/>
    - qty ordered; <br/>
    - etc. <br/>

2. Location collection <br/>
    - stock of wood; <br/>
    - location id; <br/>

3. customer collection: (optional / likely not recommended) <br/>
    - when an order is placed check if customerID exists and if NULL then ADD <br/>
    - could be redundant if possible to query by customer id from orders and remove duplicates (Very Possible)  <br/>

When a user makes an order we query a **location id** from **Location Collection** that has the stock of wood available, then we update **location id** with new stock. we also seperately update the **Orders Collection** and add a new order with the order information.  <br/>

After carefully considering all the options above, the MERN stack proves to be the most suitable tech stack using; MongoDB, ExpressJS, ReactJS, and Node.js. <br />

## Testing

