const express = require("express");
const router = express.Router();
const services = require('../services/render');

router.get('/index', services.homeRoutes);

router.get('/getOrders', services.getOrdersRoutes);

router.get('/addOrder', services.addOrderRoutes);

module.exports = router;