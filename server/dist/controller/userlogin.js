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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_data_layer_1 = __importDefault(require("../models/user-data-layer"));
const crypto_js_1 = __importDefault(require("crypto-js"));
const userLoginController = {
    userLogin(req, res, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            user_data_layer_1.default.getLoginDetails(userData.userEmail).then((userInfo) => {
                // console.log(userInfo,"foem getlogdetails");
                const bytes = crypto_js_1.default.AES.decrypt(userData.userPass, "secret key 123");
                const logPass = bytes.toString(crypto_js_1.default.enc.Utf8);
                const bytes1 = crypto_js_1.default.AES.decrypt(userInfo[0].userPass, "secret key 123");
                const dbPass = bytes1.toString(crypto_js_1.default.enc.Utf8);
                if (userInfo[0].userEmail === userData.userEmail && logPass === dbPass
                // userInfo[0].userPass === userData.userPass
                ) {
                    res.status(200).send("log in succesfull");
                }
                else {
                    res.send({ message: "Please enter valid data", status: false });
                }
            });
        });
    },
};
exports.default = userLoginController;
