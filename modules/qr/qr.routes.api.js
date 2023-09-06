//routes for fetching data from controller
const router = require("express").Router();
const QrController = require("../qr/qr.controller");

router.post("/", async (req, res, next) => {
  try {
    console.log("req.body", req.body);
    res.send("Hello World");

    const qr = await QrController.generateQr(req.body);
    res.json(qr);
  } catch (error) {
    next(error);
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
