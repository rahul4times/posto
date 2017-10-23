
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', (table)=>{
    table.increments();
    table.string('content');
    table.integer('post_id')
    .notNullable()
    .references('id')
    .inTable('posts')
    .onDelete('CASCADE')
    .index();
    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('user')
    .onDelete('CASCADE')
    .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
