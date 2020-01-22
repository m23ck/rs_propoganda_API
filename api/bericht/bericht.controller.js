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
    getBericht: (req, res) => {
        getBericht((err, results) => {
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
    updateBericht: (req, res) => {
        const body = req.body;
        updateBericht(body, (err, results) => {
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
    deleteBericht: (req, res) => {
        const data = req.body;
        deleteBericht(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record niet gevonden!"
                });
            }
            return res.json({
                success: 1,
                message: "Type succesvol verwijderd"
            });
        });
    }
}