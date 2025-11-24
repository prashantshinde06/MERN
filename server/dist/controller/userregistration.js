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
const userRegistrationController = {
    registrationForm(req, res, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            // const saltRounds = 10;
            // const salt = bcrypt.genSaltSync(saltRounds);
            // const hash = bcrypt.hashSync(userData.userPass, salt);
            //  console.log(hash);
            // const data = { ...userData, userPass: hash };
            user_data_layer_1.default.getFormDetails(req.body.userEmail).then((userInfo) => {
                if (userInfo.length === 0) {
                    user_data_layer_1.default.insertFormDetails(userData);
                    res.status(200).send({ message: "User Data Inserted Successfully" });
                }
                else {
                    for (let i = 0; i < userInfo.length; i++) {
                        if (userInfo[i].userEmail === userData.userEmail) {
                            res.send({ message: "User Already Exist", status: false });
                        }
                        else {
                            user_data_layer_1.default.insertFormDetails(userData);
                            res
                                .status(200)
                                .send({ message: "User Data Inserted Successfully" });
                        }
                    }
                }
            });
        });
    },
};
exports.default = userRegistrationController;
