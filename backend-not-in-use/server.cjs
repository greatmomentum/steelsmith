import express from 'express';
import cors from 'cors';
import db from './models'; // Assuming models/index.js exports the db object

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to the database!");
  } catch (err) {
    console.error("Cannot connect to the database!", err);
    process.exit(1);
  }
})();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Steelsmith Backend." });
});

require("./routes/user.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
