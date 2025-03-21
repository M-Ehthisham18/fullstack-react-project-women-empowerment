import express from "express";
import {
  login,
  signup,
  logout,
  deleteAccount,
  updateProfilePic,
  checkAuth,
} from "../controllers/auth.controller.js";
import protectRoute from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/delete-account",protectRoute, deleteAccount);
router.put("/update-profile", protectRoute, updateProfilePic);
router.get("/check",protectRoute , checkAuth);

export default router;
