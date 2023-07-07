import { Router } from "express";
const router = Router();

import { indexControler } from "../controllers/index.controller";

router.route("/").get(indexControler);

export default router;
