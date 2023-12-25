var express = require("express"),
  router = express.Router(),
  path = require("path");

router.use(
  express.urlencoded({
    extended: true,
  })
);

// Add js to Node.js Server
router.get("/js/callclientservices.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/js/callclientservices.js"));
});

router.get("/js/callclientservicesupdate.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/js/callclientservicesupdate.js"));
});

router.get("/js/callclientservicesdelete.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/js/callclientservicesdelete.js"));
});

router.get("/js/callclientservicesselectall.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/js/callclientservicesselectall.js"));
});

router.get("/js/callCustomerlogin.js",function(req,res){
  res.sendFile(path.join(__dirname+"/js/callCustomerlogin.js"))
})

router.get("/js/callservicesproductinsert.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/js/callservicesproductinsert.js"));
});

router.get("/js/callservicesproductupdate.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/js/callservicesproductupdate.js"));
});

router.get("/js/callservicesproductdelete.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/js/callservicesproductdelete.js"));
});

router.get("/js/callservicesproductselectall.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/js/callservicesproductselectall.js"));
});

router.get("/js/callLogin.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/js/callLogin.js"));
});



router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/view/home.html"));
});

router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname+"/view/login.html"));
});

router.get("/admin_login", function (req, res) {
  res.sendFile(path.join(__dirname+"/view/admin_login.html"));
});

router.get("/hyperlink", function (req, res) {
  res.sendFile(path.join(__dirname+"/view/hyperlink.html"));
});


router.get("/admin/insertproduct", function (req, res) {
  res.sendFile(path.join(__dirname+"/view/insertproduct.html"));
});

router.get("/admin/updateproduct", function (req, res) {
  res.sendFile(path.join(__dirname+"/view/updateproduct.html"));
});

router.get("/admin/deleteproduct", function (req, res) {
  res.sendFile(path.join(__dirname+"/view/deleteproduct.html"));
});

router.get("/admin/selectallproduct", function (req, res) {
  res.sendFile(path.join(__dirname+"/view/selectallproduct.html"));
});





router.get("/admin/insertadmin", function (req, res) {
  res.sendFile(path.join(__dirname+"/view/admin.html"));
});

router.get("/admin/updateadmin", function (req, res) {
  res.sendFile(path.join(__dirname+"/view/updateadmin.html"));
});

router.get("/admin/deleteadmin", function (req, res) {
  res.sendFile(path.join(__dirname+"/view/deleteadmin.html"));
});

router.get("/admin/selectalladmin", function (req, res) {
  res.sendFile(path.join(__dirname+"/view/selectalladmin.html"));
});




router.get("/Blank_Search", function (req, res) {
  res.sendFile(path.join(__dirname+"/view/Blank_Search.html"));
});

router.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname+"/view/contact.html"));
});

router.get("/dummy_search", function (req, res) {
  res.sendFile(path.join(__dirname+"/view/dummy_search.html"));
});

// router.get("/admin/insertproduct", function (req, res) {
//   res.sendFile(path.join(__dirname+"/view/insertproduct.html"));
// });


module.exports = router;
