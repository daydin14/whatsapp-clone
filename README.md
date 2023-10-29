# WhatsApp Clone

[![MERN](https://img.shields.io/badge/Built%20with-MERN%20Stack-green)](https://www.mongodb.com/mern-stack)
[![Built with MongoDB](https://img.shields.io/badge/Built%20with-MongoDB-brightgreen)](https://www.mongodb.com/)
[![Uses Mongoose](https://img.shields.io/badge/Uses-Mongoose-47A248)](https://mongoosejs.com/)
[![Built with Express.js](https://img.shields.io/badge/Built%20with-Express.js-yellow)](https://expressjs.com/)
[![Built with React](https://img.shields.io/badge/Built%20with-React-blue)](https://reactjs.org/)
[![Built with Node.js](https://img.shields.io/badge/Built%20with-Node.js-green)](https://nodejs.org/)
[![Built with Firebase](https://img.shields.io/badge/Built%20with-Firebase-orange)](https://firebase.google.com/)
[![Google Analytics](https://img.shields.io/badge/Google%20Analytics-Enabled-blue)](https://analytics.google.com/)
[![Google Authentication](https://img.shields.io/badge/Google%20Authentication-Enabled-4285F4)](https://developers.google.com/identity/)
[![Uses CORS](https://img.shields.io/badge/Uses-CORS-FFA07A)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
[![Uses Postman](https://img.shields.io/badge/Uses-Postman-FF6C37)](https://www.postman.com/)
[![Built with Pusher](https://img.shields.io/badge/Built%20with-Pusher%20JS-6746d8)](https://pusher.com/)
[![Built with Axios](https://img.shields.io/badge/Built%20with-Axios-136ad6)](https://github.com/axios/axios)
[![Built with Material-UI](https://img.shields.io/badge/Built%20with-Material--UI-0081CB)](https://material-ui.com/)

This repository contains the code for a WhatsApp clone created following the tutorial by [CleverProgrammer](https://www.youtube.com/watch?v=gzdQDxzW2Tw&ab_channel=CleverProgrammer). The project aims to replicate the core functionality of WhatsApp and is built using the MERN (MongoDB, Express, React, Node) stack.

## Table of Contents

<!-- - [Demo](#demo) -->

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Pictures](#pictures)
- [Contributing](#contributing)
- [How to Fork This Repository](#how-to-fork-this-repository)
<!-- - [License](#license) -->

<!-- ## Demo

You can see a live demo of the project at [YourDemoLinkHere](https://yourdemolink.com).

![WhatsApp Clone Demo](demo.gif) -->

## Features

- Real-time messaging between users.
- User authentication using Firebase.
- Create and join chat rooms.
- Send text and image messages.
- Responsive design for various screen sizes.

## Technologies Used

- MongoDB: A NoSQL database for storing user data and chat messages.
- Express.js: A web application framework for handling API routes.
- React: A JavaScript library for building the user interface.
- Node.js: A runtime environment for running server-side JavaScript.
- Firebase: Used for user authentication and real-time database functionality.
- Material-UI: A popular UI framework for styling the application.
- Pusher: Enables real-time communication between clients and the server.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/'yourusername'/whatsapp-clone.git
   ```

   _`Note: You should fork this repo and replace with your GitHub username above.`_

2. Change to frontend/client project directory:

   ```
   cd whatsapp-clone/wac-frontend
   ```

3. Install frontend/client dependencies:

   ```
   npm install || npm i
   ```

4. Change to backend/server project directory:

   ```
   cd whatsapp-clone/wac-backend
   ```

5. Install backend/server dependencies:

   ```
   npm install || npm i
   ```

6. Start the backend development server:

   You can install Nodemon globally using npm by running the following command:

   ```
   npm install -g nodemon
   ```

   Within `whatsapp-clone/wac-backend` run command:

   ```
   nodemon server.js
   ```

7. Start the frontend development client:

   Within `whatsapp-clone/wac-frontend` run command:

   ```
   npm start
   ```

8. Access the application at http://localhost:3000

## Usage

- Login with Google Sign-in using Firebase authentication.
- Create a new chat room or join an existing one.
- Start sending and receiving real-time messages with other users in the chat room.

## Pictures

<img width="500" height="300" alt="Login" src="https://github.com/daydin14/whatsapp-clone/assets/22377881/05a8d18c-749c-4a6f-9bdc-171e9cd8aba7">
<img width="500" height="300" alt="WhatsApp" src="https://github.com/daydin14/whatsapp-clone/assets/22377881/83d76431-2050-4131-96b7-7354d9dd30d9">

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

1. Fork this repository.
2. Create a new branch for your feature or bug fix:

   `git checkout -b feature/your-feature`

3. Make your changes and commit them:

   `git commit -m 'Add some feature'`

4. Push to your branch:

   `git push origin feature/your-feature`

5. Create a pull request.

## How to Fork This Repository

1. Click the "Fork" button at the top right of this repository's page. This will create a copy of the repository in your own GitHub account.

2. After forking, you will have your own version of the repository that you can freely modify.

3. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/your-username/your-forked-repo.git
   ```
