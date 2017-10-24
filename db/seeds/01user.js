
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {first_name: 'Romeo',
          last_name: 'Jr.',
          email: 'romeo@gmail.com',
          password: 'abc123',
          gender: 'Male',
          dob: '2000-10-01'
      }
      ]);
    });
};
