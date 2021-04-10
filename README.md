![GitHub](https://img.shields.io/github/license/Joeseff6/Lets-Work-It-Out)

# Lets-Work-It-Out
A fitness tracking application using NoSQL
## Link to Deployed Application 🔗

_https://pacific-headland-87964.herokuapp.com/_

## Table of Contents

1. [Project Description](#project-description)
2. [What to Expect From the Application](#What-to-Expect-From-the-Application)
3. [Tech Stack](#Tech-Stack)
4. [Installation Instructions](#Installation-Instructions)
5. [Goals for Deployment](#Goals-for-Deployment)
6. [Screenshots](#Screenshots)

## Project Description 

The purpose of this project is to utilize the NoSQL database MongoDB, along with Mongoose.js as the ODM (Object Document Mapper). Since this application is deployed to heroku, I am also using MongoDB Atlas to manage my database using a connected cluster. As the user interacts with the application, CRUD operations are performed to interact with the database inside the cluster; the information stored in the database are then returned to the user!

## What to Expect From the Application

An important aspect to growth in physical well-being is to track your progress. Without proper tracking, it is hard to really tell where you started and where you want to end. Not only is tracking important for determining a beginning and end, but it also helps to keep workouts consistent for proper growth.

That's where this application comes in! The user can create a new workout for the day, and list any exercise they please in either a resistance or cardio category. Once the user is finished adding exercises to their workout, they will be shown stats for their workout, such as the day of the workout, the total duration, how many exercises are performed, and more. Another handy feature is the dashboard, where the user will be shown their stats of each workout throughout the week. Details such as workout durations, total lbs lifted per workout, and percentages of exercises are shown in graphical visuals.

## Tech Stack

* Front-end: CSS3/HTML5
* Front-end/back-end logic: Javascript
* Database: MongoDB
* ODM: Mongoose 
* Server (local): Express.js via Node.js

## Installation Instructions

To install this application, you can clone this repo onto your local machine to obtain the necessary files. When not deployed to Heroku, this application uses MongoDB locally, in which the connection is already set up in the server.js file. No additional environment variables needed! MongoDB will need to be installed on your machine for this to work properly.

Ensure to run `npm install` in your terminal so that you install the required packages. To seed your database with initial data, run `npm run seed` and 9 documents will be added to the collection.

## Goals for Deployment

- [x] When a user requests the home route, they are taken to a landing page
- [x] If the user doesn't have any existing exercises, they are greeted with a message saying so
- [x] The user will be taken to a new route when clicking on buttons or links in the top left
- [x] The user can create a new workout and add multiple exercises to that workout
- [x] Each workout has its own id, and its stats will be displayed on the home route/:id
- [x] The user can add exercises to the existing workout
- [x] When going to the dashboard, the user will be presented with stats and graphs based on the user's workout entries

## Screenshots
![The homepage of the fitness tracker](./assets/Capture1.JPG)
![The dynamic form for submitted a new exercise](./assets/Capture2.JPG)
![The user dashboard for their workout stats](./assets/Capture3.JPG)
