var QLNV = [];
var data = localStorage.getItem("QLNV_JSON");
var employeeArr = JSON.parse(data);

if (data) {
    var employeeArr = JSON.parse(data);
    for (var i = 0; i < employeeArr.length; i++) {
        var data = employeeArr[i];
        var newEmployee = new employee(
            data.account,
            data.fullName,
            data.email,
            data.passWord,
            data.datePicker,
            data.salaryBasic,
            data.position,
            data.timeWork
        );
        QLNV.push(newEmployee);
    }
}

function renderQLNV() {
    var contentHTML = "";
    for (var index = 0; index < QLNV.length; index++) {
        var newEmployee = QLNV[index];
        var trString = `
            <tr>
                <td>${newEmployee.account}</td>
                <td>${newEmployee.fullName}</td>
                <td>${newEmployee.email}</td>
                <td>${newEmployee.datePicker}</td>
                <td>${newEmployee.position}</td>
                <td>${newEmployee.calculateTotalSalary()}</td>
                <td>${newEmployee.rateEmployee()}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteEmployee('${newEmployee.account}')">Xóa</button>
                    <button class="btn btn-warning" onclick="findUpdateEmployee('${newEmployee.account}')">Sửa</button>
                </td>
            </tr>
        `;
        contentHTML += trString;
        document.getElementById("tableDanhSach").innerHTML = contentHTML;
    }
    $('#myModal').modal('hide');
}
// Thêm nhân viên
function addEmployee() {
    var newEmployee = getInformationForm();
    var accountError = validateAccount(newEmployee.account);
    var fullNameError = validateName(newEmployee.fullName);
    var emailError = validateEmail(newEmployee.email);
    var passWordError = validatePassword(newEmployee.passWord);
    var datePickerError = validateDate(newEmployee.datePicker);
    var salaryBasicError = validateSalary(newEmployee.salaryBasic);
    var positionError = validatePosition(newEmployee.position);
    var timeWorksError = validateTimeWorks(newEmployee.timeWork);
    if(accountError != "" || fullNameError != "" || emailError != "" || passWordError != "" || datePickerError != "" || salaryBasicError != "" || positionError != "" || timeWorksError != ""){
        return;
    }
    QLNV.push(newEmployee);
    var jsonQLNV = JSON.stringify(QLNV);
    localStorage.setItem("QLNV_JSON", jsonQLNV);
    renderQLNV();
}
// Xóa dữ liệu
function clearLocalStorage() {
    if (confirm("Bạn có muốn xóa toàn bộ dữ liệu không ?")) {
        localStorage.removeItem("QLNV_JSON");
        QLNV = [];
        document.getElementById("tableDanhSach").innerHTML = "";
        renderQLNV();
    }
}
// Xóa một nhân viên
function deleteEmployee(idAccount) {
    if (confirm("Bạn có muốn xóa nhân viên này không ?")) {
        var index = -1;
        for (var i = 0; i < QLNV.length; i++) {
            if (QLNV[i].account == idAccount) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            QLNV.splice(index, 1);
            var jsonQLNV = JSON.stringify(QLNV);
            localStorage.setItem("QLNV_JSON", jsonQLNV);
            renderQLNV();
        }
    }
}
// Sửa nhân viên
function findUpdateEmployee(idAccount) {
    if (confirm("Bạn có muốn cập nhật thông tin nhân viên này không ?")) {
        $('#myModal').modal('show');
        var index = QLNV.findIndex(function (item) {
            return item.account == idAccount;
        });
        if (index != -1) {
            var employee = QLNV[index];
            document.getElementById("tknv").value = employee.account;
            document.getElementById("name").value = employee.fullName;
            document.getElementById("email").value = employee.email;
            document.getElementById("password").value = employee.passWord;
            document.getElementById("datepicker").value = employee.datePicker;
            document.getElementById("luongCB").value = employee.salaryBasic;
            document.getElementById("chucvu").value = employee.position;
            document.getElementById("gioLam").value = employee.timeWork;
        }

    }
}
function updateEmployee() {
    var employee = getInformationForm();
    var index = QLNV.findIndex(function (item) {
        return item.account == employee.account;
    })
    if (index != -1) {
        QLNV[index] = employee;
        var jsonQLNV = JSON.stringify(QLNV);
        localStorage.setItem("QLNV_JSON", jsonQLNV);
        renderQLNV();
        $('#myModal').modal('hide');
    }
}
// Tìm kiếm nhân viên theo loại
function searchName() {
    var searchNameValue = document.getElementById("searchName").value.toLowerCase();
    var filteredEmployees = [];
    if (searchNameValue === "xuất sắc"){
        filteredEmployees =  QLNV.filter(employee => employee.rateEmployee() === "Nhân viên xuất sắc");
    }else if (searchNameValue === "giỏi"){
        filteredEmployees =  QLNV.filter(employee => employee.rateEmployee() === "Nhân viên giỏi");
    }else if (searchNameValue === "khá"){
        filteredEmployees =  QLNV.filter(employee => employee.rateEmployee() === "Nhân viên khá");
    }else if (searchNameValue === "trung bình"){
        filteredEmployees =  QLNV.filter(employee => employee.rateEmployee() === "Nhân viên trung bình");
    }else {
        alert("Hãy nhập một trong các giá trị: Xuất Sắc, Giỏi, Khá, Trung Bình");
        return;
    }
    displayFilteredResults(filteredEmployees);
}
function displayFilteredResults(employees) {
    var contentHTML = "";
    for (var index = 0; index < employees.length; index++) {
        var newEmployee = employees[index];
        var trString = `
            <tr>
                <td>${newEmployee.account}</td>
                <td>${newEmployee.fullName}</td>
                <td>${newEmployee.email}</td>
                <td>${newEmployee.datePicker}</td>
                <td>${newEmployee.position}</td>
                <td>${newEmployee.calculateTotalSalary()}</td>
                <td>${newEmployee.rateEmployee()}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteEmployee('${newEmployee.account}')">Xóa</button>
                    <button class="btn btn-warning" onclick="findUpdateEmployee('${newEmployee.account}')">Sửa</button>
                </td>
            </tr>
        `;
        contentHTML += trString;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
renderQLNV();