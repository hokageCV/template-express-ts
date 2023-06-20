import express, { Request, Response } from "express";

import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(morgan(":date[web] ⌛ :method :url :status ⚫ :response-time ms - :res[content-length]"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "RASENGAN" });
});

export default app;
