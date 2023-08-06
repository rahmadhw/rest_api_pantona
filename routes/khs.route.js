const express = require("express");
const khsController = require("../controllers/khs.controller.js");
const router = express.Router();

//Get
// router.get("/:id", mahasiswaController.getById);
router.get("/", khsController.get);

//Insert
// router.post("/", mahasiswaController.store);

//Update
// router.put("/:id", mahasiswaController.update);

//Delete
// router.delete("/:id", mahasiswaController.destroy);

module.exports = router;
