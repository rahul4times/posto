
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('about').del()
    .then(function () {
      // Inserts seed entries
      return knex('about').insert([
        {
          bio: 'I am a free soul',
          work: 'I work at starbucks',
          education: 'College Graduate',
          livesin: 'Phoenix, AZ',
          from: 'Huston, TX',
          relationship: 'Single',
          hobby: 'Hiking',
          user_id: 1
        }
      ]);
    });
};
