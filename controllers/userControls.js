const User = require('../models/user');

exports.getUser = (req, res, next) => {
    User.findAll()
    .then((user) => {
        res.json(user);
    })
    .catch(err => console.log(err));
}

exports.addUser = (req, res, next) => {
    const userName = req.body.userName;
    const email = req.body.email;

    User.create({
        userName: userName,
        email: email
    })
    .then(result => {
        console.log(result);
        res.redirect('/');
    })
    .catch(err => console.log(err));
};

exports.deleteUser = (req, res, next) => {
    const userId = req.body.userId;
    console.log(userId);
    User.findByPk(userId)
    .then(user => {
        return user.destroy();
    })
    .then(result => {
        console.log('DELETED PRODUCT');
        res.redirect('/');
      })
    .catch(err => { console.log(err) });
}