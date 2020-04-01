const connection = require('../database/connection')

module.exports = {
  async store(req, res) {
    const { name, id_recipe } = req.body

    const [id] = await connection('tb_prepareModes').insert({
      name,
      id_recipe,
    })

    return res.send({ id })
  },

  async index(req, res) {
    const { id_recipe } = req.query
    const content = await connection('tb_prepareModes')
      .select('*')
      .where('id_recipe', id_recipe)

    return res.json({ content })
  },

  async delete(req, res) {
    const { id } = req.params

    const prepareMode = await connection('tb_prepareModes')
      .select('*')
      .where('id', id)
      .first()

    if (!prepareMode) {
      return res.status(400).json({ erro: 'Modo de preparo nao encontrado!' })
    }

    await connection('tb_prepareModes')
      .delete()
      .where('id', id)

    res.status(204).send()
  },
}
