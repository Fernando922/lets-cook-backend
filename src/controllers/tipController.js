const connection = require('../database/connection')

module.exports = {
  async store(req, res) {
    const { name, id_recipe } = req.body

    const [id] = await connection('tb_tips').insert({
      name,
      id_recipe,
    })

    return res.json({ id })
  },

  async index(req, res) {
    const { id_recipe } = req.query

    const tips = await connection('tb_tips')
      .select('*')
      .where('id_recipe', id_recipe)

    return res.json({ tips })
  },

  async delete(req, res) {
    const { id } = req.params

    const tip = await connection('tb_tips')
      .select('*')
      .where('id', id)
      .first()

    if (!tip) {
      return res.status(400).json({ erro: 'Dica não encontrada!' })
    }

    await connection('tb_tips')
      .delete()
      .where('id', id)

    res.status(204).send()
  },
}
