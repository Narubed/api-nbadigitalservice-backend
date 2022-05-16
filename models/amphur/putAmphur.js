const connection = require("../../config/db.js");
module.exports = putAmphur = (req, res) => {
  if (!req.body.tokenKey || req.body.tokenKey !== process.env.TOKEN_KEY) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    let amphur_id = req.body.amphur_id;
    let amphur_code = req.body.amphur_code;
    let amphur_name = req.body.amphur_name;
    let province_id = req.body.province_id;
    connection.query(
      "UPDATE nba_amphur SET amphur_code = ?, amphur_name = ?, province_id = ? WHERE amphur_id = ?",
      [amphur_code, amphur_name, province_id, amphur_id],
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
