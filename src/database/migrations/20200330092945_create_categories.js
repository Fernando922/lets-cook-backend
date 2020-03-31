exports.up = function(knex) {
  return knex.schema.createTable('tb_categories', function(table) {
    table.increments()
    table.string('name').notNullable()
    table.string('image').notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('tb_categories')
}

// created with npx knex migrate:make migration_name
// the migration name must be an action (create_something)

// run your migrations
// npx knex migrate:latest
