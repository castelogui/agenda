const connection = require('../database/connection');

module.exports = {
   async index(request, response){
      const { id } = await request.params;

      const contato = await connection('contatos')
         .where('id', id)
         .select([
            'id',
            'name',
            'lastname',
            'email',
            'number'
         ]);

      return response.json({contato});
   },

   // async edit(request, response){
   //    const [id] = await require.params;

   //    const contato = await connection('contatos')
   //       .where('id', id)
   //       .select([
   //          'id',
   //          'name',
   //          'lastname',
   //          'email',
   //          'number'
   //       ]);

   //    return response.body.json({contato});
   // },

   async delete(request, response){
      const { id } = request.params;

      await connection('contatos').where('id', id).delete();

      return response.status(204).send();
   }
};