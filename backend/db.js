const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "Hjun",
  database: "myapp",
});
exports.pool = pool;
