# Camp OAC - C Requirements report

## Software Description
There are 3 user groups for this software:
- People: purchasing the firewood, and viewing the location once the 
- admins/staff: manage stock and view purchase history
- devs: make changes to the website when required

## System Architecture (DFD)

## Milestone timeline

### Functional requirements

### Non-Functional requirements

## Tech Stack
Front-End:
-Javascript
-CSS
-HTML

Possible JavaScript frameworks:

AngularJS
Pros:
-Two way data-binding: Data binding is straightforward in AngularJS. It ensures that any changes made to the view/presentation(HTML) layer immediately updates the project data model.
-Open source: available for anyone to incorporate into a project.
-Easy to test: Allows for simplified end-to-end testing, simplifying tests and debugging.
-Improved server performance: reduces the burden on server CPUs because AngularJS supports caching and other useful processes.
Cons:
-Javascript support mandatory: Users would need a javascript enabled device to access the website.
-Difficult to learn: AngularJS has minimal documentation, with complex scopes that may  prove challenging to understand.

React
Pros:
-Can create cross-platform applications: Can easily create web apps, can also use React-Native which is used to develop apps from iOS and/or Android devices in React  using the same syntax.
-Open source and popular:  Free to use and has a large user base, which is great for troubleshooting problems.
-Reusable components: Let’s developers reuse pieces of UI in any project and combine them into a larger UI system.
-Backward compatibility: React API remains unchanged after updates. Allowing for prolonged functionality of React without requiring much code maintenance.
Cons:
-Mixed views by default: Unlike AngularJS there isn’t separated component logic and view. Instead, the component contains a function which returns JSX. (syntax extension)
-Based on 3rd party libraries:  React itself doesn’t have many base tools, it relies on 3rd party libraries which can sometimes cause version compatibility issues.


Vue.js
Pros:
-Very lightweight: Framework itself is very small and simple, improving user experience and search engine optimization (if needed).
-Virtual DOM: by using a virtual Document Object Model, Vue optimizes application performance by reducing DOM update times.
-Two-way data binding: Similar to AngularJS, Vue uses  two-way data binding to enable data exchange between the DOM view and data model.
-Compatibility with mobile devices:  Vue can be used for building apps for iOS and Android using NativeScript, Ionic, or other UI frameworks.
-Compatible with Electron framework for desktop development.
Cons:
-Limited resources: Not as many available libraries to work with compared to Vue.js and AngularJS.
-Lack of support for large-scale projects: Vue still has a relatively small dev team and community, so it's better to use it in smaller projects.

Possible HTML and CSS toolkits:

Bootstrap:
Pros:
-Consistent framework and majority of browsers: Bootstrap remains open source and is compatible with the most commonly used browsers.
-Responsive structures and styles: Responsive design lets websites ‘adapt’ to different screen sizes without compromising usability and UX.
-Accelerated testing: Bootstrap allows for developers to easily test prototypes without having to deal with compatibility issues.
-Massive ecosystem: Offers the most in terms of layouts and UI elements, also has a large and active community.
Cons:
-Can require many style overrides: Can cause redundancy in CSS elements causing performance loss.
-Require extra customization: Many websites using bootstrap with heavy customization look the same.

Foundation:
Pros:
-Better customization: Foundation offers a better customization function that allows most projects using Foundation to have a unique look.


Bulma:
Pros:
-Easy to use: Bulma’s modular design and great customization options make it a commonly used toolkit.
-Easy to learn: Bulma is designed to be easily navigable, to make the learning process as quick as possible.
-Browser compatibility: Websites designed using Bulma are compatible with most major browsers, making it great for testing.
-Framework is lightweight.
Cons:
-New toolkit: Bulma’s final version is still yet to release, so its community and documentation may not be as comprehensive as its competition.

## Testing

