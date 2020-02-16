const {
    createVergadering,
    getVergaderingById,
    getVergadering,
    updateVergadering,
    deleteVergadering
} = require("./vergadering.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createVergadering);
router.get("/", checkToken, getVergadering);
router.get("/:vergader_id", checkToken, getVergaderingById);
router.put("/:vergader_id", checkToken, updateVergadering);
router.delete("/:vergader_id", checkToken, deleteVergadering);

module.exports = router;
