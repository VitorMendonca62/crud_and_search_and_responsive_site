const { Model, DataTypes } = require("sequelize");

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        category: DataTypes.STRING,
        slug: DataTypes.STRING,
      },
      { sequelize }
    );
  }
}

module.exports = Post;
