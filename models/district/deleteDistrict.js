const connection = require("../../config/db.js");
module.exports = deleteAmphur = (req, res) => {
  console.log("district_id", req.params.id);
  console.log(req.body);
  let district_id = req.params.id;
  if (!district_id) {
    return res.status(400).send({
      error: true,
      message: "Please provide district_id",
    });
  } else if (
    !req.body.tokenKey ||
    req.body.tokenKey !== process.env.TOKEN_KEY
  ) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    connection.query(
      "DELETE FROM nba_district WHERE district_id = ?",
      [district_id],
      (error, results, fields) => {
        // if (error) throw error;

        let message = "";
        if (results.affectedRows === 0) {
          message = "deleteAmphur not found";
        } else {
          message = "this district successfully deleted";
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
