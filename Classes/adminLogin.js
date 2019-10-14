function validate(){
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    if (phone == "admin" && password == 12345) {
        window.location = "adminpage.html";
    } else if (phone == "admin" && password != 12345){
        alert("Wrong Password")
    } else if (phone !="admin"){
        alert("Admin not registered")
    }
}


