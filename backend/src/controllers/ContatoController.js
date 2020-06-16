const connection = require('../database/connection');

module.exports = {
   // lista um contato da agenda
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
};