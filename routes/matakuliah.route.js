const express = require("express");
const matakuliahController = require("../controllers/matakuliah.controller.js");
const router = express.Router();

//Get
router.get("/:id", matakuliahController.getById);
router.get("/", matakuliahController.get);

//Insert
router.post("/", matakuliahController.store);

//Update
router.put("/:id", matakuliahController.update);

//Delete
router.delete("/:id", matakuliahController.destroy);

module.exports = router;
