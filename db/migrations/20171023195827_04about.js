
exports.up = function(knex, Promise) {
  return knex.schema.createTable('about', (table)=>{
    table.increments();
    table.string('bio');
    table.string('work');
    table.string('education');
    table.string('livesin');
    table.string('from');
    table.string('relationship');
    table.string('hobby');
    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('user')
    .onDelete('CASCADE')
    .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('about');
};
