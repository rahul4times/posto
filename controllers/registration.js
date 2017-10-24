const knex = require('../db/knex.js');

module.exports = {
  createUser: function(req, res){
    knex('user')
      .insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        dob: req.body.dob
      }, '*')
      .then((result)=>{
        // This message will go on index page using user.js
        req.session.msg = "Congratulations, you have successfully registered."
        res.redirect('/');
      })
      .catch(()=>{
        // This message will go on index page using user.js
        req.session.msg = "Error: Email you entered already exist. Try different one."
        res.redirect('/');
      })
  }
}
