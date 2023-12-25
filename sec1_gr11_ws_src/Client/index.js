const express = require("express");
const app = express();
const port = 3100;

const clientServerRouter = require("../Client/routing/clientserver");

app.use("/", clientServerRouter);

// Server running on the port: 3100
app.listen(port, function () {
  console.log(`Server listening at Port ${port}`);
});
