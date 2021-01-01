
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profile').del()
    .then(function () {
      // Inserts seed entries
      return knex('profile').insert([
        {
          id_profile: null, 
          name_profile: 'Guilherme',
          lastname_profile: 'Castelo',
          email_profile: 'guilherme@gmail.com',
          number_profile: '(69) 87564-5632'
        },
        {
          id_profile: null, 
          name_profile: 'Bruno',
          lastname_profile: 'Bratilieri',
          email_profile: 'Bruno@gmail.com',
          number_profile: '(69) 47764-5543'
        },
        {
          id_profile: null, 
          name_profile: 'Amanda',
          lastname_profile: 'Milan',
          email_profile: 'Amanda@gmail.com',
          number_profile: '(69) 65423-5875'
        },
        {
          id_profile: null, 
          name_profile: 'Pedro',
          lastname_profile: 'Lima',
          email_profile: 'Pedro@gmail.com',
          number_profile: '(23) 47763-3284'
        },
        {
          id_profile: null, 
          name_profile: 'Murilo',
          lastname_profile: 'Silva',
          email_profile: 'Murilo@gmail.com',
          number_profile: '(39) 92746-7236'
        },
      ]);
    });
};
