- After we converted the app to MVC it was easier for us to add our user login feature.
- Checkout the branch ‘3_single_responsibility_bad’, Run the app
- Login user: ‘vimukthi’ pass: ‘123’
- But seems our controller violates single responsibility
- Let’s create a directory ‘controllers’ and add two new files ‘auth_controller.js’ and ‘notice_controller.js’
- Move login related handlers and their dependencies to ‘auth_controller.js’ 

Fully single responsibility version is in the branch ‘4_single_responsibility_good’
