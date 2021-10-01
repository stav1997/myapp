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

let sql1 = 'CREATE TABLE IF NOT EXISTS Orders(orderId int NOT NULL AUTO_INCREMENT, clientName VARCHAR(255) NOT NULL, clientPhone VARCHAR(255) NOT NULL, orderDetails VARCHAR(65535) NOT NULL, orderNote VARCHAR(255), orderDate DATE NOT NULL, PRIMARY KEY(orderId))';
db.query(sql1, err => {
    if(err){
        throw err
    }
    console.log('Orders table created');
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
