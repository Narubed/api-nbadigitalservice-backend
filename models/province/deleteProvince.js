const connection = require("../../config/db.js");
module.exports = deleteProvince = (req, res) => {
  console.log("deleteProvince", req.params.id);
  console.log(req.body);
  let province_id = req.params.id;
  if (!province_id) {
    return res.status(400).send({
      error: true,
      message: "Please provide deleteProvince id",
    });
  } else if (
    !req.body.tokenKey ||
    req.body.tokenKey !== process.env.TOKEN_KEY
  ) {
    res.send({ message: "tokenKey ไม่ถูกต้อง" });
    console.log("error");
  } else {
    connection.query(
      "DELETE FROM nba_province WHERE province_id = ?",
      [province_id],
      (error, results, fields) => {
        // if (error) throw error;

        let message = "";
        if (results.affectedRows === 0) {
          message = "deleteProvince not found";
        } else {
          message = "deleteProvince successfully deleted";
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
