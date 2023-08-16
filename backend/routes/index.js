var express = require('express');
var router = express.Router();
const qrServices = require('../services/service.qrgeneration');
const itemsData = require('../services/service.itemdetails');

router.get('/test', qrServices.test);
router.post('/genQR', qrServices.generateQR);
router.post('/itemData', itemsData.fetchDetails);

module.exports = router;
