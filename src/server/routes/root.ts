import express from "express";
const router = express.Router();
router.get("/", (_request, response) => {
    response.render("root", { title: "Zeta Chi 1 Site" });
});
export default router;
