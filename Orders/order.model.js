const conn = require('../server/database/connection');

var Order = function(order){
    this.clientName = order.clientName;
    this.clientPhone = order.clientPhone;
    this.orderDetails = order.orderDetails;
    this.orderNote = order.orderNote;
};

Order.create = function (newOrder, result) {
    conn.db.query("INSERT INTO orders set ?", newOrder, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res.insertId);
        }
    });
};

Order.findAll = function (result) {
    conn.db.query("Select orderId, clientName, clientPhone, orderDetails, orderNote, TIME_FORMAT(orderDate, '%H:%i:%s') as 'orderTime', DATE_FORMAT(SUBDATE(CURRENT_DATE, 1), '%d/%m/%Y') as 'orderDate' FROM orders WHERE  DATE_FORMAT(orderDate, '%Y-%m-%d') = SUBDATE(CURRENT_DATE, 1) ORDER BY orderDate DESC", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = Order;
