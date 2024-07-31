function employee(account, fullName, email, passWord, datePicker, salaryBasic, position, timeWork){
    this.account = account;
    this.fullName = fullName;
    this.email = email;
    this.passWord = passWord;
    this.datePicker = datePicker;
    this.salaryBasic = parseFloat(salaryBasic) || 0;
    this.position = position;
    this.timeWork = parseInt(timeWork, 10) || 0;
    // this.calculateTotalSalary  = function () {
    //     switch(this.position){
    //         case "boss":
    //             return this.salaryBasic * 3; 
    //         case "manager":
    //             return this.salaryBasic * 2;
    //         case "employee":
    //             return this.salaryBasic;
    //         case "":
    //             return 0;
    //         default:
    //             return 0;
    //     }
    // }
    // this.rateEmployee = function () {
    //     if (this.timeWork >= 195 ){
    //         return "Nhân viên xuất sắc";
    //     }else if(this.timeWork >= 176){
    //         return "Nhân viên giỏi";
    //     }else if(this.timeWork >= 160){
    //         return "Nhân viên khá";
    //     }else{
    //         return "Nhân viên trung bình";
    //     }
    // }
}
employee.prototype.calculateTotalSalary = function() {
    switch(this.position) {
        case "boss":
            return this.salaryBasic * 3; 
        case "manager":
            return this.salaryBasic * 2;
        case "employee":
            return this.salaryBasic;
        default:
            return 0;
    }
};

employee.prototype.rateEmployee = function() {
    if (this.timeWork >= 195) {
        return "Nhân viên xuất sắc";
    } else if (this.timeWork >= 176) {
        return "Nhân viên giỏi";
    } else if (this.timeWork >= 160) {
        return "Nhân viên khá";
    } else {
        return "Nhân viên trung bình";
    }
};