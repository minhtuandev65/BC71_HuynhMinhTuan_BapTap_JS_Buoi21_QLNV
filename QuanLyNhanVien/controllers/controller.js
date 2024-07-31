function getInformationForm() {
    var account = document.getElementById("tknv").value;
    var fullName = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var passWord = document.getElementById("password").value;
    var datePicker = document.getElementById("datepicker").value;
    var salaryBasic = document.getElementById("luongCB").value;
    var position = document.getElementById("chucvu").value;
    var timeWork = document.getElementById("gioLam").value;
    var newEmployee = new employee(account, fullName, email, passWord, datePicker, salaryBasic, position, timeWork);
    return newEmployee;
}