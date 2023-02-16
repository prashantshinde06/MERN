import mysql from "mysql2";
import config from "./config";

const params = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.pass,
  database: config.mysql.database,
};

export const connection = mysql.createConnection(params);
connection.connect();

const Connect = async () =>
  new Promise<mysql.Connection>((resolve, reject) => {
    const connection = mysql.createConnection(params);

    connection.connect((error) => {
      if (error) {
        reject(error);

        return;
      }

      resolve(connection);
    });
  });

const InsertQuery = async (
  connection: mysql.Connection,

  query: string,

  values: Array<string | number>
) =>
  new Promise((resolve, reject) => {
    connection.query(query, values, (error, result) => {
      if (error) {
        reject(error);

        return;
      }

      resolve(result);
    });
  });

const getQuery = async (connection: mysql.Connection, query: string) =>
  new Promise((resolve, reject) => {
    connection.query(query, connection, (error, result) => {
      if (error) {
        reject(error);

        return;
      }

      resolve(result);
    });
  });

export { Connect, getQuery, InsertQuery };
