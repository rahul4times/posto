const knex = require('../db/knex.js');

module.exports = {
  newPost: function(req, res){
    knex('posts')
      .insert({
        content: req.body.content,
        user_id: req.params.id
      }, '*')
      .then((result)=>{
        res.redirect('/');
      })
  }
}
