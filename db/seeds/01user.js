
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          first_name: 'Romeo',
          last_name: 'Jr.',
          email: 'romeo@gmail.com',
          password: 'abc123',
          gender: 'Male',
          dob: '2000-10-01'
        },
        {
          first_name: 'Anna',
          last_name: 'Kendrick',
          email: 'anna@gmail.com',
          password: 'abc123',
          gender: 'Female',
          dob: '2002-07-12'
        }
      ]);
    });
};
