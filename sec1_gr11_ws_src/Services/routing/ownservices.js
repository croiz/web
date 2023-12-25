const axios = require("axios").default;
const express = require("express");
const router = express.Router();

/*ในส่วนของโค้ดบรรทัดนี้จะเป็นการ กำหนด URL:ตัวแปร searchURL ได้รับค่า 
"http://localhost:8080/stuservices/employee" ซึ่งเป็น URL ที่จะทำการ HTTP GET request ไป */
let searchURL = "http://localhost:8080/stuservices/employee";

/*getStudents เป็นฟังก์ชันที่ใช้งานแบบ asynchronous ซึ่งใช้ Axios เพื่อทำ HTTP GET request 
ไปยัง URL ที่ระบุ (searchURL) มันล็อกจำนวนผลลัพธ์และข้อมูลการตอบสนองไปยัง console และคืนข้อมูลการตอบสนอง */
let getStudents = async () => {
  try {
    let response = await axios.get(searchURL, { responseType: "json" });
    console.log(`Use Async/Await`);
    console.log(`The number of results: ${response.data.data.length}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: true };
  }
};

/*กำหนด Express route สำหรับเส้นทางหลัก ("/"). เมื่อมีการทำ GET request 
ไปยังเส้นทางนี้, จะตอบกลับด้วยผลลัพธ์จากฟังก์ชัน getStudents */
router.get("/", async (req, res) => {
  res.json(await getStudents());
});

/*การส่งออก Router:  Router ถูกส่งออกเพื่อให้สามารถนำไปใช้ในส่วนอื่นของแอปพลิเคชัน*/
module.exports = router;
