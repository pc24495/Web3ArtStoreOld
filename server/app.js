require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { db } = require("./database/db.js");
const path = require("path");
const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../my-app/out")));
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  if (process.env.NODE_ENV === "production") {
    res.sendFile(path.join(__dirname, "../my-app/out/index.html"));
  } else {
    res.send("App Works !!!!");
  }
});

app.get("/api/testRoute", async (request, response) => {
  response.status(200).json({ success: true, message: "From backend" });
});

app.post("/api", async (request, response) => {});

module.exports = { app };
