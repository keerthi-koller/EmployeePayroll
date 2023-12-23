
class EmployeeDetails{
    set setName(name){
        this._name = name;
    }

    get getName(){
        return this._name;
    }

    set setProfile(profile){
        this._profile = profile;
    }

    get getProfile(){
        return this._profile;
    }

    set setGender(gender){
        this._gender = gender;
    }

    get getGender(){
        return this._gender;
    }

    set setDepartment(department){
        this._department = department;
    }

    get getDepartment(){
        return this._department;
    }

    set setSalary(salary){
        this._salary = salary;
    }

    get getSalary(){
        return this._salary;
    }

    set setStartDate(startDate){
        this._startDate = startDate;
    }

    get getStartDate(){
        return this._startDate;
    }

    set setNotes(notes){
        this._notes = notes;
    }

    get getNotes(){
        return this._notes;
    }

}

export default EmployeeDetails;