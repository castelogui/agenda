
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {
          id_task: null, 
          title_task: 'Bugs',
          description_task: 'Resolver os bugs desse projeto',
          data_task: '2020-12-15',
          complete_task: false,
          id_profile_fk: 1
        },

        {
          id_task: null, 
          title_task: 'Fitchers',
          description_task: 'Implementar novas fitchers nesse projeto',
          data_task: '2020-01-18',
          complete_task: false,
          id_profile_fk: 1
        },

        {
          id_task: null, 
          title_task: 'Readme.md',
          description_task: 'Reescrever o readme desse projeto',
          data_task: '2020-12-20',
          complete_task: false,
          id_profile_fk: 1
        },

        {
          id_task: null, 
          title_task: 'Linkedin',
          description_task: 'Publicar as atualizações desse projeto no meu perfil do Linkedin',
          data_task: '2020-12-30',
          complete_task: false,
          id_profile_fk: 1
        }
        
      ]);
    });
};
