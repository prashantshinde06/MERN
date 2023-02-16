import dotenv from "dotenv";
dotenv.config();

const MYSQL_HOST = process.env.MY_SQL_DB_HOST || "localhost";
const MYSQL_DATABASE = process.env.MY_SQL_DB_NAME || "db";
const MYSQL_USER = process.env.MY_SQL_DB_USERNAME || "user";
const MYSQL_PASS = process.env.MY_SQL_DB_PASSWORD || "password";

const MYSQL = {
  user: MYSQL_USER,
  host: MYSQL_HOST,
  pass: MYSQL_PASS,
  database: MYSQL_DATABASE,
};

const config = {
  mysql: MYSQL,
};

export default config;