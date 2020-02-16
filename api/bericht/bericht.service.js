const pool = require("../../config/config");

module.exports = {
  create: (data, callBack) => {
    pool.query(
      `insert into bericht(bericht, gebruiker_id) values(?,?)`,
      [
        data.bericht,
        data.gebruiker_id
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getBericht: callBack => {
    pool.query(
      `select * from bericht inner join gebruikers on bericht.gebruiker_id=gebruikers.gebruiker_id`,
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getBerichtById: (bericht_id, callBack) => {
    pool.query(
      `select * from bericht inner join gebruikers on bericht.gebruiker_id=gebruikers.gebruiker_id where bericht_id = ?`,
      [bericht_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  updateBericht: (bericht, bericht_id, callBack) => {
    pool.query(
      `update bericht set bericht = ? where bericht_id = ?`,
      [
        bericht,
        bericht_id
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteBericht: (bericht_id, callBack) => {
    pool.query(
      `delete from bericht where bericht_id = ?`,
      [bericht_id],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
