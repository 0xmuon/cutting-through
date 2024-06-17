# cutting-through
valorant account worth predictor

#### Valorant Account Valuation

This project is a web application that allows users to link their Valorant accounts and estimate their worth based on the account level and skins purchased. The application is built with a React frontend, an Express backend, and uses MongoDB for data storage.


#### Features

User authentication (sign up, login)
Link and unlink Valorant accounts
Fetch Valorant account data using Riot Games API
Calculate and display account worth based on account level and skins
Responsive design
Technology Stack
Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB
API Integration: Riot Games API
Deployment: Vercel (frontend), Heroku (backend)
Installation
Prerequisites
Node.js
MongoDB
Riot Games API key
Backend Setup
Clone the repository and navigate to the backend directory.
Install dependencies.
Create a .env file in the backend directory and add your environment variables:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
RIOT_API_KEY=your_riot_games_api_key
Start the backend server.
Frontend Setup
Navigate to the frontend directory.
Install dependencies.
Start the React development server.
Deployment
Frontend
Build the React app.
Deploy the build directory to Vercel or Netlify following their specific deployment instructions.

#### Backend
Deploy the Express server to Heroku:


Initialize a git repository and commit your code.

Create a Heroku app.

Push your code to Heroku.

Set environment variables in Heroku (e.g., RIOT_API_KEY, MONGODB_URI).

API Endpoints
Auth Routes

POST /api/auth/signup: Create a new user

POST /api/auth/login: Authenticate a user

Account Routes

POST /api/account/link: Link a Valorant account
POST /api/account/unlink: Unlink a Valorant account
Valuation Routes
GET /api/valuation: Get the estimated worth of the linked Valorant account


#### Contributing


Fork the repository

Create a new branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/your-feature)

Open a pull request

#### License


This project is licensed under the MIT License. See the LICENSE file for details.


#### Acknowledgements

Riot Games for providing the Valorant API

The open-source community for the tools and libraries used in this project
