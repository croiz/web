async function callStudentWS(url, sentData = {}) {
    let data;
    
      let response = await fetch(url, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(sentData)
      });
      data = await response.json();
     
    return data;
  }
  
  let Fname, Lname, Employee_User, Employee_Passwd;
  let Fname_TxtRef = document.querySelector("#Fname");
  let Lname_TxtRef = document.querySelector("#Lname");
  let Employee_UserTxtRef = document.querySelector("#Employee_User");
  let Employee_PasswdTxtRef = document.querySelector("#Employee_Passwd");
  
  function clearInput() {
    Fname_TxtRef.value = "";
    Lname_TxtRef.value = "";
    Employee_UserTxtRef.value = "";
    Employee_PasswdTxtRef.value = "";
  }
  
  let insertBtnRef = document.querySelector("#insert");

  
  const rootURL = "http://localhost:8080/stuservices/employee";
  
  insertBtnRef.addEventListener("click", () => {
    Fname = Fname_TxtRef.value;
    Lname = Lname_TxtRef.value;
    Employee_User = Employee_UserTxtRef.value;  
    Employee_Passwd = Employee_PasswdTxtRef.value;
    let employee_data = {
        Fname: Fname,
        Lname: Lname,
        Employee_User: Employee_User,
        Employee_Passwd: Employee_Passwd
    };  
    console.log(employee_data);
    callStudentWS(rootURL, employee_data).then((data) => {
      console.log(data);
      if (data.data > 0) {
        alert(data.message);

        // $("#output").html(output);
      
      }
    });
  });