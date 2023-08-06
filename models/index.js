const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nilai_mahasiswa", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  sequelize,
};
