const connection = require("../database/connection");

module.exports = {
  async store(req, res) {
    const { name, image, id_category } = req.body;

    const [id] = await connection("tb_recipes").insert({
      name,
      image,
      id_category
    });
    return res.json({ id });
  },

  async index(req, res) {
    const { id_category } = req.query;

    const recipes = await connection("tb_recipes").where(
      "id_category",
      id_category
    );

    return res.json(recipes);
  }
};
