import express from "express"

import registerUsers from "../controllers/registerUser.js";

const router = express.Router();

router.route("/").post(registerUsers.register);
router.route("/verifyCodeEmail").post(registerUsers.verifyCode);

export default router;