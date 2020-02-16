const {
    create,
    getVergaderingById,
    getVergadering,
    updateVergadering,
    deleteVergadering
} = require("./vergadering.service");

module.exports = {
    createVergadering: (req, res) => {
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
    getVergaderingById: (req, res) => {
        const vergader_id = req.params.vergader_id;
        getVergaderingById(vergader_id, (err, results) => {
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
    getVergadering: (req, res) => {
        getVergadering((err, results) => {
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
    updateVergadering: (req, res) => {
        const body = req.body;
        const vergader_id = req.params.vergader_id;
        getVergaderingById(vergader_id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.status(404).json({
                    success: 0,
                    message: "vergadering bestaat niet!"
                });
            } else {
                updateVergadering(body, vergader_id, (err, results) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    return res.status(200).json({
                        success: 1,
                        message: "update Succesvol!"
                    });
                });
            }
        });
    },
    deleteVergadering: (req, res) => {
        const vergader_id = req.params.vergader_id;
        getVergaderingById(vergader_id, (err, results) => {
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
                deleteVergadering(vergader_id, (err) => {
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