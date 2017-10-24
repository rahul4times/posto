const knex = require('../db/knex.js');
module.exports = {
  userProfile: function(req, res){
    knex('user')
      .where('id', req.session.user)
      .then((result)=>{
        console.log(result[0]);
        res.render('profile', {user: result[0]})
      })
  }
}
