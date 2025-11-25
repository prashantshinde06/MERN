import { router } from "./routes/routes";
import express, { Express, Response, Request } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
// const PORT = process.env.PORT || 3000;
// const PORT = Number(process.env.PORT) 
// const HOST = Number(process.env.HOST)
const PORT = Number(process.env.PORT) || 4200;
const HOST = process.env.HOST || "0.0.0.0";
const app: Express = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/", router);

app.listen(PORT, HOST, () => {
  console.log(`Server running on ${HOST}:${PORT}`);
});
