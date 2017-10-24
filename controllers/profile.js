const knex = require('../db/knex.js');
module.exports = {
  userProfile: function(req, res){
    knex('user')
      .where('id', req.session.user)
      .then((user)=>{
        knex('about')
          .where('user_id', req.session.user)
          .then((about)=>{
            res.render('profile', {user: user[0], aboutUser: about[0]})
          })
      })
  }
}
