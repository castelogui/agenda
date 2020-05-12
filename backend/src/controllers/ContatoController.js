const connection = require('../database/connection');
const geraId  = require('../utils/geraId');

module.exports = {
   async index(request, response){
      const [count] = await connection('contatos').count();

      const contatos = await connection('contatos')
         .select([
            'contatos.id',
            'contatos.name',
            'contatos.lastname',
            'contatos.email',
            'contatos.number'
         ]);
      response.header('X-Total-Count', count['count(*)']);

      return response.json({contatos});
   },

   async create(request, response){
      const {
         name,
         lastname,
         email,
         number,
      } = request.body;

      const id = geraId();

      await connection('contatos').insert({
         id,
         name,
         lastname,
         email,
         number,
      })

      return response.json({ id, name });
   },

   async delete(request, response){
      const { id } = request.params;

      await connection('contatos').where('id', id).delete();

      return response.status(204).send();
   }
};