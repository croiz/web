/*การนำเข้าไลบรารี
express: สำหรับสร้างแอปพลิเคชัน web.
mysql2: ไลบรารี MySQL สำหรับ Node.js.
cors: Middleware ที่ใช้สำหรับจัดการ CORS.
dotenv: ใช้สำหรับโหลดค่าจากไฟล์ .env. */
let express = require("express"),
  mysql = require("mysql2"), // https://www.npmjs.com/package/mysql2
  cors = require("cors"),
  router = express.Router();

  /*การตั้งค่า Middleware:
ตั้งค่า middleware สำหรับ Express เพื่อให้รองรับ JSON และ URL-encoded data. */
router.use(express.json());
router.use(
  express.urlencoded({
    extended: true,
  })
);

const dotenv = require("dotenv");
dotenv.config();

/*ตั้งค่า CORS:
กำหนด whitelist และตัวเลือกของ CORS. */
let whiteList = ["http://localhost:3100", "http://localhost:3200"];

let corsOptions = {
  origin: whiteList,
  methods: "GET,POST,PUT,DELETE",
};

//Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin. A web application executes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, or port) from its own.
router.use(cors(corsOptions));

// router.use(cors());
/*การเชื่อมต่อกับฐานข้อมูล:
ใช้ dotenv เพื่อโหลดค่าจากไฟล์ .env.
สร้าง connection กับฐานข้อมูล MySQL โดยใช้ค่าที่โหลดมาจากไฟล์ .env. */
// create the connection to database
let dbConn = mysql.createConnection({
  host: process.env.host,
  user: process.env.DB_user,
  password: process.env.DB_pass,
  database: process.env.DB_name,
});

  dbConn.connect();
// default route
router.get("/", function (req, res) {
  return res.send({ error: true, message: "hello" });
});

// Retrieve all students
router.get("/employees", function (req, res) {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3200")
  // res.header("Access-Control-Allow-Methods", "GET")
  /*การกำหนด Route และการทำงานกับฐานข้อมูล:
ตรงนี้กำหนด route ต่าง ๆ ที่ให้บริการ API ด้วย Express.
มีการทำงานกับฐานข้อมูล MySQL ในการดึงข้อมูล, เพิ่มข้อมูล, อัปเดตข้อมูล, ลบข้อมูล, และทำการ query สำหรับการ login ของพนักงาน (employee) และลูกค้า (customer). */
  dbConn.query("SELECT * FROM Employee", function (error, results) {
    if (error)
      return res.send({
        error: true,
        message: "List of Students is not found.",
      });
    return res.send({ error: false, data: results, message: "Student list." });
  });
});

// Retrieve student with id
router.get("/employee/:email", function (req, res) {
  let employee_ = req.params.email;

  if (!employee_) {
    return res.send({ error: true, message: "Please provide employee first name." });
  }
/*ในส่วนนี้, โค้ดทำการสร้างคำสั่ง SQL เพื่อดึงข้อมูลพนักงาน (Employee) จากตารางที่มีชื่อ "Employee"  */
  dbConn.query(
    "SELECT * FROM Employee where Employee_user=?",
    employee_,
    function (error, results) {
      if (error || results.length === 0)
        return res.send({
          error: true,
          message: "Employee is not found.",
        });
      return res.send({
        error: false,
        data: results,
        message: "Employee retrieved",
      });
    }
  );
});

// Add a new student
router.post("/employee", function (req, res) {
  let employee = req.body;
  console.log("This is employee post")
  console.log(employee);

  if (!employee) {
    return res.send({
      error: true,
      message: "Please provide employee information",
    });
  }

  /*ในส่วนนี้ โค้ดทำการดึงข้อมูลสินค้า (Product) จากฐานข้อมูล MySQL โดยใช้คำสั่ง SQL SELECT * FROM Product */
  dbConn.query(
    "INSERT INTO employee values(?,?,?,?) ",
    [employee.Fname,employee.Lname,employee.Employee_User,employee.Employee_Passwd],
    function (error, results) {
      if (error)
        return res.send({
          error: true,
          message: "The employee cannot be inserted.",
        });
      return res.send({
        error: false,
        data: results.affectedRows,
        message: "New employee has been created successfully.",
      });
    }
  );
});
//---------------------------------------------------------------------------

router.get("/products", function (req, res) {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3200")
  // res.header("Access-Control-Allow-Methods", "GET")
  dbConn.query("SELECT * FROM Product", function (error, results) {
    if (error)
      return res.send({
        error: true,
        message: "List of Product is not found.",
      });
    return res.send({ error: false, data: results, message: "Product list." });
  });
});


router.post("/emplogin", (req,res) =>{
  let loginBody = req.body;

  if (!loginBody){
    return res,send({
      error:true ,
      message: "body prob",
    })
  }

  dbConn.query("SELECT * from employee where Employee_user=? and Employee_passwd=?",[loginBody.user,loginBody.pass], (error,result)=>{
    if (error) {
      return res,send({
        error:true ,
        message: "select prob",
      })
    }
    else if (result.length >0){
      return res.send({
        error: false,
        message :"Pass",
      })
    }
    else {
      return res.send(
        {
          error: true,
          message : "Username/Password are incorrect!!!",
        }
      )
    }
  })
})

