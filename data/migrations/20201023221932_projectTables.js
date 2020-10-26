
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
            .inTable("project")
            .onDelete("SET NULL")
            .onUpdate("CASCADE")

    })

    await knex.schema.createTable("project_resources", (table)=> {
        table
            .integer("project_id")
                .references("id")
                .inTable("project")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                
        
        table   
            .integer("resources_id")
                .references("id")
                .inTable("resource")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .notNull()

        table   
            .integer("task_id")
                .references("id")
                .inTable("task")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")

            table.primary(["resources_id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("project_resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};
