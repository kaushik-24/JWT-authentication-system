<h1>Task Manager</h1>
<p>This is a simple JWT authentication with CRUD operations. </p>

<h5>File Structure</h5>
<p>
task-manager-app/
├── backend/                    # Backend (Node.js/Express) directory
│   ├── config/                 # Configuration files
│   │   └── db.js              # Database connection configuration
│   ├── middleware/            # Custom middleware
│   │   └── auth.js           # Authentication middleware
│   ├── routes/                # API route handlers
│   │   ├── auth.js           # Authentication routes (register/login)
│   │   └── tasks.js          # Task management routes
│   ├── .env                  # Environment variables (gitignored)
│   ├── .gitignore            # Git ignore file for backend
│   ├── package.json          # Backend dependencies and scripts
│   ├── package-lock.json     # Lock file for exact dependency versions
│   └── server.js             # Main server file
├── frontend/                   # Frontend (React) directory
│   ├── public/                # Static files
│   │   ├── index.html        # HTML template
│   │   ├── favicon.ico       # Favicon
│   │   └── manifest.json     # Web app manifest
│   ├── src/                   # Source code
│   │   ├── components/       # React components
│   │   │   ├── Login.js      # Login component
│   │   │   ├── Register.js   # Registration component
│   │   │   └── Dashboard.js  # Dashboard with task management
│   │   ├── App.js            # Main App component
│   │   ├── index.js          # React entry point
│   │   └── styles/           # CSS files (optional)
│   │       └── App.css       # Main styles
│   ├── .gitignore            # Git ignore file for frontend
│   ├── package.json          # Frontend dependencies and scripts
│   └── package-lock.json     # Lock file for exact dependency versions
├── sql/                       # Database schema
│   └── schema.sql            # MySQL schema file
├── .gitignore                # Root-level gitignore
├── README.md                 # Project documentation
└── demo-video.mp4            # Demonstration video (optional)
</p>
