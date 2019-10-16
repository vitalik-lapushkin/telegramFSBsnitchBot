const pgp = require("pg-promise");
const DB = pgp("postgres://postgres:postgres@localhost:5432/FSBsnitchBot");

module.exports = DB;