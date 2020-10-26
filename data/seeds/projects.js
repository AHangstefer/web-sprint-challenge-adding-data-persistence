
exports.seed = async function(knex) {
  await knex("projects").insert([
    { name: "Adding Data Persistance", description: "This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored Data Persistence. During this sprint, you studied RDBMS, including SQL, multi-table queries, and data modeling. In your challenge this week, you will demonstrate your mastery of these skills by creating a database based on given specifications.", completed: "false"},
    { name: "Node DB2 Project", description: "In this challenge, you will write an API that can be used to manage Cars stored in a Relational Database.", completed: "false"}
  ])
  
};
