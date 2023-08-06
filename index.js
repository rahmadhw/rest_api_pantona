const express = require("express");
const bodyParser = require("body-parser");
const routerApi = require("./routes/index.js");

const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb" }));

app.use("/api", routerApi);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
