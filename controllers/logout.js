const knex = require('../db/knex.js');
module.exports = {
  getOut: function(req, res){
    delete req.session.user;
    res.redirect('/')
  }
}
