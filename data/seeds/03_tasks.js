
exports.seed = async function(knex) {
    await knex("tasks").insert([
      {task_description:"Design the data model and use knex migrations to create the database and tables needed to satisfy the following business rules", notes: "", task_complete: "false", project_id: 1},
      {task_description:"Build an API with endpoints for", notes: "", task_complete: "false", project_id: 1},
      {task_description:"a project can have multiple tasks. a task belongs to only one project. a project can use multiple resources. Example of resources are: computer, conference room, microphone, delivery van.", notes: "", task_complete: "false", project_id: 1},
      {task_description:"the same resource can be used in multiple projects. when adding projects the client must provide a name, the description is optional.", notes: "", task_complete: "false", project_id: 1},
      {task_description:"Using knex migrations, design and write a schema for the cars table using the specifications below.", notes: "", task_complete: "false", project_id: 2},
      {task_description:"Configure knex to connect to a /data/car-dealer.db3 database using the sqlite3 npm module.", notes: "", task_complete: "false", project_id: 2}
    
    ])
};
