import userDataLayer from "../models/user-data-layer";
import { Response, Request } from "express";
import CryptoJS from "crypto-js";

const userLoginController = {
  async userLogin(req: Request, res: Response, userData: any) {
    userDataLayer.getLoginDetails(userData.userEmail).then((userInfo: any) => {
      // console.log(userInfo,"foem getlogdetails");
      const bytes = CryptoJS.AES.decrypt(userData.userPass, "secret key 123");
      const logPass = bytes.toString(CryptoJS.enc.Utf8);
      const bytes1 = CryptoJS.AES.decrypt(userInfo[0].userPass, "secret key 123");
      const dbPass = bytes1.toString(CryptoJS.enc.Utf8);
      if (
        userInfo[0].userEmail === userData.userEmail && logPass === dbPass
        // userInfo[0].userPass === userData.userPass
      ) {
        res.status(200).send("log in succesfull");
      } else {
        res.send({ message: "Please enter valid data", status: false });
      }
    });
  },
};

export default userLoginController;
