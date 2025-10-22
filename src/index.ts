import express from "express";
import { config } from "dotenv";

config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    msg: "Hello panini",
  });
});

app.listen(3000, () => {
  console.log("server running at port: 3000");
});
