exports.up = function(knex) {
  return knex.schema.createTable('tb_tips', function(table) {
    table.increments()
    table.string('name').notNullable()
    table.integer('id_recipe').notNullable()

    table
      .foreign('id_recipe')
      .references('id')
      .inTable('tb_recipes')
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('tb_tips')
}
