import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    msg: "Hello world",
  });
});

app.listen(3000, () => {
  console.log("server running at port: 3000");
});
