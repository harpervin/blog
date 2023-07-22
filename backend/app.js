const express = require("express");
const routes = require("./routes/index");

const app = express();
const port = 5000;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Express app is running on http://localhost:${port}`);
});
