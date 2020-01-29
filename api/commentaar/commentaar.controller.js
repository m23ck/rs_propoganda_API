const {
    create,
    getCommentaarById,
    getCommentaar,
    updateCommentaar,
    deleteCommentaar
} = require("./commentaar.service");

module.exports = {
    createCommentaar: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                success: 1,
                data: results
            })
        })
    },
    getCommentaarById: (req, res) => {
        const commentaar_id = req.params.commentaar_id;
        getCommentaarById(commentaar_id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(404).json({
                    succes: 0,
                    message: "Record niet gevonden!"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getCommentaar: (req, res) => {
        getCommentaar((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(204).json({
                    success: 0,
                    message: "Op dit moment is er niet genoeg data om op te halen"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    updateCommentaar: (req, res) => {
        const body = req.body;
        updateCommentaar(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Er is een fout opgetreden bij het updaten!"
                });
            }
            return res.json({
                success: 1,
                message: "update Succesvol!"
            });
        });
    },
    deleteCommentaar: (req, res) => {
        const commentaar_id = req.params.commentaar_id;
        getCommentaarById(commentaar_id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "Record niet gevonden!"
                });
            } else {
                deleteCommentaar(commentaar_id, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    return res.json({
                        success: 1,
                        message: "Presentie succesvol verwijderd"
                    });
                });
            }
        });
    }
}