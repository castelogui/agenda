
exports.up = function(knex) {
   return knex.schema.createTable('contatos', function(table){  
      table.increments('id');
      
      table.string('name').notNullable();
      table.string('lastname').notNullable();
      table.string('email').notNullable();
      table.string('number').notNullable();
  });
};

exports.down = function(knex) {
   return knex.schema.dropTable('contatos');
};
