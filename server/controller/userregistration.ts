import userDataLayer from "../models/user-data-layer";
import { Request, Response } from "express";


const userRegistrationController = {
  async registrationForm(req: Request, res: Response, userData: any) {
    // const saltRounds = 10;
    // const salt = bcrypt.genSaltSync(saltRounds);
    // const hash = bcrypt.hashSync(userData.userPass, salt);
    //  console.log(hash);
    // const data = { ...userData, userPass: hash };
    userDataLayer.getFormDetails(req.body.userEmail).then((userInfo: any) => {
      if (userInfo.length === 0) {
        userDataLayer.insertFormDetails(userData);
        res.status(200).send({ message: "User Data Inserted Successfully" });
      } else {
        for (let i = 0; i < userInfo.length; i++) {
          if (userInfo[i].userEmail === userData.userEmail) {
            res.send({ message: "User Already Exist", status: false });
          } else {
            userDataLayer.insertFormDetails(userData);
            res
              .status(200)
              .send({ message: "User Data Inserted Successfully" });
          }
        }
      }
    });
  },
};

export default userRegistrationController;
