const {
    createRessort,
    getRessortById,
    getRessorts,
    updateRessort,
    deleteRessort
} = require("./ressort.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createRessort);
router.get("/", checkToken, getRessorts);
router.get("/:ressort_id", checkToken, getRessortById);
router.patch("/", checkToken, updateRessort);
router.delete("/:ressort_id", checkToken, deleteRessort);

module.exports = router;
