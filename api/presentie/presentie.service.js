const pool = require("../../config/config");


module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into presentie(naam, voornaam, email, vergader_id) values(?,?,?,?)`,
            [
                data.naam,
                data.voornaam,
                data.email,
                data.vergader_id,
                data.commentaar_id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getPresenties: callBack => {
        pool.query(
            `select presentie_id, naam, voornaam, email, vergader_id from presentie`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getPresentieById: (presentie_id, callBack) => {
        pool.query(`select presentie_id, naam, voornaam, email, vergader_id from presentie where presentie_id = ?`,
            [presentie_id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updatePresentie: (data, callBack) => {
        pool.query(`update presentie set naam = ?, voornaam = ?, email = ?, vergader_id = ? where presentie_id = ?`,
            [
                data.naam,
                data.voornaam,
                data.email,
                data.vergader_id,
                data.commentaar_id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deletePresentie: (presentie_id, callBack) => {
        pool.query(
            `delete from presentie where presentie_id = ?`,
            [presentie_id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};