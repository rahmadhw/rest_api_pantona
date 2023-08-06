const { sequelize } = require("../models/index.js");

const get = async (req, res) => {
    try {
      const param = req.query;
  
      let limit = parseInt(param?.limit) || 5;
      let offset = parseInt(param?.offset) || 0;
  
      let query = "SELECT * FROM matakuliah";
  
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
        message: "GET DATA MATAKULIAH",
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

  const getById = async (req, res) => {
    try {
      const id = req.params?.id;
      let query = "SELECT * FROM matakuliah WHERE id_matakuliah = " + id;
      const [data] = await sequelize.query(query);
  
      if (data.length > 0) {
        res.status(200).json({
          status: true,
          message: "GET DATA MATAKULIAH",
          data: data,
        });
      } else {
        res.status(404).json({
          status: false,
          message: "DATA MATAKULIAH " + id + " TIDAK DI TEMUKAN",
        });
      }
    } catch (err) {
      res.status(500).json({
        status: false,
        message: err.message,
      });
    }
  };



  const store = async (req, res) => {
    try {
      const param = req.body;
  
      let query = `INSERT INTO matakuliah (
        nama_matakuliah, sks
      ) 
      VALUES (
        $nama_matakuliah, $sks
      )`;
  
      const [result_id] = await sequelize.query(query, {
        bind: param,
      });
  
      res.status(200).json({
        status: true,
        message: "SUCCESS TAMBAH DATA MATAKULIAH",
        data: { id: result_id, ...param },
      });
    } catch (err) {
      let validationError = JSON.parse(JSON.stringify(err))?.original;
  
      res.status(500).json({
        status: false,
        message: validationError?.sqlMessage || err.message,
        data: [],
      });
    }
  };


  const update = async (req, res) => {
    try {
      const param = req.body;
      const id = req.params.id;
  
      let set_update = [];
  
      for (let item in param) {
        set_update.push(`${item} = $${item}`);
      }
  
  
      if (set_update.length) {
        let query = `UPDATE matakuliah SET ${set_update} WHERE id_matakuliah = $id`;
  
        const [result_id] = await sequelize.query(query, {
          bind: { id: id, ...param },
        });
  
        res.status(200).json({
          status: true,
          message: "SUCCESS UBAH DATA MATAKULIAH",
          data: { id: id, ...param },
        });
      } else {
        res.status(500).json({
          status: false,
          message: "TIDAK ADA UPDATE DATA",
        });
      }
    } catch (err) {
      let validationError = JSON.parse(JSON.stringify(err))?.original;
  
      res.status(500).json({
        status: false,
        message: validationError?.sqlMessage || err.message,
        data: [],
      });
    }
  };


  const destroy = async (req, res) => {
    try {
      const id = req.params.id;
      let query = `DELETE FROM matakuliah WHERE id_matakuliah = $id`;
  
      const [result] = await sequelize.query(query, {
        bind: { id: id },
      });
  
      if (result?.affectedRows > 0) {
        res.status(200).json({
          status: true,
          message: "SUCCESS DELETE DATA MATAKULIAH",
          data: { id: id },
        });
      } else {
        res.status(404).json({
          status: false,
          message: "DATA MATAKULIAH " + id + " TIDAK DI TEMUKAN",
        });
      }
    } catch (err) {
      let validationError = JSON.parse(JSON.stringify(err))?.original;
  
      res.status(500).json({
        status: false,
        message: validationError?.sqlMessage || err.message,
        data: [],
      });
    }
  };
  

  module.exports = {
    get,
    getById,
    store,
    update,
    destroy
  };