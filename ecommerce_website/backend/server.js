const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());

// Multer setup for handling file uploads
const upload = multer({ dest: "uploads/" }); // Destination folder for uploaded files

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

// sign up api
app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

//
//
// LOg in api
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` =?";

  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Fail");
    }
  });
});

// Product api
// Product api
app.post("/addToCart", upload.single("image"), (req, res) => {
  const { name, price, discountPrice } = req.body;
  const img = req.file ? req.file.filename : null; // Get the uploaded file name

  const sql =
    "INSERT INTO product (img, name, price, cutPrice) VALUES (?, ?, ?, ?)";
  const values = [img, name, price, discountPrice];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error adding product to cart:", err);
      return res.status(500).json({ message: "Failed to add product to cart" });
    } else {
      console.log("Product added to cart:", result);
      return res
        .status(200)
        .json({ message: "Product added to cart successfully" });
    }
  });
});

// // Start the server
app.listen(8081, () => {
  console.log("Listening ");
});
