async function callStudentWS(url, sentData = {}) {
    let data;

      let response = await fetch(url, {
        method: "GET",
        
      });
      data = await response.json();

    return data;
    } 
    
    let email;
    let abc = document.getElementById('output');
    let Employee_UserTxtRef = document.querySelector("#Employee_User");



    let selectallBtnRef = document.querySelector("#selectall");
    let selectBtnRef = document.querySelector("#select");
  
    const rootURL = "http://localhost:8080/stuservices/employee";

selectBtnRef.addEventListener("click", () => {
  abc.innerHTML=""
      email= Employee_UserTxtRef.value;
      callStudentWS(rootURL+`/${email}`).then((data) => {
        console.log(data);
        if (data) {
          alert(data.message);
          let output;
          output = "<h1>Student List</h1>";
          output += "<table class='table'>";
          output += "<thead>";
          output += "<tr>";
          output +=
            "<th scope='col'>Firstname</th><th scope='col'>Lastname</th><th scope='col'>username</th>";
          output += "</tr>";
          output += "</thead>";
          output += "<tbody>";
          data.data.forEach((element) => {
            output += "<tr>";
            output += "<td>" + element.Fname + "</td>";
            output += "<td>" + element.Lname + "</td>";
            output += "<td>" + element.Employee_User + "</td>";
  
            output += "</tr>";
          });
          output += "</tbody>";
          output += "</table>";
          console.log(output)
          let abc = document.getElementById('output')
          abc.innerHTML=`${output}`
        }
      });
    });


selectallBtnRef.addEventListener("click", () => {
  abc.innerHTML=""
    callStudentWS(rootURL+"s").then((data) => {
      console.log(data);
      if (data.data.length > 0) {
        alert(data.message);
        
        output = "<h1>Student List</h1>";
        output += "<table class='table'>";
        output += "<thead>";
        output += "<tr>";
        output +=
          "<th scope='col'>Firstname</th><th scope='col'>Lastname</th><th scope='col'>username</th>";
        output += "</tr>";
        output += "</thead>";
        output += "<tbody>";
        data.data.forEach((element) => {
          output += "<tr>";
          output += "<td>" + element.Fname + "</td>";
          output += "<td>" + element.Lname + "</td>";
          output += "<td>" + element.Employee_User + "</td>";

          output += "</tr>";
        });
        output += "</tbody>";
        output += "</table>";
        console.log(output)
     
        abc.innerHTML=`${output}`
        
      }
    });
  });