import { router } from "./routes/routes";
import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/", router);

// app.post("/data", (req: Request, res: Response) => {
//     console.log(req.body,"data form react");
//     res.send("msg from express server");
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
