const connection = require('../database/connection');

module.exports = {
  async index(request, response){
    const task = await connection('tasks')
      .select(['*']);
    
    return response.json(task);
  },

  async create(request, response){
    const {
      title,
      description,
      data,
    } = request.body;

    const [id] = await connection('tasks')
      .insert({
        title,
        description,
        data,
      });

    return response.json({ id, title });
  },

  async update(request, response){
    const {
      title,
      description,
      data,
    } = request.body;

    const { id } = request.params;

    await connection('tasks')
      .where('id', id)
      .update({
        title,
        description,
        data
      });

    return response.status(204).send();
  },

  async complete(request, response){
    const { complete } = request.body;

    const { id } = request.params;
    
    await connection('tasks')
      .where('id', id)
      .update({ complete });
    
    return response.status(204).send();

  },

  async delete(request, response){
    const { id } = request.params;

    await connection('tasks')
      .where('id', id)
      .delete();

    return response.status(204).send();
  }
}