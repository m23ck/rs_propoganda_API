const pool = require("../../config/config");


module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into commentaar(presentie_id, commentaar, type) values(?,?,?)`,
            [
                data.presentie_id,
                data.commentaar,
                data.type
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getCommentaar: callBack => {
        pool.query(
            `select * from commentaar inner join presentie on commentaar.presentie_id=presentie.presentie_id`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getCommentaarById: (commentaar_id, callBack) => {
        pool.query(`select * from commentaar inner join presentie on commentaar.presentie_id=presentie.presentie_id where commentaar_id = ?`,
            [commentaar_id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    updateCommentaar: (data, commentaar_id, callBack) => {
        pool.query(`update commentaar set presentie_id = ?, commentaar = ?, type = ? where commentaar_id = ?`,
            [
                data.presentie_id,
                data.commentaar,
                data.type,
                commentaar_id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteCommentaar: (commentaar_id, callBack) => {
        pool.query(
            `delete from commentaar where commentaar_id = ?`,
            [commentaar_id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};