const express = require("express");
const router = express.Router();
const services = require('../services/render');

router.get('/index', services.homeRoutes);

router.get('/addUser', services.addUserRoutes);

router.get('/updateUser', services.updateUserRoutes);

module.exports = router;