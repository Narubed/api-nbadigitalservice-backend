const connection = require("../../config/db.js");
module.exports = putProvince = (req, res) => {
  if (!req.body.tokenKey || req.body.tokenKey !== process.env.TOKEN_KEY) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    let province_id = req.body.province_id;
    let province_name = req.body.province_name;
    let geo_id = req.body.geo_id;
    let nba_geo_id = req.body.nba_geo_id;
    let nba_zone = req.body.nba_zone;
    let province_code = req.body.province_code;
    connection.query(
      "UPDATE nba_province SET province_name = ?, geo_id = ?, nba_geo_id = ?, nba_zone = ?, province_code = ? WHERE province_id = ?",
      [province_name, geo_id, nba_geo_id, nba_zone, province_code, province_id],
      (error, results, fields) => {
        // if (error) throw error;
        let message = "";
        if (results.changedRows === 0) {
          message = "ไม่สามารถเเก้ไขจังหวัดได้";
        } else {
          message = "Province successfully updated";
        }

        return res.send({
          error: false,
          data: results,
          message: message,
        });
      }
    );
  }
};
