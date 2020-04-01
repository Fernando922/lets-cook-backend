const connection = require('../database/connection')

module.exports = {
  async store(req, res) {
    const { name, id_recipe } = req.body

    const [id] = await connection('tb_ingredients').insert({
      name,
      id_recipe,
    })

    return res.json({ id })
  },

  async index(req, res) {
    const { id_recipe } = req.query

    const content = await connection('tb_ingredients')
      .select('*')
      .where('id_recipe', id_recipe)

    return res.json({ content })
  },

  async delete(req, res) {
    const { id } = req.params

    const ingredient = await connection('tb_ingredients')
      .select('*')
      .where('id', id)
      .first()

    if (!ingredient) {
      return res.status(400).json({ erro: 'ingrediente nao encontrado!' })
    }

    await connection('tb_ingredients')
      .delete()
      .where('id', id)
    return res.status(204).send()
  },
}
