# Social-Network-API
Challenge 18

  ![License](https://img.shields.io/badge/License-MIT-blue)

  ## Description
  This application is the back-end portion of a social networking site. It uses Express.js and Mongoose to interact with a MongoDB database. While it requires a compatible front-end app to be fully functional, this app's functionality can be observed and tested as is. We used Insomnia for testing in the demo video below.
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  Clients can make use of this application by cloning it from its repository. They will need to perform a package install before launch.
  
  ## Usage
  A visual demonstration of this application's usage can be found at the following:
  https://drive.google.com/file/d/1bZOPis054yJfao500Ctm6L03FXwSONST/view

  ### Launching the Application
  Launch the application by entering "npm run start" into the command line. The app will default to listening at localhost:3001 unless another port is specified. The app is now ready for testing using the Insomnia application.

  ### Routes and Methods
  API requests can be made using the base route `http://localhost:3001/api`, expanded with `/users` and `/thoughts`, respectively.

  #### "Users" routes:
  ##### "`/`"
  "GET":    Returns all users in database.
  "POST":   Creates a new user, requires `username` and `email` in JSON body.
  ##### "`/:userId`"
  "GET":    Returns a user with a matching ID.
  "PUT":    Updates a user entry with a matching ID, requires `username` and `email` in JSON body.
  "DELETE": Deletes a user with a matching ID from the database.
  ##### "`/:userId/friends/:friendId`"
  "POST":   Adds a user with an ID matching "friendId" to the `friends` array of a user with an ID matching "userId".
  "DELETE": Deletes a user with an ID matching "friendId" from the `friends` array of a user with an ID matching "userId".

  #### "Thoughts" routes:
  ##### "`/`"
  "GET":    Returns all thoughts in database
  "POST":   Creates a new thought, requires `thoughtText`, `username`, and `userId` in JSON body.
  ##### "`/:thoughtId`"
  "GET":    Returns a thought with a matching ID.
  "PUT":    Updates a thought entry with a matching ID, requires `thoughtText` and `username` in JSON body.
  "DELETE": Deletes a thought with a matching ID from the database.
  ##### "`/:thoughtId/reactions`"
  "POST":   Creates a new reaction in the `reactions` array of a thought with a matching ID, requires `reactionBody` and `username` in JSON body.
  ##### "`/:thoughtId/reactions/:reactionId`"
  "DELETE": Deletes a reaction with an ID matching "reactionId" from the `reactions` array of a thought with an ID matching "thoughtId".

  ## Contributing
  Contributors: Greg Skudlarek
  
  ## License
  [![License](https://img.shields.io/badge/License-MIT-blue)](https://www.opensource.org/licenses/MIT)

  This application is covered under the MIT License. Click the badge to learn more.
  
  ## Questions
  Questions can be sent via the listed methods.
  
 
  GitHub: [dopalescent](https://github.com/dopalescent)
  

  Email: skudlgre000@gmail.com