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
router.patch("/", checkToken, updateBericht);
router.delete("/", checkToken, deleteBericht);

module.exports = router;
