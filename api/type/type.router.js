const { 
    createType,
    getTypeById,
    getTypes,
    updateType,
    deleteType
} = require("./type.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

// router.post("/", checkToken, createType);
router.post("/", createType);
router.get("/", checkToken, getTypes);
router.get("/:gebruiker_id", checkToken, getTypeById);
router.patch("/", checkToken, updateType);
router.delete("/", checkToken, deleteType);

module.exports = router;
