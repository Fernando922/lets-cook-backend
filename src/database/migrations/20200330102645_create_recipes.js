exports.up = function(knex) {
  return knex.schema.createTable('tb_recipes', function(table) {
    table.increments()
    table.string('id_category').notNullable()
    table.string('name').notNullable()
    table.string('image').notNullable()

    table
      .foreign('id_category')
      .references('id')
      .inTable('tb_categories')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('tb_recipes')
}
