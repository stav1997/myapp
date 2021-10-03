const mysql = require ('mysql');

const db1 = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    timezone: 'utc'
});

let sql = 'CREATE DATABASE IF NOT EXISTS Yammie';
db1.query(sql, err => {
    if(err){
        throw err
    }
    console.log('Yammie database created');
});

db1.end();

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'Yammie',
    timezone: 'utc'
});

let sql1 = 'CREATE TABLE IF NOT EXISTS Orders(orderId int NOT NULL AUTO_INCREMENT, clientName VARCHAR(255) NOT NULL, clientPhone VARCHAR(255) NOT NULL, orderDetails VARCHAR(65535) NOT NULL, orderNote VARCHAR(255), orderDate datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(), PRIMARY KEY(orderId))';
db.query(sql1, err => {
    if(err){
        throw err
    }
    console.log('Orders table created');
});



let sql2 = "INSERT INTO `orders` (`orderId`, `clientName`, `clientPhone`, `orderDetails`, `orderNote`, `orderDate`) VALUES (1, 'Stav Shlomovich', '052-819-0522', '1 chicken', 'big chick', '2021-09-30 09:00:00'), (2, 'Nadav Bar', '273-746-8900', '1 milk', '1%', '2021-09-29 05:05:00'), (3, 'Sadar Ron', '052-829-0633', '1 big apple', 'red apple', '2021-10-01 11:36:00'), (4, 'steve Can', '123-123-1234', '1 cow\r\n2 milk', '2% milk', '2021-09-30 12:37:05'), (5, 'Hadar Shlomo', '052-815-8965', '1 big cow\r\n3 water\r\n2 milk\r\n1 sushi\r\n1 taco\r\n1 big cow\r\n3 water\r\n2 milk\r\n1 sushi\r\n1 taco\r\n', 'salmon sushi', '2021-10-02 16:55:26'), (6, 'Shay Krai', '123-345-5647', '1 milk\r\n2 cows', 'big cow', '2021-10-02 17:15:27')";


db.query(sql2, err => {
    if(err){
        throw err
    }
    console.log('Data insertes');
});


const conn = async()=>{
    try {
        await db.connect(err =>{
            if(err){
                throw err
            }
            console.log('MySQL connected');
        });
    } catch (error){
        
    }
}

module.exports = conn;
module.exports.db = db;
