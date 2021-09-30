const conn = require('../server/database/connection');

var User = function(user){
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.last_connection = user.last_connection;
};

User.create = function (newUser, result) {
    conn.db.query("INSERT INTO users set ?", newUser, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res.insertId);
        }
    });
};


User.findById = function (id, result) {
    conn.db.query("Select * FROM users WHERE id = ? ", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

User.findAll = function (result) {
    conn.db.query("Select * FROM users", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

User.update = function(id, user, result){
    console.log("in update user.model");
    console.log(user);

    conn.db.query("UPDATE users SET id=?,name=?,email=?,last_connection=? WHERE id = ?", [user.id, user.name,user.email,user.last_connection, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log(res);
            result(null, res);
        }
    });
};

User.delete = function(id, result){
    conn.db.query("DELETE FROM users WHERE id = ?", [id], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = User;
