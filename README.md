# Task Manager with Authentication


## Project Overview

This project is a simple **Task Manager** application built with the **MERN stack (MongoDB, Express.js, React, Node.js)** and **MySQL** as the database. It includes user authentication using **JWT (JSON Web Tokens)** and a basic task management feature where authenticated users can create, view, and delete their tasks. The goal is to demonstrate a secure and functional full-stack application with a clean and user-friendly interface.

### Objective
Develop an application with:
- User authentication (registration and login).
- A simple feature: Task Manager (add, view, delete tasks).
- A responsive React frontend and a secure Node.js backend.

---

## Features

### User Authentication
- **Registration**: Create a new user account with email and password.
- **Login**: Authenticate users and issue a JWT token.
- **Security**: Passwords are hashed using `bcrypt`, and JWT is stored in HTTP-only cookies for session management.

### Task Manager
- **Add Task**: Authenticated users can create tasks with a title and description.
- **View Tasks**: Display a list of user-specific tasks.
- **Delete Task**: Remove tasks by ID.

---

## Tech Stack
- **Frontend**: React (with Context API for state management)
- **Backend**: Node.js with Express.js
- **Database**: MySQL
- **Authentication**: JWT and bcrypt
- **Tools**: npm, Git

---

## Project Structure

task-manager/
├── backend/               # React frontend
│   ├── src/              # React source code
│   │   ├── components/   # Reusable UI components (Login, Register, Dashboard)
|   |   |    ├── Login.tsx   
|   |   |    ├── Register.tsx
|   |   |    ├── Dashboard.tsx
│   │   ├── context/      # State management 
│   │   |    ├── AuthContext.tsx
|   |   |
│       └── App.tsx      # Main app component

│   └── package.json      # Frontend dependencies
├── server/               # Node.js backend
│   ├── config/           # Database configuration
│   ├── models/           # MySQL table schemas (Users, Tasks)
│   ├── routes/           # API endpoints
│   ├── middleware/       # Authentication middleware
│   ├── controllers/      # Route handlers
│   └── server.js         # Entry point
└── README.md             # Project documentation
text

---

## API Endpoints
| Method | Endpoint          | Description                   | Authentication |
|--------|-------------------|-------------------------------|----------------|
| POST   | `/register`       | Register a new user           | No             |
| POST   | `/login`          | Login and return JWT          | No             |
| GET    | `/tasks`          | Fetch user's tasks            | Yes            |
| POST   | `/tasks`          | Add a new task                | Yes            |
| DELETE | `/tasks/:id`      | Delete a task by ID           | Yes            |

---

## Prerequisites
- Node.js (>= 14.x)
- MySQL (>= 8.x)
- npm (>= 6.x)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
2. Backend Setup

    Navigate to the server directory:
    bash

cd server
Install dependencies:
bash
npm install
Create a .env file in the server directory with the following:
env
PORT=5000
JWT_SECRET=your_jwt_secret_here
DB_HOST=localhost
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=task_manager_db
Set up MySQL:

    Create a database named task_manager_db.
    Run the SQL schema from server/models/schema.sql (if provided) to create users and tasks tables.

Start the backend server:
bash

    npm start

3. Frontend Setup

    Navigate to the client directory:
    bash

cd client
Install dependencies:
bash
npm install
Start the React development server:
bash

    npm start
    The frontend will run on http://localhost:3000.

4. Test the Application

    Open your browser and navigate to http://localhost:3000.
    Register a new user, log in, and start managing tasks!

Deployment (Optional)

    Frontend: Deployed on Vercel or Netlify.
    Backend: Deployed on Render or Railway.
    Live URLs:
        Frontend: https://your-frontend-url.vercel.app
        Backend: https://your-backend-url.onrender.com

Demo Video

If hosting is not feasible, a demo video showcasing the application is available here. It demonstrates:

    User registration and login.
    Adding, viewing, and deleting tasks.
    Error handling and UI responsiveness.

Submission Details

    GitHub Repository: https://github.com/your-username/task-manager
    Live URLs: (If deployed) See Deployment section above.
    Demo Video: (If local) See Demo Video section above.

Evaluation Criteria

    Functionality: Meets all requirements (authentication, task management).
    User Experience: Simple and intuitive UI.
    Code Quality: Clean, commented, and well-structured code.
    Deployment: (Optional) Accessible and functional online.

Contributing

Feel free to fork this repository and submit pull requests for improvements!
License

This project is licensed under the MIT License - see the  file for details.
text

### Notes:
1. **Customization**: Replace placeholders like `your-username`, `your_jwt_secret_here`, and URLs with your actual details.
2. **Schema File**: If you include a `schema.sql` file in `server/models/`, mention it explicitly in the setup instructions.
3. **Images**: You can add a project banner or screenshots by uploading them to the repo and linking them in the README (e.g., `./screenshots/demo.png`).
4. **Video**: If you’re submitting a local demo, upload the video to a platform like YouTube or Google Drive and link it.

This README provides a professional and clear overview of your project, adhering to the a