router.post("/cuslogin", (req,res) =>{
  let loginBody = req.body;

  if (!loginBody){
    return res,send({
      error:true ,
      message: "body prob",
    })
  }

  dbConn.query("SELECT * from customer where customer_user=? and customer_passwd=?",[loginBody.user,loginBody.pass], (error,result)=>{
    if (error) {
      return res,send({
        error:true ,
        message: "select prob",
      })
    }
    else if (result.length >0){
      return res.send({
        error: false,
        message :"Pass",
      })
    }
    else {
      return res.send(
        {
          error: true,
          message : "Username/Password are incorrect!!!",
        }
      )
    }
  })
})


router.get("/product/:product_name", function (req, res) {
  // let employee_Fname = req.params.Fname;
  let product_name = req.params.product_name;

  if (!product_name) {
    return res.send({ error: true, message: "Please provide product first name." });
  }

  dbConn.query(
    "SELECT * FROM Product where product_name=?",
    product_name,
    function (error, results) {
      if (error || results.length === 0)
        return res.send({
          error: true,
          message: "Product is not found.",
        });
      return res.send({
        error: false,
        data: results,
        message: "Product retrieved",
      });
    }
  );
});

// Add a new student
router.post("/product", function (req, res) {
  let product = req.body;
  console.log("Hi")
  console.log(product);

  if (!product) {
    return res.send({
      error: true,
      message: "Please provide product information",
    });
  }

  dbConn.query(
    "INSERT INTO product values(?,?,?) ",
    [product.product_name, product.product_price, product.product_weight],
    function (error, results) {
      if (error)
        return res.send({
          error: true,
          message: "The product cannot be inserted.",
        });
      return res.send({
        error: false,
        data: results.affectedRows,
        message: "New product has been created successfully.",
      });
    }
  );
});

// Testing Insert a new Student
// method: post
// URL: http://localhost:3000/student
// body: raw JSON
// {
//    "STU_ID": 99998,
//    "STU_FNAME": "Wudhichart",
//    "STU_LNAME": "Sawangphol",
//    "STU_AGE": 35
// }

//  Update student with id
router.put("/employee", function (req, res) {

  let employee = req.body;

  if (!employee) {
    return res.send({
      error: true,
      message: "The employee information is required.",
    });
  }

  dbConn.query(
    "UPDATE employee SET ? WHERE Employee_User = ?",
    [employee, employee.Employee_User],
    function (error, results) {
      if (error)
        return res.send({
          error: student,
          message: "The employee cannot be updated.",
        });
      return res.send({
        error: false,
        data: results.affectedRows,
        message: "Employee has been updated successfully.",
      });
    }
  );
});

router.put("/product", function (req, res) {

  let product = req.body;

  if (!product) {
    return res.send({
      error: true,
      message: "The product information is required.",
    });
  }

  dbConn.query(
    "UPDATE Product SET ? WHERE product_name = ?",
    [product, product.product_name],
    function (error, results) {
      if (error)
        return res.send({
          error: product,
          message: "The product cannot be updated.",
        });
      return res.send({
        error: false,
        data: results.affectedRows,
        message: "Product has been updated successfully.",
      });
    }
  );
});

// Testing update a student
// method: put
// URL: http://localhost:3000/student
// body: raw JSON
// {
//    "STU_ID": 99998,
//    "STU_FNAME": "Wudhichart",
//    "STU_LNAME": "Sawangphol",
//    "STU_AGE": 40
// }

//  Delete student
router.delete("/employee", function (req, res) {
  let employee = req.body;
  console.log("This is delete")
  console.log(employee)
  if (!employee) {
    return res.send({ error: true, message: "Please provide emplyee email" });
  }
  dbConn.query(
    "DELETE FROM Employee WHERE Employee_User = ?",
    [employee.Employee_User],
    function (error, results) {
      if (error)
        return res.send({
          error: true,
          message: "The student cannot be deleted.",
        });
      return res.send({
        error: false,
        data: results.affectedRows,
        message: "Student has been deleted successfully.",
      });
    }
  );
});

router.delete("/product", function (req, res) {
  let product = req.body;
  console.log("This is delete")
  console.log(product)
  if (!product) {
    return res.send({ error: true, message: "Please provide product name" });
  }
  dbConn.query(
    "DELETE FROM Product WHERE product_name = ?",
    [product.product_name],
    function (error, results) {
      if (error)
        return res.send({
          error: true,
          message: "The product cannot be deleted.",
        });
      return res.send({
        error: false,
        data: results.affectedRows,
        message: "Product has been deleted successfully.",
      });
    }
  );
});
// Testing delete a student
// method: delete
// URL: http://localhost:3000/student
// body: raw JSON
// {
//   "student_id": 99998
// }
/*การส่งออก Module: ส่งออก router เพื่อให้สามารถนำไปใช้ในแอปพลิเคชัน Node.js อื่น ๆ */
module.exports = router;
