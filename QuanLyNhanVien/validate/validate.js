// hàm kiểm tra tài khoản
function validateAccount(account) {
    var tbAccountError = document.getElementById("tbTKNV");
    const accountPattern = /^\d{4,6}$/;

    if (account.trim() === "") {
        tbAccountError.style.display = "block";
        tbAccountError.innerHTML = "* Tài khoản không được để trống";
        return "Tài khoản không được để trống";
    } else if (!accountPattern.test(account)) {
        tbAccountError.style.display = "block";
        tbAccountError.innerHTML = "* Tài khoản phải từ 4 đến 6 ký số";
        return "Tài khoản phải từ 4 đến 6 ký số";
    } else {
        tbAccountError.innerHTML = ""; // Xóa thông báo lỗi nếu hợp lệ
        return ""; // Tài khoản hợp lệ
    }
}

// hàm kiểm tra họ và tên
function validateName(name) {
    var tbNameError = document.getElementById("tbTen");
    const namePattern = /^[a-zA-Z\s]+$/;

    if (name.trim() === "") {
        tbNameError.style.display = "block";
        tbNameError.innerHTML = "* Tên không được để trống";
        return "Tên không được để trống";
    } else if (!namePattern.test(name)) {
        tbNameError.style.display = "block";
        tbNameError.innerHTML = "* Tên phải là chữ và không có số";
        return "Tên phải là chữ và không có số";
    } else {
        tbNameError.innerHTML = ""; // Xóa thông báo lỗi nếu hợp lệ
        return ""; // Tên hợp lệ
    }
}
// hàm kiểm tra email
function validateEmail(email) {
    var tbEmailError = document.getElementById("tbEmail");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        tbEmailError.style.display = "block";
        tbEmailError.innerHTML = "* Email không được để trống";
        return "Email không được để trống";
    } else if (!emailPattern.test(email)) {
        tbEmailError.style.display = "block";
        tbEmailError.innerHTML = "* Email phải đúng định dạng";
        return "Email phải đúng định dạng";
    } else {
        tbEmailError.innerHTML = ""; // Xóa thông báo lỗi nếu hợp lệ
        return ""; // Email hợp lệ
    }
}
// hàm kiểm tra mật khẩu
function validatePassword(password) {
    var tbPasswordError = document.getElementById("tbMatKhau");
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;

    if (password.trim() === "") {
        tbPasswordError.style.display = "block";
        tbPasswordError.innerHTML = "* Mật khẩu không được để trống";
        return "Mật khẩu không được để trống";
    } else if (!passwordPattern.test(password)) {
        tbPasswordError.style.display = "block";
        tbPasswordError.innerHTML = "* Mật khẩu phải từ 6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
        return "Mật khẩu phải từ 6-10 ký tự, chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
    } else {
        tbPasswordError.innerHTML = ""; // Xóa thông báo lỗi nếu hợp lệ
        return ""; // Mật khẩu hợp lệ
    }
}
// hàm kiểm tra ngày
function validateDate(date) {
    var tbDateError = document.getElementById("tbNgay");
    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;

    if (date.trim() === "") {
        tbDateError.style.display = "block";
        tbDateError.innerHTML = "* Ngày làm không được để trống";
        return "Ngày làm không được để trống";
    } else if (!datePattern.test(date)) {
        tbDateError.style.display = "block";
        tbDateError.innerHTML = "* Định dạng ngày làm phải là mm/dd/yyyy";
        return "Định dạng ngày làm phải là mm/dd/yyyy";
    } else {
        tbDateError.innerHTML = ""; // Xóa thông báo lỗi nếu hợp lệ
        return ""; // Ngày làm hợp lệ
    }
}
// hàm kiểm tra lương 
function validateSalary(salary) {
    var tbSalaryError = document.getElementById("tbLuongCB");
    
    // Đảm bảo salary là số
    if (isNaN(salary)) {
        tbSalaryError.style.display = "block";
        tbSalaryError.innerHTML = "* Lương cơ bản không hợp lệ";
        return "Lương cơ bản không hợp lệ";
    }

    // Chuyển đổi salary thành số float
    salary = parseFloat(salary);

    if (isNaN(salary)) {
        tbSalaryError.style.display = "block";
        tbSalaryError.innerHTML = "* Lương cơ bản không được để trống";
        return "Lương cơ bản không được để trống";
    } else if (salary < 1000000 || salary > 20000000) {
        tbSalaryError.style.display = "block";
        tbSalaryError.innerHTML = "* Lương cơ bản phải từ 1,000,000 đến 20,000,000";
        return "Lương cơ bản phải từ 1,000,000 đến 20,000,000";
    } else {
        tbSalaryError.style.display = "none"; // Ẩn thông báo lỗi nếu hợp lệ
        return ""; // Lương cơ bản hợp lệ
    }
}
// hàm kiểm tra chức vụ
function validatePosition(position) {
    var tbPositionError = document.getElementById("tbChucVu");
    
    // Danh sách các chức vụ hợp lệ
    var validPositions = ["boss", "manager", "employee"];
    
    if (position === "" || !validPositions.includes(position)) {
        tbPositionError.style.display = "block";
        tbPositionError.innerHTML = "* Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)";
        return "Chức vụ phải chọn chức vụ hợp lệ";
    } else {
        tbPositionError.style.display = "none"; // Ẩn thông báo lỗi nếu hợp lệ
        return ""; // Chức vụ hợp lệ
    }
}
// hàm kiểm tra giờ làm
function validateTimeWorks(workHours) {
    var tbWorkHoursError = document.getElementById("tbGiolam");
    
    // Chuyển đổi giá trị workHours sang số nếu nó là chuỗi
    var hours = parseInt(workHours);

    // Kiểm tra nếu giá trị không phải là số hoặc ngoài phạm vi cho phép
    if (isNaN(hours) || hours < 80 || hours > 200) {
        tbWorkHoursError.style.display = "block";
        tbWorkHoursError.innerHTML = "* Số giờ làm trong tháng phải từ 80 đến 200 giờ";
        return "Số giờ làm không hợp lệ";
    } else {
        tbWorkHoursError.style.display = "none"; // Ẩn thông báo lỗi nếu hợp lệ
        return ""; // Số giờ làm hợp lệ
    }
}

