const router = require("express").Router();

const qrRouting = require("../modules/qr/qr.routes.ui");

router.use("/qr", qrRouting);

module.exports = router;
