//apps functions
// the controller will contain the code which you are going to send to the user.
//controller functions to get the requested data from the models, create an HTML page displaying the data, and return it to the user to view in the browser.
const path = require("path");
const qrcode = require("qrcode");

class Qr {
  async generateQr(body) {
    //function to generate QR npm package
    const code = await qrcode.toDataURL(body.name);
    return code;
  }
}

module.exports = new Qr();
