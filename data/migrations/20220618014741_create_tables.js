
exports.up = function(knex) {
  return knex.schema
    .createTable('resources', (table) => {
        table.increments('resource_id');
        table.varchar('resource_name').unique().notNullable();
        table.varchar('resource_description')
    })
    // .createTable('projects', (table) => {
    //     table.increments('project_id');
    //     table.varchar('project_name').notNullable();
    //     table.varchar('project_description');
    //     table.integer('project_completed');
    // })
};


exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('resources')
    // .dropTableIfExists('projects')
};
