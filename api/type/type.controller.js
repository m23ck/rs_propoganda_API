const {
    create,
    getTypeById,
    getTypes,
    updateType,
    deleteType
} = require("./type.service");

module.exports = {
    createType: (req, res) => {
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
    getTypeById: (req, res) => {
        const type_id = req.params.type_id;
        getTypeById(type_id, (err, results) => {
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
    getTypes: (req, res) => {
        getTypes((err, results) => {
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
    updateType: (req, res) => {
        const body = req.body;
        const type_id = req.params.type_id;
        getTypeById(type_id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    succes: 0,
                    message: "type bestaat niet!"
                });
            } else {
                updateType(body, type_id, (err) => {
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
    deleteType: (req, res) => {
        const type_id = req.params.type_id;
        getTypeById(type_id, (err, results) => {
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
                deleteType(type_id, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    return res.status(200).json({
                        success: 1,
                        message: "Type succesvol verwijderd"
                    });
                });
            }
        });
    }
}