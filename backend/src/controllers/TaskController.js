const connection = require('../database/connection');

module.exports = {
  async indexTask(request, response){
    const task = await connection.select().from('task');
    
    return response.json(task);
  },

  async createTask(request, response){
    const {
      title_task,
      description_task,
      data_task,
      id_profile_fk
    } = request.body;

    const [id_task] = await connection('task')
      .insert({
        title_task,
        description_task,
        data_task,
        id_profile_fk
      });

    return response.json({ id_task, title_task });
  },

  async updateTask(request, response){
    const {
      title_task,
      description_task,
      data_task,
      id_profile_fk
    } = request.body;

    const { id_task } = request.params;

    await connection('task')
      .where('id_task', id_task)
      .update({
        title_task,
        description_task,
        data_task,
        id_profile_fk
      });

    return response.status(204).send();
  },

  async deleteTask(request, response){
    const { id_task } = request.params;

    await connection('task')
      .where('id_task', id_task)
      .delete();

    return response.status(204).send();
  }
}