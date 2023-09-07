const router = require("express").Router();
const MailController = require("./mail.controller");

router.post("/", async (req, res, next) => {
  try {
    const email = await MailController.req.body;
    const info = await MailController.sendMail(email);
    // const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);

    res.status(200).send("QR code sent successfully.");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error sending QR code.");
  }
});

router.get("/", async (req, res, next) => {
  try {
    res.send("Hello");
  } catch (error) {
    next(error);
  }
});
module.exports = router;
