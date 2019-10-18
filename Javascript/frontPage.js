window.onload = function checkLogin() {
    if (localStorage.getItem('phone') != null) {
        var userPhone = localStorage.getItem('phone');
        document.getElementById('loginButton').style.display = "none";
        document.getElementById('loginPhone').style.display = "";
        document.getElementById('loginPhone').innerHTML = "Logget ind med ID: <br>" + userPhone;
    }
}