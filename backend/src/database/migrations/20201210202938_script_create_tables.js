
exports.up = function(knex) {
  return knex.schema
    .createTable('profile', function(table){  
      table.increments('id_profile').notNullable();
      table.string('name_profile').notNullable();
      table.string('lastname_profile').notNullable();
      table.string('email_profile').notNullable();
      table.string('number_profile').notNullable();
    })

    .createTable('task', function(table){  
      table.increments('id_task');
      table.string('title_task').notNullable();
      table.string('description_task').notNullable();
      table.string('data_task').notNullable();
      table.boolean('complete_task');
      
      table.integer('id_profile_fk').unsigned();

      table
        .foreign('id_profile_fk')
        .references('Profile.id_profile');

    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('profile')
    .dropTable('tasks');
};
