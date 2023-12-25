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
  
  let user,pass;
  let user_TxtRef = document.querySelector("#user");
  let pass_TxtRef = document.querySelector("#pwd");

  
  let loginBtnRef = document.querySelector("#login");

  
  const rootURL = "http://localhost:8080/stuservices/emplogin";
  
  loginBtnRef.addEventListener("click", () => {
    user = user_TxtRef.value;
    pass = pass_TxtRef.value;
    let employee_data = {
       user : user,
       pass : pass
    };  
    console.log(employee_data);
    callStudentWS(rootURL, employee_data).then((data) => {
        console.log("Heey")
      console.log(data);
     
        alert(data.message);
        if (data.message =="Pass"){
            console.log("tae")
            location.replace("http://localhost:3100/hyperlink")
        }

      
      
    });
  });