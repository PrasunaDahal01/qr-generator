const nodemailer = require("nodemailer");
const mailOptions = {
  from: "your-email@gmail.com",
  to: email,
  subject: "QR Code",
  text: "Here is your QR code.",
  attachments: [
    {
      filename: "qr-code.png",
      content: qrCode,
    },
  ],
};
module.exports = mailOptions;
