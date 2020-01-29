const {
    create,
    getBerichtById,
    getBericht,
    updateBericht,
    deleteBericht
} = require("./bericht.service");

module.exports = {
    createBericht: (req, res) => {
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
    getBerichtById: (req, res) => {
        const bericht_id = req.params.bericht_id;
        getBerichtById(bericht_id, (err, results) => {
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
    getBericht: (req, res) => {
        getBericht((err, results) => {
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
    // updateBericht: (req, res) => {
    //     const data = req.body;
    //     updateBericht(body, (err, results) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         if (!results) {
    //             return res.status(503).json({
    //                 success: 0,
    //                 message: "Er is een fout opgetreden bij het updaten!"
    //             });
    //         }
    //         return res.status(200).json({
    //             success: 1,
    //             message: "update Succesvol!"
    //         });
    //     });
    // },
    updateBericht: (req, res) => {
        const bericht = req.body.bericht;
        const bericht_id = req.params.bericht_id;
        getBerichtById(bericht_id, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!result) {
                return res.status(404).json({
                    success: 0,
                    message: "Record niet gevonden"
                });
            } else {
                updateBericht(bericht, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    return res.status(200).json({
                        success: 1,
                        message: "Update bericht succesvol!"
                    });
                });
            }
        });
    },
    deleteBericht: (req, res) => {
        const bericht_id = req.params.bericht_id;
        getBerichtById(bericht_id, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!result) {
                return res.status(404).json({
                    success: 0,
                    message: "Bericht niet gevonden"
                });
            } else {
                deleteBericht(bericht_id, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    return res.status(200).json({
                        success: 1,
                        message: "Bericht succesvol verwijderd!"
                    });
                });
            }
        });
    }
}