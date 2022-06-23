
exports.up = function(knex) {
  return knex.schema
    .createTable('resources', (table) => {
        table.increments('resource_id');
        table.varchar('resource_name').unique().notNullable();
        table.varchar('resource_description')
    })
    .createTable('projects', (table) => {
        table.increments('project_id');
        table.varchar('project_name').notNullable();
        table.varchar('project_description');
        table.boolean('project_completed').defaultTo(false);
    })
    .createTable('tasks', (table) => {
      table.increments('task_id');
      table.varchar('task_description').notNullable();
      table.varchar('task_notes');
      table.boolean('task_completed').defaultTo(false);
      table.integer('project_id')
        .unsigned()
        .notNullable()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
};


exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
};
