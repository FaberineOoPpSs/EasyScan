var express = require('express');
var router = express.Router();
const qrServices = require('../services/service.qrgeneration');

router.get('/test', qrServices.test);
router.post('/genQR', qrServices.generateQR);

module.exports = router;
