require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { db } = require("./database/db.js");
const path = require("path");
const app = express();

if (process.env.NODE_ENV === "production") {
  console.log("Heyyyy");
  app.use(express.static(path.join(__dirname, "../client/out")));
}

app.use(cors());
app.use(express.json());

// app.get("/", (req, res) => {
//   if (process.env.NODE_ENV === "production") {
//     console.log(path.join(__dirname, "../client/out/index.html"));
//     res.sendFile(path.join(__dirname, "../client/out/index.html"));
//   } else {
//     res.send("App Works !!!!");
//   }
// });

app.get("/testRoute", async (request, response) => {
  response.status(200).json({ success: true, message: "From backend" });
});

app.post("/", async (request, response) => {});

module.exports = { app };
