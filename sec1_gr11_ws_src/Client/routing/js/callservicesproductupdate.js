async function callStudentWS(url, sentData = {}) {
    let data;

      let response = await fetch(url, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(sentData)
      });
      data = await response.json();

    return data;
    } 
      
    let product_name, product_price, product_weight;
    let product_nameTxtRef = document.querySelector("#product_name");
    let product_priceTxtRef = document.querySelector("#product_price");
    let product_weightTxtRef = document.querySelector("#product_weight");
  
    function clearInput() {
        product_nameTxtRef.value = "";
        product_priceTxtRef.value = "";
        product_weightTxtRef.value = "";
    }
  
  let updateBtnRef = document.querySelector("#update");
  
  const rootURL = "http://localhost:8080/stuservices/product";
  
  
  updateBtnRef.addEventListener("click", () => {
    product_name = product_nameTxtRef.value;
    product_price = product_priceTxtRef.value;
    product_weight = product_weightTxtRef.value;

    let product_data = {
        product_name: product_name,
        product_price: product_price,
        product_weight: product_weight,
    };  

    callStudentWS(rootURL, product_data).then((data) => {
      console.log(data);
      if (data.data > 0) {
        alert(data.message);


        // clearInput();

      }
    });
  });