import express from "express";
const router = express.Router();

router.get("/login", (_req, res) => {
  res.render("auth/login", { title: "Login" });
});

router.get("/register", (_req, res) => {
  res.render("auth/register", { title: "Register" });
});

export default router;
