"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes/routes");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
if (!process.env.PORT) {
    process.exit(1);
}
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use("/", routes_1.router);
// app.post("/data", (req: Request, res: Response) => {
//     console.log(req.body,"data form react");
//     res.send("msg from express server");
// });
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
