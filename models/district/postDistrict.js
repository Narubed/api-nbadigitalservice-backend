const connection = require("../../config/db.js");
module.exports = postDistrict = (req, res) => {
  if (!req.body.tokenKey || req.body.tokenKey !== process.env.TOKEN_KEY) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    const classifiedsadd = {
      // district_id: req.body.district_id,
      district_code: req.body.district_code,
      district_name: req.body.district_name,
      post_code: req.body.post_code,
      amphur_id: req.body.amphur_id,
      province_id: req.body.province_id,
    };
    const sql = "INSERT INTO nba_district SET ?";
    connection.query(sql, classifiedsadd, (err, results) => {
      if (err) throw err;
      res.json({ success: 1 });
    });
  }
};
