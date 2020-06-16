
exports.up = function(knex) {
  return knex.schema.createTable('tasks', function(table){  
    table.increments('id');
    
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('data').notNullable();
    table.boolean('complete').notNullable().defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tasks');
};
