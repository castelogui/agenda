const connection = require('../database/connection');

module.exports = {
   // lista doso os contatos
   async index(request, response){
      const agenda = await connection('contatos')
         .select([
            'contatos.id',
            'contatos.name',
            'contatos.lastname',
            'contatos.email',
            'contatos.number'
         ]);
      
      return response.json(agenda)
   },
   
   // cria um novo contato na agenda
   async create(request, response){
      const {
         name,
         lastname,
         email,
         number,
      } = request.body;

      const [id] = await connection('contatos').insert({
         name,
         lastname,
         email,
         number,
      })

      return response.json({ id, name });
   }
};