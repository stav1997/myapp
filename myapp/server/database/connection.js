const mysql = require ('mysql');

const db1 = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    timezone: 'utc'
});

let sql = 'CREATE DATABASE IF NOT EXISTS Users';
db1.query(sql, err => {
    if(err){
        throw err
    }
    console.log('Database created');
});

db1.end();

const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'Users',
    timezone: 'utc'
});

let sql1 = 'CREATE TABLE IF NOT EXISTS users(id int NOT NULL, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, last_connection DATE NOT NULL, PRIMARY KEY(id))';
db.query(sql1, err => {
    if(err){
        throw err
    }
    console.log('users table created');
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
