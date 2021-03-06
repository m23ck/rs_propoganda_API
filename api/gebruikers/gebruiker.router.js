const {
    createGebruiker,
    getGebruikerById,
    getGebruikers,
    updateGebruiker,
    deleteGebruiker,
    login
} = require("./gebruiker.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createGebruiker);
router.get("/", checkToken, getGebruikers);
router.get("/:gebruiker_id", checkToken, getGebruikerById);
router.put("/:gebruiker_id", checkToken, updateGebruiker);
router.delete("/:gebruiker_id", checkToken, deleteGebruiker);
router.post('/login', login);

module.exports = router;
