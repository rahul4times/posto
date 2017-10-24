
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('friends').del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {
          user_id: 1,
          friend_id: 2
        }
      ]);
    });
};
