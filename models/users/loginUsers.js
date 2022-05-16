const dbCon = require("../../config/db.js");
module.exports = loginUsers = (req, res) => {
  console.log(req.body);
  let email = req.body.email;
  let password = req.body.password;

  // validation
  if (!email || !password) {
    return res.status(400).send({
      error: true,
      message: "กรอกข้อมูลมาไม่ครบ.",
    });
  } else {
    dbCon.query(
      "SELECT * FROM users WHERE email = ? and password = ?",
      [email, password],
      (error, results, fields) => {
        // if (error) throw error;
        let message = "";
        let accessToken = "";
        if (results === undefined || results.length == 0) {
          message = "error";
          return res.send({ message: message });
        } else {
          message = "success";
          accessToken = "NBA";
          return res.send({
            error: false,
            data: results[0],
            message: message,
            accessToken: accessToken,
          });
        }
      }
    );
  }
};
