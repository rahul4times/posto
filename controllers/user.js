const knex = require('../db/knex.js');
module.exports = {
  index: function(req, res){
    // This message comes from registration.js page
    var msg = req.session.msg;

      res.render('index', {successMsg: msg});
    

  },
  login: function(req, res){
    knex('user')
      .where('email', req.body.email)
      .then((result)=>{
        let user = result[0];
        if(user.password === req.body.password){
          req.session.user = user.id;
          res.redirect('/profile');
        }else{
          res.redirect('/');
        }
      })
  }
}
