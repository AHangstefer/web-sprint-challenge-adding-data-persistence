
exports.seed = async function(knex) {
  await knex("projects_resources").insert([
    {projects_id: 1 , resources_id: 2 , task_id: 1 },
    {projects_id: 1 , resources_id: 3, task_id: 2},
    {projects_id: 1 , resources_id: 1 , task_id: 3},
    {projects_id: 2, resources_id: 4, task_id: 5},
    {projects_id: 2, resources_id: 2 , task_id: 6 }
  ])
};
