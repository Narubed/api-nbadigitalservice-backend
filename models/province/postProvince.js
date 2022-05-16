const connection = require("../../config/db.js");
module.exports = postProvince = (req, res) => {
  console.log(req.body);
  if (!req.body.tokenKey || req.body.tokenKey !== process.env.TOKEN_KEY) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    const classifiedsadd = {
      //   province_id: req.body.province_id,
      province_name: req.body.province_name,
      geo_id: req.body.geo_id,
      nba_geo_id: req.body.nba_geo_id,
      nba_zone: req.body.nba_zone,
      province_code: req.body.province_code,
    };
    const sql = "INSERT INTO nba_province SET ?";
    connection.query(sql, classifiedsadd, (err, results) => {
      if (err) throw err;
      res.json({ success: 1 });
    });
  }
};
