import EmployeeDetails from "./EmployeeDetails.js";

window.addEventListener("DOMContentLoaded", function (){

    const cancel = this.document.getElementById("cancelBtn");
    cancel.addEventListener("click", function (){
        window.location.href = "../pages/empdetails.html"
    })

    const reset = this.document.getElementById("resetBtn");
    reset.addEventListener("click", function (){
        resetForm();
    })

    const submitbtn = this.document.getElementById("submit");
    submitbtn.addEventListener("click",function(){
        submitForm();
    })

})

function resetForm (){
    const input = document.getElementById("nameid");
    const note = document.getElementById("noteid");
    input.value = "";
    note.value = "";
}

function submitForm(){
    const names = document.getElementById("nameid").value;
    const profile = document.querySelector('input[name="profile"]:checked').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const departments = [];
    const department = document.getElementsByName("department");
    for(let ele of department)
    {
        if(ele.checked) {
            departments.push(ele.value);
        }
    }
    const salary = document.getElementById("salaryId").value;
    const date = document.getElementById("dateId").value;
    const month = document.getElementById("monthId").value;
    const year = document.getElementById("yearId").value;
    const startDate = `${date}/${month}/${year}`;
    const notes = document.getElementById("noteid").value;
    
    let empDetails = new EmployeeDetails ();
    empDetails.setName = names;
    empDetails.setProfile = profile;
    empDetails.setGender = gender;
    empDetails.setDepartment = departments;
    empDetails.setSalary = salary;
    empDetails.setStartDate = startDate;
    empDetails.setNotes = notes;

    if (localStorage.getItem("EmployeeDetails") == null) {
        localStorage.setItem("EmployeeDetails", "[]");
    }

    let data = JSON.parse(localStorage.getItem("EmployeeDetails"));
    data.push(empDetails);
    localStorage.setItem("EmployeeDetails", JSON.stringify(data));

    console.log(JSON.parse(localStorage.getItem("EmployeeDetails")));

    
    location.href = "../pages/empdetails.html";

}