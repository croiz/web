/*ฟล์ที่สร้างและกำหนดค่าเบื้องต้นของ Express.js application ที่ทำหน้าที่เป็น web server บน port 8080 และมีการให้บริการ route จากรูทเตอร์ต่าง ๆ ที่ถูกนำเข้ามา */

const express = require("express");
const app = express();
const port = 8080;

const studentServicesRouter = require("./routing/stuservices");
const callYourOwnServiceRouter = require("./routing/ownservices");

app.use("/stuservices", studentServicesRouter);
app.use("/ownservices", callYourOwnServiceRouter);

app.get("/", function (req, res) {
  res.send(
    "Welcome to project web services"
  );
});

// Server running on the port: 3000
app.listen(port, function () {
  console.log(`Server listening at Port ${port}`);
});
