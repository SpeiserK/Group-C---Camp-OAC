# Camp OAC - C Requirements report

## Software Description
The product will be a website that allows customers to purchase firewood from Camp OAC, and receive a pick-up location after the order has been processed. The firewood stock will be automatically updated when an order is placed. The objective is to automate the process which has been performed manually in the past. The website will have two buttons on the homepage, one of which leads to the firewood ordering page, while the other leads to an administrator portal. The firewood ordering page is where the customer fills in their contact information, the amount of firewood they would like, and the preffered pick-up location. Next, the page contents change to inquire what type of payment method the customer would prefer, and options for Credit Card, E-transfer, and Cash are available. After this is done, and the purchase is confirmed the exact pick-up location will be given to them. If the customer selects cash/e-transfer payment there will be an additional step where staff contacts the customer to confirm the payment is processed. The admin/staff can view the order on the administrator portal, here they can approve cash/e-transfer orders, and prepare the order for pick-up.

There are 2 user groups for this software:
- Customers: Will navigate the website, and enter payment details into the system to purchase firewood, ideally there is no login for customers, only entering contact details to receive the payment confirmation and pickup location.
- Admin/staff: Will need to login to the admin portal, staff will be able to manually adjust stock levels, and choose which locations will be selling firewood at any given time. Staff will also be able to approve e-transfer and cash orders.

## System Architecture (DFD)

### Level 0 DFD

<img width="779" alt="Screen Shot 2022-10-10 at 12 57 07 PM" src="https://user-images.githubusercontent.com/99511208/194943467-ce6c9eb3-63a1-4304-a07d-0e575ac13985.png">


The level 0 DFD depicts our system as a single process and the connections from the customer and administrators to the system. This process begins with the customer placing an order request with our firewood purchasing system. This request will be tracked through our database and staff will be able to view live orders. Staff will have permission to update stock and approve orders. When orders have been confirmed the customer will receive a receipt with pick-up location information attached.

### Level 1 DFD

<img width="750" alt="Screen Shot 2022-10-10 at 3 37 58 PM" src="https://user-images.githubusercontent.com/99511208/195465999-06f877ea-ee50-4b61-bc44-e2a1806c2211.png">


The level 1 DFD shows the main functions of our system in a more in-depth form. Customers will input contact information, a quantity of firewood, and select their preferred pick-up location. There will then be an inventory check before orders are approved to ensure quantity is available. Next the customer can choose their payment option: if they want to pay with debit or credit, their transaction will be processed using Square. If the case is the customer wants to pay by cash/e-transfer then this will require staff verification, staff will have to contact the customer to arrange the payment. Once payment has been approved the customer will receive a purchase receipt with location information attached. We will then log the transaction information in our customer information database.

**Milestone 2 Peer testing I:** Customers will be able to input all necessary order information. Customers will be able to view payment options available. Also, we will complete the front-end development for the website as well as generation of receipts.<br />

**Milestone 3 Peer Testing II:** Our database will be implemented, allowing for inventory checks to take place and for automatic stock updates. The database will also store order transaction information. Payment with SQUARE will be integrated.<br />

**Milestone 4 Finished Product:** The administrator portal will be created allowing for staff to login, and manage orders, stock, and payments on our website. Notifications will be created to notify vendors when there is cash/ e-transfer payments. <br />

## Milestone timeline

### Functional requirements
*Requirements Report & Presentation*


*Milestone 2: Peer-testing I*
- Front End Working
1. Enter contact details
2. Select pick-up location
3. Select payment option
4. Receipt generation


*Milestone 3: Peer-testing II*
- Back end working
1. Payment with square
2. Database integration


*Milestone 4: Finished Product*
- Everything completed
1. Administrator portal
2. Staff notifications for cash/ e-trasnfer payments
3. Usability of website is polished

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

Client was flexible in choice of tech stack. We decided to look into three different tech stacks to help us achieve our goals: MEAN, LAMP, and MERN.<br />

<img width="750" alt="Screen Shot 2022-10-10 at 3 37 58 PM" src="https://github.com/SpeiserK/Group-C---Camp-OAC/blob/requireRepoK/Media/images/TechStackTable.png">

Since our goal is to build a responsive and agile web application, we decided to focus our research between the MEAN and MERN stacks. Below is the information and the frameworks/libraries used in each stack. We included a few CSS toolkits incase it is needed for future use.<br />

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

#### Summary:  <br />

After considering all the options above, the MERN stack proves to be the most suitable tech stack. The MERN and MEAN stack both offer advantages when it comes to building a robust web application. When comparing these stacks to the LAMP stack, both offer highly responsive web applications, that are much better at dealing with smaller amounts of non-relational data. Furthermore, both MEAN and MERN allow us to use JavaScript, an extremely powerful web scripting language with a variety of open source libraries. The differences between MEAN and MERN are slim, mainly concerning the Front-End library. Between Angular and React, we decided React was the appropriate library,  mainly due to virtual DOM(Document Object Model) to speed up performance, re-useable software components for smoother development, also has less of a learning curve compared to Angular with a fast growing community.<br />



Therefore we will be using MERN: MongoDB, ExpressJS, ReactJS, and Node.js. <br />



## Testing
Testing will consist of:
- unit testing
- regression testing
- integration testing (where appropriate)

All unit test should be written before development on the relevant feature, and retained throughout the project's development.

