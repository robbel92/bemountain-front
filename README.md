# Bemount

![Descripción de la imagen](public\media\bemount-logo.svg)
Bemount is a web application that allows you to discover and manage mountain routes. You can explore existing routes as well as modify and delete routes that belong to your user.

## Installation

Follow these steps to set up and run Bemount on your local environment:

**Note**: In order to retrieve data, you need to set up and run the Bemount API as well. The API can be found at (https://github.com/isdi-coders-2023/Robert-Belenguer-Final-Project-back-202304-bcn). Please follow the instructions in the API repository to run it in your local environment.

1. Clone this repository to your machine.

`git clone `

2. Install the required dependencies.

`npm install`

3. Start the application in development mode.

`npm run dev`

4. Open your browser and visit the provided URL.

You can now interact with Bemount in your local environment.

**Note**: Use the following credentials for testing purposes:

- Username: admin
- Password: admin

## Configuration

Bemount requires certain environment variables to be set in order to function properly. Follow the steps below to configure the required environment variables:

1. Create a new file named `.env` in the root directory of the project.

2. Open the `.env` file and add the following environment variables:

`VITE_APP_URL=http://localhost:4000` or change the value of this variable to the url+port where you are serving the aforementioned api

## Technologies Used

Bemount is built using the following technologies and libraries:

- React
- React Router Dom
- React Redux
- Styled Components
- Axios
- JSON Web Tokens (JWT)
- Vite

Please refer to the `package.json` file for the complete list of dependencies and scripts used.
