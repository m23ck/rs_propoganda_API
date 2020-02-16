const {
    createBericht,
    getBerichtById,
    getBericht,
    updateBericht,
    deleteBericht
} = require("./bericht.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createBericht);
router.get("/", checkToken, getBericht);
router.get("/:bericht_id", checkToken, getBerichtById);
router.put("/:bericht_id", checkToken, updateBericht);
router.delete("/:bericht_id", checkToken, deleteBericht);

module.exports = router;
