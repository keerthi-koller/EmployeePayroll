import EmployeeDetails from "./EmployeeDetails.js";

window.addEventListener("DOMContentLoaded", function () {

    const cancel = this.document.getElementById("cancelBtn");
    cancel.addEventListener("click", function () {
        window.location.href = "../pages/empdetails.html"
    })

    const reset = this.document.getElementById("resetBtn");
    reset.addEventListener("click", function () {
        resetForm();
    })

    const submitbtn = this.document.getElementById("submit");
    submitbtn.addEventListener("click",function() {
        submitForm();
    })


    if (this.localStorage.getItem("editEmployeeDetails") != null) {

        let edited = JSON.parse(this.localStorage.getItem("editEmployeeDetails"));

        document.getElementById("nameid").value = edited._name;
        
        let profile1 = this.document.getElementsByName("profile");
        for (let ele of profile1) {
            if (ele.value == edited._profile) {
                ele.checked = true;
            }
        }

        let gender1 = document.getElementsByName("gender")
        for (let ele of gender1) {
            if (ele.value == edited._gender) {
                ele.checked = true;
            }
        }

        let department1 = this.document.getElementsByName("department");
        for (let ele of department1) {
            for (let ele1 of edited._department) {
                if (ele.value == ele1) {
                    ele.checked = true;
                }
            }
        }

        document.getElementById("salaryId").value = edited._salary;
        document.getElementById("dateId").value = edited._startDate.substring(0, 2);
        document.getElementById("monthId").value = edited._startDate.substring(3, 6);
        document.getElementById("yearId").value = edited._startDate.substring(7, 11);

    }

})

function resetForm (){
    document.getElementById("nameid").value = "";
    document.getElementById("noteid").value = "";
    document.getElementById("salaryId").value = "";
    document.getElementById("dateId").value = "Day";
    document.getElementById("monthId").value = "Month";
    document.getElementById("yearId").value = "Year";
    let profile1 = document.getElementsByName("profile");
    for (let ele of profile1) {
        ele.checked = false;
    }

    let gender1 = document.getElementsByName("gender")
    for (let ele of gender1) {
        ele.checked = false;
    }

    let department1 = document.getElementsByName("department");
    for (let ele of department1) {
        ele.checked = false;
    }
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
    const startDate = `${date} ${month} ${year}`;
    const notes = document.getElementById("noteid").value;

    let empDetails = new EmployeeDetails ();
    empDetails.setName = names;
    empDetails.setProfile = profile;
    empDetails.setGender = gender;
    empDetails.setDepartment = departments;
    empDetails.setSalary = salary;
    empDetails.setStartDate = startDate;
    empDetails.setNotes = notes;

    
    if (localStorage.getItem("editEmployeeDetails") != null) {
        let edited = JSON.parse(localStorage.getItem("editEmployeeDetails"));

        let oldData = JSON.parse(localStorage.getItem("EmployeeDetails"));
        let index = oldData.findIndex(x => x._name == edited._name);

        oldData[index] = empDetails;
        localStorage.setItem("EmployeeDetails", JSON.stringify(oldData));
    
        localStorage.removeItem("editEmployeeDetails");
    }
    else {
        if (localStorage.getItem("EmployeeDetails") == null) {
            localStorage.setItem("EmployeeDetails", "[]");
        }

        let data = JSON.parse(localStorage.getItem("EmployeeDetails"));
        data.push(empDetails);
        localStorage.setItem("EmployeeDetails", JSON.stringify(data));

    }
    location.href = "../pages/empdetails.html";

}