## Car Management System Frontend

### Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the APPLICATION](#running-the-application)
4. [PROJECT STRUCTURE](#project-structure)
5. [API INTEGRATION](#api-documentation)
6. [TESTING](#testing)
7. [DEPLOYMENT](#deployment)
8. [CONTRIBUTING](#contributing)
9. [CONTACT](#contact)

## INTRODUCTION

This is the frontend of a simple car management system built with React.js. It provides an interface for users and admin to interact with the backend API, allowing for viewing, adding, updating, and deleting cars, as well as managing user authentication and access control.

## FEATURES

- User Authentication (JWT)
- User Login
- View, Search and filter Cars
- CRUD Operations for cars (Admin Access)
- Responsive Design for both Desktop and Mobile
- Role based Access Control

## GETTING STARTED

### Prerequisites

 - Node.js >=v20
 - npm or yarn

## Installation

```
# Clone the repository

git clone https://github.com/Mphomo0/sellingcars_frontend.git

# Navigate to the project directory
cd sellingcars_frontend

# Install dependencies
npm install

```
## RUNNING THE APPLICATION

```
# Start the development server
npm start
```
The application should now be running at http://localhost:5173.

# PROJECT STRUCTURE

```
src/
|
|-- assets/
|-- components/
|-- pages/
|-- slices/
|-- utils/
|-- App.jsx
|-- index.css
|-- main.jsx
|-- store.js

```
## API INTEGRATION
The frontend communicates with the backend via the RESTful API. The following endpoints are used:

 -  USER AUTHENTICATION
   - `POST /api/users - Register new user`
   - `POST /api/users/login - Login user`

 - CAR MANANGEMENT
   - `GET /api/cars - Get all cars`
   - `GET /api/cars/:id - Get specific car`
   - `POST /api/cars - Create a car (Admin only)`
   - `PUT /api/cars/:id - Update a car (Admin only)`
   - `DELETE /api/cars/:id - Delete a car (Admin only)`
  
# TESTING

Run unit and integration tests using:

```
npm test

```

## DEPLOYMENT

To deploy the application, you can use any hosting service like Vercel, Netlify, or Render. Here’s a quick deployment guide for Vercel:

 - Install the Vercel CLI: `npm i -g vercel`
 - Run the deployment command `vercel`
 - Follow the instructions in the terminal to complete the deployment

## CONTRIBUTING

Contributions are welcome! Follow these steps to contribute:

 - Fork the repo
 - Create a feature branch(`git checkout -b feature-name`)
 - Commit your changes(`git commit -m "Add Feature"`)
 - Push the branch(`git push origin feature-name`)
 - Open the pull request

## CONTACT

 - Email: mphomoipolai1@gmail.com
 - Website: www.mpho-moipolai.co.za
