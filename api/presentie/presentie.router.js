const {
    createPresentie,
    getPresentieById,
    getPresenties,
    updatePresentie,
    deletePresentie
} = require("./presentie.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createPresentie);
router.get("/", checkToken, getPresenties);
router.get("/:presentie_id", checkToken, getPresentieById);
router.put("/:presentie_id", checkToken, updatePresentie);
router.delete("/:presentie_id", checkToken, deletePresentie);

module.exports = router;
