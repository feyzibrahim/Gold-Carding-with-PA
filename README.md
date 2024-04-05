# Dynamic Gold Carding Module for Prior Authorization

## Overview

The Dynamic Gold Carding Module is a software solution developed to streamline the prior authorization (PA) process within the healthcare sector. Prior authorization is a requirement from health insurance companies for providers to obtain approval before performing specific services, procedures, or prescribing medications. Gold carding is introduced to simplify this process for high-performing providers based on predefined criteria, aiming to enhance efficiency, recognize excellence, improve patient satisfaction, reduce administrative overhead, and ensure the quality of care.

## Objective

The objective of this project is to design and implement a dynamic Gold Carding module that automates the prior authorization process for eligible providers based on configurable criteria. The module includes mechanisms for defining gold carding criteria, analyzing historical data, tagging providers, auto-authorizing PA requests, post-procedure review, and continuous performance monitoring.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js with Express.js
- **Database:** PostgreSQL
- **Other Tools:** Sequelize ORM, Cron jobs for scheduling tasks

## Project Structure

The project follows a client-server architecture, with the frontend and backend components separated for modularity and scalability. The frontend is developed using React.js to create a user-friendly interface for healthcare providers and administrators. The backend is implemented using Node.js with Express.js, providing RESTful APIs for data exchange with the frontend and handling business logic.

## Setup Instructions

1. **Clone the Repository:**
   git clone https://github.com/feyzibrahim/Gold-Carding-with-PA
   cd dynamic-gold-carding-module

2. **Install Dependencies:**
   cd client
   npm install
   cd ../server
   npm install

3. **Database Setup:**

- Create a PostgreSQL database and configure the connection in `server/config/database.js`.
- Run database migrations to create tables using Sequelize CLI:
  ```
  npx sequelize-cli db:migrate
  ```

4. **Start the Development Servers:**
   cd client
   npm start
   cd ../server
   npm start

5. **Access the Application:**

- Open a web browser and navigate to `http://localhost:3000` to access the frontend.
- Use the provided APIs to interact with the backend for data retrieval and processing.

## Additional Notes

- **API Documentation:** Detailed documentation for backend APIs can be found in the `backend/docs` directory.
- **Testing:** Unit tests and integration tests are available in the `backend/tests` directory. Run tests using `npm test` in the backend directory.

## Contributors

- [Faiz](https://github.com/feyzibrahim)

## License

This project is licensed under the [MIT License](LICENSE).
