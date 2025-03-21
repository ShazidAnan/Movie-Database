const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();  // Load environment variables

const app = express();
app.use(express.json());  // Allows JSON request bodies

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// Basic route
app.get("/", (req, res) => {
  res.send("Welcome to Movie Database API!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
