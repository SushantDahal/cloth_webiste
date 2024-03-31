const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 3000;

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

connection.connect();

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// Routes
app.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const sql = `INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;
  const values = [firstName, lastName, email, password];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error registering user:", err);
      res
        .status(500)
        .json({ error: "An error occurred while registering user" });
      return;
    }
    console.log("User registered successfully");
    res.status(200).json({ message: "User registered successfully" });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
