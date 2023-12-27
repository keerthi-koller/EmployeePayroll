
window.addEventListener("DOMContentLoaded",function(){
    getEmployeeData();

    const addUser = this.document.getElementById("addUser");
    addUser.addEventListener("click", function () {
      location.href = "../pages/emppayrollform.html"
    })

    const searchBtn = this.document.getElementById("searchBtn");
    searchBtn.addEventListener("click", function () {
      let searchId = document.getElementById("searchId").value;
      searchFun(searchId);
    })

})

function editFun (obj) {
   let dataLoc = JSON.parse(localStorage.getItem("EmployeeDetails"));
   let d = dataLoc.filter(x => x._name == obj);

   localStorage.setItem("editEmployeeDetails", JSON.stringify(d[0]));

   location.href = "../pages/emppayrollform.html";

}

function deleteFun (obj) {
   let dataLoc = JSON.parse(localStorage.getItem("EmployeeDetails"));
   let d = parseInt(dataLoc.findIndex(x => x._name === obj))
   let f = dataLoc.splice(d, 1);

   localStorage.setItem("EmployeeDetails", JSON.stringify(dataLoc));

   getEmployeeData();
}

function searchFun(search) {
   let searchEle = JSON.parse(localStorage.getItem("EmployeeDetails"));
   let searchEle1 = searchEle.filter(x => x._name == search);
   
   const tbody = document.getElementById("tbody");

   let template = "";
   for (let ele of searchEle1) {

      let template1 = "";
      for (let ele1 of ele._department) {
         template1 = template1 + `
                           <div>${ele1}</div>
         `
      }
      
      template = template + `
                     <tr>
                        <td>
                           <img src="${ele._profile}" alt="img">
                        </td>
                        <td>${ele._name}</td>
                        <td>${ele._gender}</td>
                        <td>
                           <div class="depttable">
                           ${template1}
                           </div>
                        </td>
                        <td>Rs. ${ele._salary},000</td>
                        <td>${ele._startDate}</td>
                        <td>
                           <div class="actionsdiv">
                                 <i class='bx bxs-trash-alt' id="delete" onclick="deleteFun('${ele._name}')"></i>
                                 <i class='bx bxs-pencil' id="edit" onclick="editFun('${ele._name}')"></i>
                           </div>
                        </td>
                     </tr>
                     `
   }

   tbody.innerHTML = template;

   let searchDiv = document.getElementById("searchdiv");
   searchDiv.style.position = "relative";
   searchDiv.style.zIndex = "3";
   let searchBtn = document.getElementById("searchBtn");
   searchDiv.removeChild(searchBtn);
   let cross = document.createElement("h4");
   cross.style.position = "absolute";
   cross.style.fontSize = "20px"
   cross.style.left = "30px";
   cross.style.zIndex = "21";
   cross.innerText = "x";
   cross.id = "crossId";
   searchDiv.appendChild(cross);
   crossId = document.getElementById("crossId");
   crossId.addEventListener("click", function () {
      getEmployeeData();
      let h4 = document.getElementById("crossId");
      searchDiv.removeChild(h4);
      let searchBtn = document.createElement("i");
      searchBtn.setAttribute("class", "bx bx-search-alt-2");
      searchBtn.id = "searchBtn";
      searchDiv.appendChild(searchBtn);
      searchBtn.style.position = "absolute";
      searchBtn.style.top = "11px";
      searchBtn.style.right = "20px";
      // searchBtn.style.zIndex = "233";
      document.getElementById("searchId").value = "";
   })
}

function getEmployeeData() {
   const data = JSON.parse(localStorage.getItem("EmployeeDetails"));
   const tbody = document.getElementById("tbody");

   let template = "";
   for (let ele of data) {

      let template1 = "";
      for (let ele1 of ele._department) {
         template1 = template1 + `
                           <div>${ele1}</div>
         `
      }
      
      template = template + `
                     <tr>
                        <td>
                           <img src="${ele._profile}" alt="img">
                        </td>
                        <td>${ele._name}</td>
                        <td>${ele._gender}</td>
                        <td>
                           <div class="depttable">
                           ${template1}
                           </div>
                        </td>
                        <td>Rs. ${ele._salary},000</td>
                        <td>${ele._startDate}</td>
                        <td>
                           <div class="actionsdiv">
                                 <i class='bx bxs-trash-alt' id="delete" onclick="deleteFun('${ele._name}')"></i>
                                 <i class='bx bxs-pencil' id="edit" onclick="editFun('${ele._name}')"></i>
                           </div>
                        </td>
                     </tr>
                     `
   }

   tbody.innerHTML = template;
}