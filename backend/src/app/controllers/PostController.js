const Post = require("../models/Post");
const { Op } = require("sequelize");

module.exports = {
  async index(req, res) {
    const posts = await Post.findAll();
    return res.status(200).json(posts);
  },

  async store(req, res) {
    const { title, category, slug } = req.body;
    const post = await Post.create({ title, category, slug });
    return res.status(200).json(post);
  },

  async update(req, res) {
    const { id } = req.params;
    const posts = await Post.findByPk(id);
    return res.status(200).json(posts);
  },

  async delete(req, res) {
    const { id } = req.params;
    await Post.destroy({ where: { id } });
    return res
      .status(200)
      .json({ error: false, msg: "Noticia deletada com sucesso" });
  },

  async search(req, res) {
    const { text } = req.body;
    console.log(text);
    const posts = await Post.findAll({
      where: {
        title: {
          [Op.like]: `%${text}%`,
        },
      },
    });
    return res.status(200).json(posts);
  },
};
