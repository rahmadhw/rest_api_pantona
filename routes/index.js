const express = require("express");
const router = express.Router();

const mahasiswaRouter = require("./mahasiswa.route.js");
const matakuliahRouter = require("./matakuliah.route.js");
const khs = require("./khs.route.js");

router.use("/mahasiswa", mahasiswaRouter);
// app.use("/mata-kuliah", router);
// app.use("/khs", router);
router.use("/matakuliah", matakuliahRouter);

router.use("/khs", khs);

module.exports = router;
