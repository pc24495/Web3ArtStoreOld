require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./database/db");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", async (request, response) => {});

app.post("/api", async (request, response) => {});

module.exports = { app };
