import express, { Request, Response } from "express";
import userRegistrationController from "../controller/userregistration";
import userLoginController from "../controller/userlogin";

export const router = express.Router();

router.post("/insertData", async function (req: Request, res: Response) {
  const data = req.body;
  // console.log(data);
  userRegistrationController.registrationForm(req,res,data);

});

router.post("/userLogin",async function(req:Request,res:Response){
  const data = req.body;
  console.log(data,"fromget");
  userLoginController.userLogin(req,res,data);
})
