
exports.up = function(knex, Promise) {
  return knex.schema.createTable('friends', (table)=>{
    table.increments();
    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('user')
    .onDelete('CASCADE')
    .index();
    table.integer('friend_id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('friends');
};
