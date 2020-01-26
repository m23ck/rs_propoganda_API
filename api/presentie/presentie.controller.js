const {
    create,
    getPresentieById,
    getPresenties,
    updatePresentie,
    deletePresentie
} = require("./presentie.service");

module.exports = {
    createPresentie: (req, res) => {
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
    getPresentieById: (req, res) => {
        const presentie_id = req.params.presentie_id;
        getPresentieById(presentie_id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    succes: 0,
                    message: "Record niet gevonden!"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getPresenties: (req, res) => {
        getPresenties((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Op dit moment is er niet genoeg data om op te halen"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updatePresentie: (req, res) => {
        const body = req.body;
        updatePresentie(body, (err, results) => {
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
    deletePresentie: (req, res) => {
        const presentie_id = req.params.presentie_id;
        getPresentieById(presentie_id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "Presentie niet gevonden!"
                });
            } else {
                deletePresentie(presentie_id, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    return res.status().json({
                        success: 1,
                        message: "Presentie succesvol verwijderd!"
                    });
                })
            }
        });
    }
}