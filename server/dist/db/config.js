"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
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
exports.default = config;
