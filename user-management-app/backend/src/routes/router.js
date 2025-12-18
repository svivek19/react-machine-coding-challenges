import express from "express";
import { getUserDetails } from "../controllers/getUser.controller.js";

const Router = express.Router();

Router.get("/get-all-users", getUserDetails);

export default Router;
