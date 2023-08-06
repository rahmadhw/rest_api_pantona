const express = require("express");
const mahasiswaController = require("../controllers/mahasiswa.controller.js");
const router = express.Router();

//Get
router.get("/:id", mahasiswaController.getById);
router.get("/", mahasiswaController.get);

//Insert
router.post("/", mahasiswaController.store);

//Update
router.put("/:id", mahasiswaController.update);

//Delete
router.delete("/:id", mahasiswaController.destroy);

module.exports = router;
