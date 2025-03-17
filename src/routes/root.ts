import express from "express";

const router = express.Router();

router.get("/", (_request, response) => {
response.render("root", { name: "Zeta Chi 1 site" });
});

export default router;
