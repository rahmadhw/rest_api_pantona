const { sequelize } = require("../models/index.js");

const get = async (req, res) => {
    try {
      const param = req.query;
  
      let limit = parseInt(param?.limit) || 5;
      let offset = parseInt(param?.offset) || 0;
  
      let query = "SELECT * FROM khs INNER JOIN mahasiswa ON khs.id = mahasiswa.id JOIN matakuliah ON khs.id_matakuliah =matakuliah.id_matakuliah";
  
      if (limit > 0) {
        query += " LIMIT " + limit;
      }
  
      if (offset >= 0) {
        query += " OFFSET " + offset;
      }
  
      const [rows] = await sequelize.query(query);
  
      const data = {
        total_row: 0,
        limit: limit,
        offset: offset,
        rows: rows,
      };
  
      res.status(200).json({
        status: true,
        message: "GET DATA MAHASISWA",
        data: data,
      });
    } catch (err) {
      res.status(500).json({
        status: false,
        message: err.message,
        data: [],
      });
    }
  };

  module.exports = {
    get
  };