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
        
        let today = new Date();
        let yesterday = new Date();
        yesterday.setDate(today.getDate()-1)
        var date = yesterday.getDate()  + "-" + (yesterday.getMonth()+1) + "-" + yesterday.getFullYear()

        res.render('getOrders', {listOrders:response.data, yesterday:date});
    })
    .catch(err=>{
        res.send(err);
    })
}
   
