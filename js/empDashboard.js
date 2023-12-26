
window.addEventListener("DOMContentLoaded",function(){
    getEmployeeData();

    const addUser = this.document.getElementById("addUser");
    addUser.addEventListener("click", function () {
      location.href = "../pages/emppayrollform.html"
    })

})

function deleteFun (tr1) {
   const tr2 = document.getElementById(`${tr1}`);
   console.log(tr2);
}

function getEmployeeData() {
   const data = JSON.parse(localStorage.getItem("EmployeeDetails"));
   const tbody = document.getElementById("tbody");

   let tr1 = 0;
   let template = "";
   for (let ele of data) {

      let template1 = "";
      for (let ele1 of ele._department) {
         template1 = template1 + `
                           <div>${ele1}</div>
         `
      }
      
      tr1++;
      template = template + `
                     <tr id="${tr1}">
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
                                 <i class='bx bxs-trash-alt' id="delete" onclick="del()"></i>
                                 <i class='bx bxs-pencil' id="edit"></i>
                           </div>
                        </td>
                     </tr>
                     `
   }

   function del () {
      console.log("Deleted");
   }


   tbody.innerHTML = template;
}