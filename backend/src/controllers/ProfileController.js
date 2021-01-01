const connection = require('../database/connection');

module.exports = {
   // lista doso os profile
   async indexProfile(request, response){
      const profile = await connection('profile')
         .select([
            'profile.id_profile',
            'profile.name_profile',
            'profile.lastname_profile',
            'profile.email_profile',
            'profile.number_profile'
         ]);
      
      return response.json(profile)
   },
   
   // cria um novo profile
   async createProfile(request, response){
      const {
         name_profile,
         lastname_profile,
         email_profile,
         number_profile,
      } = request.body;

      const [id_profile] = await connection('profile').insert({
         name_profile,
         lastname_profile,
         email_profile,
         number_profile,
      })

      return response.json({ id_profile, name_profile });
   },

   async listOneProfileProfile(request, response){
      const { id_profile } = await request.params;

      const contato = await connection('profile')
         .where('id_profile', id_profile)
         .select([
            'id_profile',
            'name_profile',
            'lastname_profile',
            'email_profile',
            'number_profile'
         ]);

      return response.json({contato});
   },

   // deleta um contato da agenda
   async deleteProfile(request, response){
      const { id_profile } = request.params;

      await connection('profile').where('id_profile', id_profile).delete();

      return response.status(204).send();
   }
};