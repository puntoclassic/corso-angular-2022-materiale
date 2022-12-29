import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";

const app: Express = express();
var cors = require("cors");

//cors
app.use(cors({
  credentials: true,
  origin: [
    "http://localhost:3000",
    "http://localhost:4200",
    "http://localhost",
  ],
}));

//body parser
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

//static contents
app.use(express.static("public"));
app.use("/public", express.static("public"));

export const rootPath = __dirname;

//routes
app.use("/", require("./routes/homeRoutes"));
app.use("/product", require("./routes/productRoutes"));

//404 page
app.use((req: Request, res: Response, next: any) => {
  res.status(404).end("Pagina non trovata");
});

app.listen(4000, () => {
  console.log("App started");
});
