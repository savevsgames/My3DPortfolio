import express from "express";
const router = express.Router();
import { getData } from "../../controllers/apiController.js";

router.route("/data").get(getData);

export default router;
