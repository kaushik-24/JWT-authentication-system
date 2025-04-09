<html>
<head>
  <title>Task Manager with Authentication</title>
</head>
<body>
  <h1>Task Manager with Authentication</h1>
  <img src="https://via.placeholder.com/800x200.png?text=Task+Manager+Project" alt="Project Banner" width="800" height="200">
  <!-- Replace the placeholder image URL with your own if desired -->

  <h2>Project Overview</h2>
  <p>
    This project is a simple <b>Task Manager</b> application built with the <b>MERN stack (MongoDB, Express.js, React, Node.js)</b> and <b>MySQL</b> as the database. It includes user authentication using <b>JWT (JSON Web Tokens)</b> and a basic task management feature where authenticated users can create, view, and delete their tasks. The goal is to demonstrate a secure and functional full-stack application with a clean and user-friendly interface.
  </p>
  <h3>Objective</h3>
  <p>Develop an application with:</p>
  <ul>
    <li>User authentication (registration and login).</li>
    <li>A simple feature: Task Manager (add, view, delete tasks).</li>
    <li>A responsive React frontend and a secure Node.js backend.</li>
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
    <li><b>View Tasks</b>: Display a list of user-specific tasks.</li>
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
├── client/               <i># React frontend</i>
│   ├── public/           <i># Static assets</i>
│   ├── src/              <i># React source code</i>
│   │   ├── components/   <i># Reusable UI components</i>
│   │   ├── pages/        <i># Login, Register, Dashboard pages</i>
│   │   ├── context/      <i># State management (optional)</i>
│   │   └── App.js        <i># Main app component</i>
│   └── package.json      <i># Frontend dependencies</i>
├── server/               <i># Node.js backend</i>
│   ├── config/           <i># Database configuration</i>
│   ├── models/           <i># MySQL table schemas (Users, Tasks)</i>
│   ├── routes/           <i># API endpoints</i>
│   ├── middleware/       <i># Authentication middleware</i>
│   ├── controllers/      <i># Route handlers</i>
│   └── server.js         <i># Entry point</i>
└── README.md             <i># Project documentation</i>
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
    <li>Navigate to the <code>server</code> directory:
      <pre><code>cd server</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Create a <code>.env</code> file in the <code>server</code> directory with:
      <pre><code>
PORT=5000
JWT_SECRET=your_jwt_secret_here
DB_HOST=localhost
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=task_manager_db
      </code></pre>
    </li>
    <li>Set up MySQL:
      <ul>
        <li>Create a database named <code>task_manager_db</code>.</li>
        <li>Run the SQL schema from <code>server/models/schema.sql</code> (if provided) to create <code>users</code> and <code>tasks</code> tables.</li>
      </ul>
    </li>
    <li>Start the backend server:
      <pre><code>npm start</code></pre>
    </li>
  </ol>

  <h3>3. Frontend Setup</h3>
  <ol>
    <li>Navigate to the <code>client</code> directory:
      <pre><code>cd client</code></pre>
    </li>
    <li>Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Start the React development server:
      <pre><code>npm start</code></pre>
      The frontend will run on <a href="http://localhost:3000">http://localhost:3000</a>.
    </li>
  </ol>

  <h3>4. Test the Application</h3>
  <p>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a>. Register a new user, log in, and start managing tasks!</p>

  <hr>

  <h2>Deployment (Optional)</h2>
  <ul>
    <li><b>Frontend</b>: Deployed on <a href="https://vercel.com">Vercel</a> or <a href="https://www.netlify.com">Netlify</a>.</li>
    <li><b>Backend</b>: Deployed on <a href="https://render.com">Render</a> or <a href="https://railway.app">Railway</a>.</li>
    <li><b>Live URLs</b>:
      <ul>
        <li>Frontend: <a href="https://your-frontend-url.vercel.app">https://your-frontend-url.vercel.app</a></li>
        <li>Backend: <a href="https://your-backend-url.onrender.com">https://your-backend-url.onrender.com</a></li>
      </ul>
    </li>
  </ul>

  <hr>

  <h2>Demo Video</h2>
  <p>If hosting is not feasible, a demo video showcasing the application is available <a href="https://your-video-link.com">here</a>. It demonstrates:</p>
  <ul>
    <li>User registration and login.</li>
    <li>Adding, viewing, and deleting tasks.</li>
    <li>Error handling and UI responsiveness.</li>
  </ul>

  <hr>

  <h2>Submission Details</h2>
  <ul>
    <li><b>GitHub Repository</b>: <a href="https://github.com/your-username/task-manager">https://github.com/your-username/task-manager</a></li>
    <li><b>Live URLs</b>: (If deployed) See Deployment section above.</li>
    <li><b>Demo Video</b>: (If local) See Demo Video section above.</li>
  </ul>

  <hr>

  <h2>Evaluation Criteria</h2>
  <ul>
    <li><b>Functionality</b>: Meets all requirements (authentication, task management).</li>
    <li><b>User Experience</b>: Simple and intuitive UI.</li>
    <li><b>Code Quality</b>: Clean, commented, and well-structured code.</li>
    <li><b>Deployment</b>: (Optional) Accessible and functional online.</li>
  </ul>

  <hr>

  <h2>Contributing</h2>
  <p>Feel free to fork this repository and submit pull requests for improvements!</p>

  <h2>License</h2>
  <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>
</html>
