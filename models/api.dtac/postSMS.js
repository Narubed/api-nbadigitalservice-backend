const axios = require("axios");

module.exports = postProvince = async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.send({ message: "ไม่มี Body ไม่ถูกต้อง" });
    console.log("error");
  } else {
    // const data = await axios.get('https://happy-point.nbadigitalservice.com/api/happy-point/members')
    const data = {
      RefNo: "1",
      sender: "NBAService",
      Msn: "0830936511",
      Sno: "00",
      User: "api1615025",
      Password: "0073plutq",
      Msg: "Test .",
      MsgType: "E",
      postData: "",
    };
    console.log(data);
    // const sendData = await axios.post(
    //   "https://apismsplus.dtac.co.th/servlet/com.iess.socket.SmsCorplink",
    //   data
    // );
    // res.send(sendData);
  }
};
