import express from "express";
import { config } from "dotenv";
import { getMsg } from "./controller/user.controller.js";

config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send(getMsg());
});

app.listen(3000, () => {
  console.log("server running at port: 3000");
});
