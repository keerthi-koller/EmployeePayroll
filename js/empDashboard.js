
window.addEventListener("DOMContentLoaded",function(){
    getEmployeeData();
})

function getEmployeeData(){
   const data =  localStorage.getItem("EmployeeDetails")
   console.log(data);
    let obj = JSON.parse(data);
    let list = [obj];
    const detailsId = document.getElementById("details");
    let template = "";
        
   for(let ele of list){
      template = template + `<h1>${ele.name}</h1><br><h2>${ele.note}</h2>`
   }
   detailsId.innerHTML=template

}