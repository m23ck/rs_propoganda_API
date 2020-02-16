const {
    create,
    getRessortById,
    getRessorts,
    updateRessort,
    deleteRessort
} = require("./ressort.service");

module.exports = {
    createRessort: (req, res) => {
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
    getRessortById: (req, res) => {
        const ressort_id = req.params.ressort_id;
        getRessortById(ressort_id, (err, results) => {
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
    getRessorts: (req, res) => {
        getRessorts((err, results) => {
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
    updateRessort: (req, res) => {
        const data = req.body;
        const ressort_id = req.params.ressort_id;
        getRessortById(ressort_id, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!result) {
                return res.status(404).json({
                    success: 0,
                    message: "Ressort bestaat niet!"
                });
            } else {
                updateRessort(data, ressort_id, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    return res.status(200).json({
                        success: 1,
                        message: "update succesvol!"
                    });
                });
            }
        });
        // updateRessort(data, (err, results) => {
        //     if (err) {
        //         console.log(err);
        //         return;
        //     }
        //     if (!results) {
        //         return res.json({
        //             success: 0,
        //             message: "Er is een fout opgetreden bij het updaten!"
        //         });
        //     }
        //     return res.json({
        //         success: 1,
        //         message: "update Succesvol!"
        //     });
        // });
    },
    deleteRessort: (req, res) => {
        const ressort_id = req.params.ressort_id;
        getRessortById(ressort_id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Ressort niet gevonden!"
                });
            } else {
                deleteRessort(ressort_id, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    return res.json({
                        success: 1,
                        message: "Ressort succesvol verwijderd"
                    });
                });
            }
        });
    }
}