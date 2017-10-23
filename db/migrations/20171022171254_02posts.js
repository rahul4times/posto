exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', (table)=>{
    table.increments();
    table.string('content');
    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('user')
    .onDelete('CASCADE')
    .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
