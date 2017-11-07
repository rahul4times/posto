const knex = require('../db/knex.js');

const bookshelf = require('bookshelf')(knex);

var User = bookshelf.Model.extend({
  tableName: 'users';
  friends: function(){
    return this.hasMany(Friends);
  }
  posts: function(){
    return this.hasMany(Posts);
  }
})

var Posts = bookshelf.Model.extend({
  tableName: 'posts';
  user: function(){
    return this.belongsTo(User);
  }
})

var Friends = bookshelf.Model.extend({
  tableName: 'friends';
  user: function(){
    return this.belongsTo(User);
  }
})


module.exports = {
  userProfile: function(req, res){
    knex('user')
      .where('id', req.session.user)
      .then((user)=>{
        knex('about')
          .where('user_id', req.session.user)
          .then((about)=>{
            knex('friends')
              .where('user_id', req.session.user)
              .then((friends)=>{
                res.render('profile', {user: user[0], aboutUser: about[0],
                  userFriends: friends[0]
                })
              })
          })
      })
  }

  // userProfile: function(req, res){
  //
  //   knex('user')
  //   .where('id', req.session.user)
  //   .rightJoin('about', 'user.id', 'about.user_id')
  //   .then((result)=>{
  //
  //     res.render('profile')
  //   })
  // }
}
