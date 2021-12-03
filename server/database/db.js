require("dotenv").config();
const knex = require("knex");
const knexfile = require("./knexfile.js");

console.log(process.env.NODE_DEV);

const db = knex(
  ["development"].includes(process.env.NODE_DEV)
    ? knexfile.development
    : ["production"].includes(process.env.NODE_DEV)
    ? knexfile.production
    : knexfile.test
);

module.exports = db;
