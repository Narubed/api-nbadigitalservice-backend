const connection = require("../../config/db.js");
module.exports = postAmphur = (req, res) => {
  if (!req.body.tokenKey || req.body.tokenKey !== process.env.TOKEN_KEY) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    const classifiedsadd = {
      amphur_id: req.body.amphur_id,
      amphur_code: req.body.amphur_code,
      amphur_name: req.body.amphur_name,
      province_id: req.body.province_id,
    };
    const sql = "INSERT INTO nba_amphur SET ?";
    connection.query(sql, classifiedsadd, (err, results) => {
      if (err) throw err;
      res.json({ success: 1 });
    });
  }
};
