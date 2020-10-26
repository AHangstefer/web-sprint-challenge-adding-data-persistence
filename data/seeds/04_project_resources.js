
exports.seed = async function(knex) {
  await knex("project_resources").insert([
    {project_id: 1 , resources_id: 2 , task_id: 1 },
    {project_id: 1 , resources_id: 3, task_id: 2},
    {project_id: 1 , resources_id: 1 , task_id: 3},
    {project_id: 2, resources_id: 4, task_id: 5},
    {project_id: 2, resources_id: 2 , task_id: 6 }
  ])
};
