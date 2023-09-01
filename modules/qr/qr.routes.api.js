//routes for fetching data from controller
const router = require("express").Router();

const QrController = require("../qr/qr.controller");

router.post("/", async (req, res, next) => {
  try {
    const qr = await QrController.create(req.body);
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
