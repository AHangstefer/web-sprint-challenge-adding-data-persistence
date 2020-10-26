
exports.seed = async function(knex) {
  await knex("resources").insert([
    {name: "TL", resource_description: "ask your TL for help after googling and seeking help from peers"},
    {name: "SL", resource_description: "seek in desperation"},
    {name: "google", resource_description: "ran into small issue that I think I can solve"},
    {name: "Peers", resource_description: "post problem in slack help channel to see if your friends can save you"},
  ])
};
