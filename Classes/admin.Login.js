function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == 12345) {
        window.location = "adminpage.html";
    } else if (username == "admin" && password != 12345){
        alert("Wrong Password")
    } else if (username !="admin"){
        alert("Admin not registered")
    }
}




