const conn = require('../../server/database/connection');

const Order = require("../../Orders/order.model");

exports.findAll = function(req, res) {
    Order.findAll(function(err, orders) {
      if (err)
        res.send(err);
      console.log(orders);

      res.send(orders);
    });
};

exports.create = function(req, res) {
  console.log(req.body);
    const new_order = new Order(req.body);
        if(Object.keys(req.body).length === 0){
            res.status(400).send({ error:true, message: 'Please provide all required field' });//req.body is empty
        }
        else{
          Order.create(new_order, function(err, order) {
            if (err)
                res.send(err);
                res.render('addOrder', {success: 'Order was added seccessfuly'});
              });
        }
}
            
    

