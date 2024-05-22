const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

var corsOptions = {
  origin: "http://localhost:8000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the frontend static files
const clientBuildPath = path.join(__dirname, "../client/dist");
app.use(express.static(clientBuildPath));

// Serve the admin panel files
const adminBuildPath = path.join(__dirname, "admin/dist");
app.use("/admin", express.static(adminBuildPath));

// Route for serving the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// Route for serving the admin panel (catch-all route)
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(adminBuildPath, 'index.html'));
});

// Set up routes for backend API
const db = require("./models");

// Connect to the database and set up routes
// (Assuming this is done in `user.routes.js` and other route files)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
