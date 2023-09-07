const transporter = require("./mail.service");
class Mail {
  async sendMail(body) {
    const qrCode = body.qrCode.replace("data:image/png;base64,", ""),
      MailOptions = {
        from: "your-email@gmail.com",
        to: body.email,
        subject: "QR Code",
        text: "Here is your QR code.",
        attachments: [
          {
            filename: "qr-code.png",
            content: Buffer.from(qrCode, "base64"),
            cid: "Image_ID",
            contentDisposition: "inline",
          },
        ],
      };
    transporter.sendMail(mailOptions);
  }
}

module.exports = new Mail();
