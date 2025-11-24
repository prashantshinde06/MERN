"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconn_1 = require("../db/dbconn");
const userDataLayer = {
    insertFormDetails(FormDetails) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(FormDetails, "form insertformdetails");
            const values = [
                FormDetails.userName || null,
                FormDetails.userEmail || null,
                FormDetails.userPass || null,
                FormDetails.userRePass || null,
            ];
            const query = `INSERT INTO userdata.registrationdata

          (userName,userEmail,userPass)
      
          VALUES (?, ?, ?)`;
            const connection = yield (0, dbconn_1.Connect)();
            if (!connection) {
                throw new Error(`Could not connect to database`);
            }
            return (0, dbconn_1.InsertQuery)(connection, query, values).then((result) => {
                return result;
            })
                .catch((error) => {
                return error;
            })
                .finally(() => {
                connection.end();
            });
        });
    },
    getFormDetails(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT userEmail FROM userdata.registrationdata
  WHERE userEmail="${userEmail}";`;
            const connection = yield (0, dbconn_1.Connect)();
            if (!connection) {
                throw new Error(`Could not connect to database`);
            }
            return (0, dbconn_1.getQuery)(connection, query).then((result) => {
                return result;
            })
                .catch((error) => {
                return error;
            })
                .finally(() => {
                connection.end();
            });
        });
    },
    getLoginDetails(userEmail) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT userEmail,userPass FROM userdata.registrationdata
  WHERE userEmail="${userEmail}";`;
            const connection = yield (0, dbconn_1.Connect)();
            if (!connection) {
                throw new Error(`Could not connect to database`);
            }
            return (0, dbconn_1.getQuery)(connection, query).then((result) => {
                return result;
            })
                .catch((error) => {
                return error;
            })
                .finally(() => {
                connection.end();
            });
        });
    }
};
exports.default = userDataLayer;
