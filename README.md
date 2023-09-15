# Bemount

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=robbel92_bemountain-front&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=robbel92_bemountain-front)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=robbel92_bemountain-front&metric=coverage)](https://sonarcloud.io/summary/new_code?id=robbel92_bemountain-front)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=robbel92_bemountain-front&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=robbel92_bemountain-front)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=robbel92_bemountain-front&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=robbel92_bemountain-front)

Bemount is a web application that allows you to discover and manage mountain routes. You can explore existing routes as well as modify and delete routes that belong to your user.

[PlanTips app](https://bemountain.netlify.app/login)

![Screenshoots of PlanTips app](media/screenshots.webp)

## Features

- Users can log in to the application and access the general list of mountain routes and their private list.
- Users can browse through the general collection of mountain routes and filter them by difficulty level.
- Users can create and share their own mountain routes with other users.
- Users can delete and modify their own mountain routes.
- The application includes pagination to facilitate navigation through the list of mountain routes.

## Tech stack

![ts](https://flat.badgen.net/badge/-/TypeScript/blue?icon=typescript&label)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white)
![Redux](https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![Jest](https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white)
![React Testing Library](https://img.shields.io/badge/-React_Testing_Library-990000?style=flat-square&logo=react-testing-library&logoColor=white)
![Styled Components](https://img.shields.io/badge/-Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white)
[![Netlify Status](https://api.netlify.com/api/v1/badges/24c75094-9f67-4a1d-9c4f-b4469d0ea9a0/deploy-status)](https://app.netlify.com/sites/anna-marrodan-final-project-202301/deploys)

- React: frontend library for building web applications
- Redux Toolkit: a library that provides a simple and efficient way to manage application state
- Styled components: popular library used to style React applications. It allows to write actual CSS code to style custom components
- Jest: a popular JavaScript testing framework
- React testing library: popular JavaScript library used for testing React applications.

## Getting Started

To get started using Bemount, you'll need to have the following tools installed:

- Node.js
- Clone the repository and install all the needed dependencies using _npm install_

This is a full stack project, you can find the backend code here: [Bemount back end project](https://github.com/robbel92/bemountain-back)

## 🔑Credentials:

- Username: admin
- Password: admin

# <div align="center">🚀 Features 🚀</div>

<br/>

- User authentication with JWT (JSON Web Tokens).
- User login and logout functionality.
- Secure password hashing with bcrypt.
- CRUD operations for managing anime figures.
- Add new figures to the collection with images.
- View detailed information about each figure.
- Update and delete figures from the collection.
- Responsive and user-friendly interface.
- Error and success notifications for user feedback.
- Filter functionality for figures.
- Pagination for efficient data handling.
- Error handling for invalid routes and server errors.
- Codebase organized into modules and reusable components.

<br/>

## Running Tests

Bemount uses Jest for unit and integration tests. To run the test suite, use the _npm test_ command.

## Deployment

To deploy Bemount to a production environment, run the npm _run build_ command to build a production-ready version of the app. This will generate a build directory containing the compiled code, which you can then serve using a static file server.
