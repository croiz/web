async function callStudentWS(url, sentData = {}) {
    let data;

      let response = await fetch(url, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sentData),
      });
      data = await response.json();
      console.log(`fetch data ${data}`)

    return data;
  }
  
  let Employee_User

  let Employee_UserTxtRef = document.querySelector("#Employee_User");
  
  
  function clearInput() {
    STU_IDTxtRef.value = "";
    STU_FNAMETxtRef.value = "";
    STU_LNAMETxtRef.value = "";
    STU_AGETxtRef.value = "";
  }
  
  let deleteBtnRef = document.querySelector("#delete");

  
  const rootURL = "http://localhost:8080/stuservices/employee";
  

  deleteBtnRef.addEventListener("click", () => {
    Employee_User = Employee_UserTxtRef.value;

    // console.log("It is what it is "+Employee_Usereiei)
    let employee_data = {
        Employee_User: Employee_User,
    };  
  
    callStudentWS(rootURL, employee_data).then((data) => {
      console.log(data);
      if (data.data > 0) {
        alert(data.message);
        
        
        
      }
    });
  });
  