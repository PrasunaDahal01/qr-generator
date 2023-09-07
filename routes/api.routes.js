const router = require("express").Router();

const qrRouter = require("../modules/qr/qr.routes.api");
const mailRouter = require("../utilitis/mail.routes.api");

router.use("/qr", qrRouter);
router.use("/mail", mailRouter);

module.exports = router;
