const router = require("express").Router();

const qrRouter = require("../modules/qr/qr.routes.api");

router.use("/qr", qrRouter);

module.exports = router;
