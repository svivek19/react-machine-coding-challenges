import express from "express";
import cors from "cors";
import Router from "./src/routes/router.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", Router);

const port = 5000;

app.listen(port, () => {
  console.log("Server listen port on: ", port);
});
