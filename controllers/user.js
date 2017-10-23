const knex = require('../db/knex.js');

module.exports = {
  login: function(req, res){
    res.render('index');
  },
  check: function(req, res){
    knex('user')
      .where('email', req.body.email)
      .then((result)=>{
        console.log(result);
        let user = result[0];
        if(user.password === req.body.password){
          req.session.user = user.id;
          res.render('profile');
        }else{
          res.redirect('/')
        }
      })
  }
}
