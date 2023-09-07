const nodemailer = require("nodemailer");
class Mail {
  async sendMail(body) {
    const mailOptions = {
      from: "your-email@gmail.com",
      to: email,
      subject: "QR Code",
      text: "Here is your QR code.",
      attachments: [
        {
          filename: "qr-code.png",
          content: body.qrCode,
        },
      ],
    };
  }
}

module.exports = new Mail();
