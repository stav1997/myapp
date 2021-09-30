const conn = require('../../server/database/connection');
//db connection
// conn();
const User = require("../../Users/user.model");

exports.findAll = function(req, res) {
    User.findAll(function(err, user) {
      if (err)
        res.send(err);
      res.send(user);
    });
};

exports.create = function(req, res) {
    const new_user = new User(req.body);
        if(Object.keys(req.body).length === 0){
            res.status(400).send({ error:true, message: 'Please provide all required field' });
        }else{
          User.findById(new_user.id, function(err, result){
            if(result.length!=0){
              console.log('ID already exist');
              res.render('addUser', {msg: 'ID already exist'});
            }
            else{
              User.create(new_user, function(err, user) {
                if (err)
                    res.send(err);
                    res.render('addUser', {success: 'User was added seccessfuly'});
                  });
            }
          })
            
    }
};

exports.findById = function(req, res) {
    User.findById(req.query.id, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
};

exports.update = function(req, res) {

    if(Object.keys(req.query).length === 0){
      res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        User.update(req.query.id, new User(req.query), function(err, user) {
            if (err)
                res.send(err);
            res.redirect('/');//redirecting to home
              });
    }
};
exports.delete = function(req, res) {
  User.delete( req.query.id, function(err, user) {
    if (err)
      res.send(err);
    res.redirect('/');//redirecting to home
  });
    
};
