const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const categories = await connection("tb_categories").select("*");
    return res.json(categories);
  },

  async store(req, res) {
    const { name, image } = req.body;

    const [id] = await connection("tb_categories").insert({
      name,
      image
    });

    return res.json({ id });
  },

  async delete(req, res) {
    const { id } = req.params;

    const category = await connection("tb_categories")
      .select("*")
      .where("id", id)
      .first();

    if(!category){
      return res.status(400).json({erro: 'categoria nao encontrada!'})
    }
    
    await connection("tb_categories")
      .delete()
      .where("id", id);
    return res.status(204).send();
  }
};
