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
   cd ../node-with-postgres
   npm install

3. **Database Setup:**

- Download and install [postgreSQL](https://www.postgresql.org/download/)
- Create an `.env` file inside node-with-postgres and copy the code from `.env.local` and paste it inside the `.env` file.
- cd node-with-postgres
- Run `-- psql -U postgres -d dynamic_gold_carding_db -f "create_db_table.sql"`
- This command will create database, generate tables and insert necessary data to corresponding tables.

4. **Start the Development Servers:**
   cd client
   npm start | for frontend
   cd ../node-with-postgres
   npm start | for backend

5. **Access the Application:**

- Open a web browser and navigate to `http://localhost:5173` to access the frontend.
- Use the provided APIs to interact with the backend for data retrieval and processing.

## Additional Notes

- **API Documentation:** Detailed documentation for backend APIs can be found in the [Postman](https://www.postman.com/research-candidate-11889234/workspace/gold-carding-pv/collection/25431562-2a85af3f-24d1-4b14-8ed7-4f87fb6ddd02?action=share&creator=25431562)
- **Testing:** Unit tests and integration tests are available in the `node-with-postgres/__tests__` directory. Run tests using `npm test` in the backend directory.

## Contributors

- [Faiz](https://github.com/feyzibrahim)

## License

This project is licensed under the [MIT License](LICENSE).
