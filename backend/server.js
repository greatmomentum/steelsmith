const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

var corsOptions = {
  origin: "http://localhost:8000"
};

app.use(cors(corsOptions));
app.use(express.json());

// Serve the frontend static files
const buildPath = path.join(__dirname, "../client/dist");
app.use(express.static(buildPath));

// Serve the admin panel files
app.use("/admin", express.static(path.join(__dirname, "admin")));  

// Route for serving the frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Set up routes for backend API
app.use(express.urlencoded({ extended: true }));
const db = require("./models");

// Connect to the database and set up routes
// (Assuming this is done in `user.routes.js` and other route files)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
