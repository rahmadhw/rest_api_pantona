const express = require("express");
const khsController = require("../controllers/khs.controller.js");
const router = express.Router();

//Get
router.get("/:id", khsController.getById);
router.get("/", khsController.get);

//Insert
router.post("/", khsController.store);

//Update
router.put("/:id", khsController.update);

//Delete
router.delete("/:id", khsController.destroy);

module.exports = router;
