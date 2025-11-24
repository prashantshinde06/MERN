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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const userregistration_1 = __importDefault(require("../controller/userregistration"));
const userlogin_1 = __importDefault(require("../controller/userlogin"));
exports.router = express_1.default.Router();
exports.router.post("/insertData", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        console.log(data);
        userregistration_1.default.registrationForm(req, res, data);
    });
});
exports.router.post("/userLogin", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = req.body;
        console.log(data, "fromget");
        userlogin_1.default.userLogin(req, res, data);
    });
});
