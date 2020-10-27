
exports.up = async function(knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments("id")
        table.text("name").notNull()
        table.text("description")
        table.boolean("completed")
    })

    
    await knex.schema.createTable("resources", (table)=> {
        table.increments("id")
        table.text("name").unique()
        table.text("resource_description")
    })

    await knex.schema.createTable("tasks", (table)=>{
        table.increments("id")
        table.text("task_description").notNull()
        table.text("notes")
        table.boolean("task_complete")
        table.integer("project_id")
            .references("id")
            .inTable("projects")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")

    })

    await knex.schema.createTable("projects_resources", (table)=> {
        table
            .integer("projects_id")
                .references("id")
                .inTable("projects")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                
        
        table   
            .integer("resources_id")
                .references("id")
                .inTable("resources")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .notNull()

        table   
            .integer("tasks_id")
                .references("id")
                .inTable("tasks")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")

            table.primary(["tasks_id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};
