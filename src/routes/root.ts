import express from "express";
const router = express.Router();

// Home page at "/"
router.get("/", (_req, res) => {
  res.render("pages/home", { title: "Home" });
});

// (Optional) duplicate route at "/home"
router.get("/home", (_req, res) => {
  res.render("pages/home", { title: "Home" });
});

export default router;