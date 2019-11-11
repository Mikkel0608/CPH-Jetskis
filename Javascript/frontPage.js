window.onload = function checkLoginButton() {
    if (localStorage.getItem('phone') != null) {
        var userPhone = localStorage.getItem('phone');
        document.getElementById('loginButton').style.display = "none";
        document.getElementById('loginPhone').style.display = "";
        document.getElementById('loginPhone').innerHTML = "Logget ind med ID: <br>" + userPhone;
    }
}

function checkLoginOrderPage() {
    if (localStorage.getItem('phone') == null) {
        var confirmLoginOrder = window.confirm("Du skal være logget ind for at bestille en tid. Tryk OK for at logge ind.");
        if (confirmLoginOrder == true) {
            window.location = "Loginpage.html"
        }
    } else {
        window.location = "orderPage.html"
    }
}

function checkLoginProfilePage() {
    if (localStorage.getItem('phone') == null) {
        var confirmLoginOrder = window.confirm("Du skal være logget ind for at se din profil. Tryk OK for at logge ind.");
        if (confirmLoginOrder == true) {
            window.location = "Loginpage.html"
        }
    } else {
        window.location ="profile.html"
    }
}
