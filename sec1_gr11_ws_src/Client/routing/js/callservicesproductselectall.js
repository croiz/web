async function callStudentWS(url, sentData = {}) {
    let data;

      let response = await fetch(url, {
        method: "GET",
        
      });
      data = await response.json();

    return data;
    } 
    
    let product_name
    let abc = document.getElementById('output');
    let productname_xtRef = document.querySelector("#product_name");

    let selectallBtnRef = document.querySelector("#selectall");
    let selectBtnRef = document.querySelector("#select");
  
    const rootURL = "http://localhost:8080/stuservices/product";

    selectBtnRef.addEventListener("click", () => {
      abc.innerHTML=""
          product_name= productname_xtRef.value;
          callStudentWS(rootURL+`/${product_name}`).then((data) => {
            console.log(data);
            if (data) {
              alert(data.message);
              let output;
              output = "<h1>Product List</h1>";
              output += "<table class='table'>";
              output += "<thead>";
              output += "<tr>";
              output +=
              "<th scope='col'>name</th><th scope='col'>price</th><th scope='col'>weight</th>";
              output += "</tr>";
              output += "</thead>";
              output += "<tbody>";
              data.data.forEach((element) => {
                output += "<tr>";
                output += "<td>" + element.product_name + "</td>";
                output += "<td>" + element.product_price + "</td>";
                output += "<td>" + element.product_weight + "</td>";
      
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
    callStudentWS(rootURL+"s").then((data) => {
      console.log(data);
      if (data.data.length > 0) {
        alert(data.message);
        let output;
        output = "<h1>Product List</h1>";
        output += "<table class='table'>";
        output += "<thead>";
        output += "<tr>";
        output +=
          "<th scope='col'>name</th><th scope='col'>price</th><th scope='col'>weight</th>";
        output += "</tr>";
        output += "</thead>";
        output += "<tbody>";
        data.data.forEach((element) => {
          output += "<tr>";
          output += "<td>" + element.product_name + "</td>";
          output += "<td>" + element.product_price + "</td>";
          output += "<td>" + element.product_weight+ "</td>";

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