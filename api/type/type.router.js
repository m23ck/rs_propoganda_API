const {
    createType,
    getTypeById,
    getTypes,
    updateType,
    deleteType
} = require("./type.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createType);
router.get("/", checkToken, getTypes);
router.get("/:type_id", checkToken, getTypeById);
router.put("/:type_id", checkToken, updateType);
router.delete("/:type_id", checkToken, deleteType);

module.exports = router;