We plan to use the JEST framework for unit testing, this a framework developed by facebook and is widely used, making it easier to resolve issues and create tests. It is easy to download and install, and easy to learn to use. click [here](https://jestjs.io/docs/getting-started) for basic info on how to use jest to test javascript functions. It also makes the test-all testing procedure easy to perform.

For regression testing we will be using the test-all procedure: we will run all previous tests whenever integrating a new feature. The scale of this project is small, so this is an achievable and sensible regression testing method. Again jest allows running of multiple tests in isolated environments, making testing efficient and fast.

Integration testing will ensure the database and website communicate as intended, for stock checks and staff login.

**Team Evaluation Questions**
• What does the color coding mean for the DFD? Needs a legend
• What do the arrows mean in DFD 1?
• How are you going to handle recurring purchases from the same customer?
• How are you going to keep it low maintenance?
• What’s the point of concealing the pick up location until after payment? Once a customer has
purchased firewood once, they’ll know the location for next time as well.
• Are the pickup locations camp locations or changing overtime?
• Why'd you call it a 'staff portal'?
• Would be nice for some target values for nonfunctional requirements
• Does square payments require a business license? Does the company already have one?
• You mentioned in non function you want to keep upkeep costs at the minimal, but
• would that increase initial development costs?
• Include testing in milestones
• Include costs with tech stack slides, if there even are any?
• Because you are implementing a payment system, is there a way to ensure it is secure?
• Is there a way to ensure a fast-response time from the staff member approving cash/e-transfer
payments?
• Are other payment methods e.g. PayPal worth using? (I understand PayPal takes a relatively
high fee, but as far as I’m aware Square does the same.)
• In the Level 0 data flow diagram, should there be a connection to Square for payment
information and the transaction record?


• Good distribution of tasks over the milestones - clear what needs to be done, room for testing
and more tasks if necessary
• Using an established tech stack is a good idea - no point reinventing the wheel, should be able to
find tips from experienced users if issues arise
• Will there ways to filter by specific wood/amount/category
• How can you ensure that people do not use this to find specific wood and then
• Pay outside of the application to avoid fees etc.
• Maybe consider more methods of testing than just unit testing. Github webhooks etc
• Good distinction in detail between 0 and 1 dfd, level 1 dfd doesn't mention updating database
with a purchase.
• Great work, amazing presentation. Was easy to pay attention to and everything was well
understood. I have no issues to point out.
• Are the Local stores in charge of Prices, or is there a certain price that they cannot exceed?
• Is there a maximum limit on the amount of firewood one can buy?
• What is the transaction fee for each payment handled by Square or other third parties in your
app?
• Will the Staff have a log that includes all the purchases/orders so they can keep track of them?
• Will there be a way to handle refunds, and if so how?
• Strengths: User groups - customers and staff. Missing user groups? Tech stack is well-explained.
• Weaknesses: DFD is hard to read. NFR, not well defined, low cost - what is the budget or target? 
• Suggestions / Questions: For NFR, how do you track if users are concurrent? Only relying on unit
tests for testing strategy, how do you evaluate it after its passed the unit tests? Users don’t
need to login, doesn’t that mean that they will need to reenter their contact info, and banking
details? Any plants to implement a user login so users can re-do orders without going through
the whole process?


• Why have you chosen Square as your payment system over something like Stripe? Do staff need
to login to access the dashboard to update stock? How are you hosting the app? Budget costs?
What libraries will be used for Front and Backend?
• Will there be a login for repeat customers to prevent frustration from continually inputting the
same information?
• Will you be mocking data to ensure frontend functionality works until the database is integrated
in milestone 3?
Comments
1. We were unclear on what CAMP OAC project is intended for reading off the description,
but your team explained very well to clear our doubts
Questions
1. Which technology will you use to guarantee the security of customer transactions?
2. It was mentioned that no login info was needed from customers, but what other user
inputs are required?
3. If the feature of multiple transactions is supported, how many transactions can be made
at a time?
• Will you be able to separate the payment processing from the staff portal? You might need to
develop them simultaneously to check that both features are working
• Are there any legal restrictions on how you should process payments? (including cash ones)
• How do you plan on obtaining location information and conveying this information to the user?
• How will you ensure transactions are reliably saved in the database? Does mongo provide any
benefits for this?
• How do you plan the keep costs low?
• What software are you planning to use for testing? Integrated through GitHub actions? Jest?
• How will you manage customer login?
• How does the customer keep track of orders without an account?


• Is there a possibility of saving customer information? Generally, people buying firewood will
continue to buy it over time.
• How are you handling storing payment details?
• Will not firebase be better than mongo db? Probably may speed up the dev process as using non
relational database, and will handle concurrent use of the data points internally
• How do you plan to make sure your transactions are secure and there’s no data loss?  
• Will there be a feature implemented that reminds the user of their pick-up time and location
when the appointment is coming up soon?
• How will you ensure your staff verification is secure?
• How will you update the firewood availability by location in real time?
• The presentation had thorough explanations and organized information to help the audience
understand the project and its purpose.
• Will wood come pre-cut or not? Will there be an option to choose?
• How will they deal with payment errors if there is more website traffic than expected since they
don’t expect much traffic?
• There are payments involved. The security should be one of the focus of this website.
• Maintaining security is heavy on the budget, How will costs be kept to minimum (since this is for
charity) while making sure user data is secure?
• It would be more helpful if you develop first, and then write test cases. Writing test cases before
development doesn't sound realistic. You’ll need functions or components in the tests.
• Will there be a selection of different firewoods? –
• Will there be a map of all the locations for pickup? Is there a plan for delivery services?
• How are you going to verify authenticity of customer contact information
• Will there be a log or query accessible by administrators through the web app or offline to view
inventory changes along with who verified?
• What do you mean by a flexible database? Please elaborate.
• What approach will you use for security in the database
• Nice description of what the idea is and what the Idea looks like. Will there be any protection for
fraudulent requests? What should the user see on their end, any example designs? How will
your website be hosted? Is there some provider that will be chosen? Good overall timeline,
providing what goals you have in the future. Do you think that there is room to expand once you
have completed your project? Great description of tech stack.
