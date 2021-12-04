require("dotenv").config();
const knex = require("knex");
const knexfile = require("./knexfile.js");

const db = knex(
  ["development"].includes(process.env.NODE_ENV)
    ? knexfile.development
    : ["production"].includes(process.env.NODE_ENV)
    ? knexfile.production
    : knexfile.test
);

module.exports = db;
