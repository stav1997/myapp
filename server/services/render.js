const axios = require('axios');

exports.homeRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/orders')
    .then(function(response){

        res.render('index', {listOrders:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}

exports.addOrderRoutes = (req, res)=>{
    res.render('addOrder.ejs');
}

exports.getOrdersRoutes = (req, res)=>{
    axios.get('http://localhost:3000/api/orders')
    .then(function(response){

        res.render('getOrders', {listOrders:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
}
   
