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
router.get('/addUser', services.addUserRoutes);
router.get('/updateUser', services.updateUserRoutes);

//API
router.post('/api/users', controller.create);
router.get('/api/update_user', controller.update);
router.get('/api/delete_user', controller.delete);
router.get('/api/users', controller.findAll);
router.get('/api/user', controller.findById);


module.exports = router;
