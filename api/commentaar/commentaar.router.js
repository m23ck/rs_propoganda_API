const {
    createCommentaar,
    getCommentaarById,
    getCommentaar,
    updateCommentaar,
    deleteCommentaar
} = require("./commentaar.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", checkToken, createCommentaar);
router.get("/", checkToken, getCommentaar);
router.get("/:commentaar_id", checkToken, getCommentaarById);
router.put("/:commentaar_id", checkToken, updateCommentaar);
router.delete("/:commentaar_id", checkToken, deleteCommentaar);

module.exports = router;
