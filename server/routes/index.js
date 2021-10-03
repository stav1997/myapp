const express = require ('express');
const router = express.Router();
const app = express();
const controller = require('../../server/controller/controller')
app.set("view engine", "ejs");
app.use('/assets', express.static("assets"));
app.use('/addUser', express.static("views"));
const services = require('../../server/services/render')

app.use(express.urlencoded({extended:true}));
app.use(express.json());

router.get('/', services.homeRoutes);
router.get('/addOrder', services.addOrderRoutes);
router.get('/getOrders', services.getOrdersRoutes);

//API
router.post('/api/addOrder', controller.create);
router.get('/api/orders', controller.findAll);

module.exports = router;
