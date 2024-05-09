import express from "express";

const router = express.Router();

import { authentication } from "../middlewares/index.js";
import { getAllCourses } from "../controllers/index.js";

router.route("/").get(authentication, getAllCourses);

export default router;
