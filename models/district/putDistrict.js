const connection = require("../../config/db.js");
module.exports = putDistrict = (req, res) => {
  if (!req.body.tokenKey || req.body.tokenKey !== process.env.TOKEN_KEY) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    // district_id: req.body.district_id,
    let district_id = req.body.district_id;
    let district_code = req.body.district_code;
    let district_name = req.body.district_name;
    let post_code = req.body.post_code;
    let amphur_id = req.body.amphur_id;
    let province_id = req.body.province_id;
    connection.query(
      "UPDATE nba_district SET district_code = ?, district_name = ?, post_code = ?, amphur_id = ?, province_id = ? WHERE district_id = ?",
      [
        district_code,
        district_name,
        post_code,
        amphur_id,
        province_id,
        district_id,
      ],
      (error, results, fields) => {
        // if (error) throw error;
        let message = "";
        if (results.changedRows === 0) {
          message = "ไม่สามารถเเก้ไขตำบลได้";
        } else {
          message = "District successfully updated";
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
