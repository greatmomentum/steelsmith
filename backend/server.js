const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

var corsOptions = {
  origin: "http://localhost:8000"
};

app.use(cors(corsOptions));
app.use(express.json());

// START making the frontend and backend to work on a common port when making it live
//remove the below code if you want the backend to be separate
// parse requests of content-type - application/json
if (!__dirname) {
  const __dirname = path.dirname("");
}
const buildpath = path.join(__dirname, "../client/dist");
app.use(express.static(buildpath));
// END making the frontend and backend to work on a common port when making it live

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// Serve the admin panel files
app.use("/admin", express.static(path.join(__dirname, "admin")));  

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Steelsmith Backend." });
});

require("./routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});