<html>

<body>
  <h1>Task Manager with Authentication</h1>
  <h2>Project Overview</h2>
  <p>
    This project is a simple <b>Task Manager</b> application built with the <b>MERN stack (MySQL Express.js, React, Node.js)</b> and <b>MySQL</b> as the database. It includes user authentication using <b>JWT (JSON Web Tokens)</b> and a basic task management feature where authenticated users can create and delete their tasks. The goal is to demonstrate a secure and functional full-stack application with a clean and user-friendly interface.
  </p>
  <h3>Objective</h3>
  <p>Develop an application with:</p>
  <ul>
    <li>User authentication (registration and login).</li>
    <li>A simple feature: Task Manager (add & delete tasks).</li>
    <li>A responsive React frontend and a secure Node.js backend using express.</li>
  </ul>
  <hr>
  <h2>Features</h2>
  <h3>User Authentication</h3>
  <ul>
    <li><b>Registration</b>: Create a new user account with email and password.</li>
    <li><b>Login</b>: Authenticate users and issue a JWT token.</li>
    <li><b>Security</b>: Passwords are hashed using <code>bcrypt</code>, and JWT is stored in HTTP-only cookies for session management.</li>
  </ul>
  <h3>Task Manager</h3>
  <ul>
    <li><b>Add Task</b>: Authenticated users can create tasks with a title and description.</li>
    <li><b>Delete Task</b>: Remove tasks by ID.</li>
  </ul>

  <hr>

  <h2>Tech Stack</h2>
  <ul>
    <li><b>Frontend</b>: React (with Context API for state management)</li>
    <li><b>Backend</b>: Node.js with Express.js</li>
    <li><b>Database</b>: MySQL</li>
    <li><b>Authentication</b>: JWT and bcrypt</li>
    <li><b>Tools</b>: npm, Git</li>
  </ul>

  <hr>

  <h2>Project Structure</h2>
  <pre>
task-manager/
├── frontend/             <i># React frontend</i>
│   ├── src/              <i># React source code</i>
│   │   ├── components/   <i># Reusable UI components</i>
│   │   ├── context/      <i># State management </i>
│   │   └── index.css      <i># main css</i> 
│   │   └── main.tsx       <i># Main  component</i>
│   │   └── App.tsx       <i># app component</i>
│   └── package.json      <i># Frontend dependencies</i>
|   
├── backend/               <i># express backend</i>
│   ├── config/           <i># Database configuration</i>
│   ├── routes/           <i># API endpoints - auth.ts & tasks.ts</i>
│   ├── middleware/       <i># Authentication middleware</i>
│   └── .env          <i># file for dataabse_url and JWT_secret for localhost</i>
│   └── server.tsx        <i># Entry point</i>
└── README.md             <i># Project documentation</i>
└── sql               <i># Project documentation</i>
    ├── schema.sql    <i>#sql code</i>
  </pre>
  <hr>
  <h2>API Endpoints</h2>
  <table border="1">
    <tr>
      <th>Method</th>
      <th>Endpoint</th>
      <th>Description</th>
      <th>Authentication</th>
    </tr>
    <tr>
      <td>POST</td>
      <td>/register</td>
      <td>Register a new user</td>
      <td>No</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/login</td>
      <td>Login and return JWT</td>
      <td>No</td>
    </tr>
    <tr>
      <td>GET</td>
      <td>/tasks</td>
      <td>Fetch user's tasks</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>POST</td>
      <td>/tasks</td>
      <td>Add a new task</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>DELETE</td>
      <td>/tasks/:id</td>
      <td>Delete a task by ID</td>
      <td>Yes</td>
    </tr>
  </table>

  <hr>

  <h2>Prerequisites</h2>
  <ul>
    <li>Node.js (>= 14.x)</li>
    <li>MySQL (>= 8.x)</li>
    <li>npm (>= 6.x)</li>
  </ul>

  <h2>Setup Instructions</h2>
  <h3>1. Clone the Repository</h3>
  <pre>
    <code>
git clone https://github.com/your-username/task-manager.git
cd task-manager
    </code>
  </pre>

  <h3>2. Backend Setup</h3>
  <ol>
    <li>Navigate to the <code>backend</code> directory:
      <pre><code>cd backend</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Create a <code>.env</code> file in the <code>backend</code> directory with:
      <pre><code>
JWT_SECRET=your_jwt_secret_here
DATABASE_URL=url
      </code></pre>
    </li>
    <li>Set up MySQL:
      <ul>
        <li>Create a database named <code>task_manager_db</code>.</li>
        <li>Run the SQL schema from <code>sql/schema.sql</code> (if provided) to create <code>users</code> and <code>tasks</code> tables.</li>
        <li>
          <pre><code>
          //inside schema.sql
          CREATE DATABASE task_manager;
          USE task_manager;
          CREATE TABLE users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
          );
          CREATE TABLE tasks (
          id INT AUTO_INCREMENT PRIMARY KEY,
          user_id INT,
          title VARCHAR(255) NOT NULL,
          description TEXT,
          FOREIGN KEY (user_id) REFERENCES users(id)
          );
        </pre>
        </code>
        </li>
      </ul>
          <li>Start the backend server:
            <pre><code>npm start</code></pre>
          </li>
  </ol>

  <h3>3. Frontend Setup</h3>
  <ol>
    <li>Navigate to the <code>frontend</code> directory:
      <pre><code>cd frontend</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Start the React development server:
      <pre><code>npm start</code></pre>
    </li>
  </ol>

  <h3>4. Test the Application</h3>
  <p>Open your browser and navigate to http://localhost:3000 [maybe different]. Register a new user, log in, and start managing tasks!</p>
  <hr>
  <h2>Deployment </h2>
  <ul>
    <li><b>Frontend</b>: Deployed on <a href="https://vercel.com">Vercel</a> </li>
    <li><b>Backend</b>: Deployed on <a href="https://render.com">Render</a></li>
    <li><b>Database</b>: Deployed on <a href="https://railway.com">Railway</a></li><br />
    <li><b>Live frontend URL</b>:  https://task-manager-ruddy-rho.vercel.app/</li>
    <li><b>Live backend URL</b>:  https://task-manager-g9gi.onrender.com </li>
  </ul>
  
  <h2>Contributing</h2>
  <p>Feel free to fork this repository and submit pull requests for improvements!</p>
  <h2>License</h2>
  <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>
</html>
