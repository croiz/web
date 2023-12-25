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
  
  let product_name;

  let product_nameTxtRef = document.querySelector("#product_name");
  
  
  function clearInput() {
    STU_IDTxtRef.value = "";
    STU_FNAMETxtRef.value = "";
    STU_LNAMETxtRef.value = "";
    STU_AGETxtRef.value = "";
  }
  
  let deleteBtnRef = document.querySelector("#delete");

  
  const rootURL = "http://localhost:8080/stuservices/product";
  

  deleteBtnRef.addEventListener("click", () => {
    product_name = product_nameTxtRef.value;

    // console.log("It is what it is "+Employee_Usereiei)
    let product_data = {
        product_name: product_name,
    };  
  
    callStudentWS(rootURL, product_data).then((data) => {
      console.log(data);
      if (data.data > 0) {
        alert(data.message);
        
        
        
      }
    });
  });
  