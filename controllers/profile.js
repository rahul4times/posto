const knex = require('../db/knex.js');

const bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'user',
  friends: function(){
    return this.hasMany(Friends);
  },
  posts: function(){
    return this.hasMany(Posts);
  }
})

var Posts = bookshelf.Model.extend({
  tableName: 'posts',
  user: function(){
    return this.belongsTo(User);
  }
})

var Friends = bookshelf.Model.extend({
  tableName: 'friends',
  user: function(){
    return this.belongsTo(User);
  }
})


module.exports = {
  userProfile: function(req, res){
    User.where('id', req.session.user)
    .fetch({withRelated: ['friends']})
    .then(function(user){
        res.render('profile', {user: user, aboutUser: null,
        userFriends: user.related('friends').toJSON() })

        // res.send(user.related('friends').toJSON());

      })
    }
  }
