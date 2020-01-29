const pool = require("../../config/config");


module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into ressort(ressortnaam, district) values(?,?)`,
            [
                data.ressortnaam,
                data.district
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getRessorts: callBack => {
        pool.query(
            `select * from ressort`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getRessortById: (ressort_id, callBack) => {
        pool.query(`select * from ressort where ressort_id = ?`,
            [ressort_id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateRessort: (data, ressort_id, callBack) => {
        pool.query(`update ressort set ressortnaam = ?, district = ? where ressort_id = ?`,
            [
                data.ressortnaam,
                data.district,
                ressort_id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteRessort: (ressort_id, callBack) => {
        pool.query(
            `delete from ressort where ressort_id = ?`,
            [ressort_id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};