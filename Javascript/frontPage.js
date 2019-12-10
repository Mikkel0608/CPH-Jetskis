/*MK/MM:
This function check if the user is logged in. localStorage.getItem takes the information from the chosen key saved
in localStorage (here we use the 'phone' key), and checks if there are is any value saved to the key. If not, the user
is redirected to the login page. In addition, the function also inserts the users phone number in the navibar as text.
 */
window.onload = function checkLoginButton() {
    if (localStorage.getItem('phone') != null) {
        var userPhone = localStorage.getItem('phone');
        document.getElementById('loginButton').style.display = "none";
        document.getElementById('loginPhone').style.display = "";
        document.getElementById('loginPhone').innerHTML = "Logget ind med ID: <br>" + userPhone;
    }
}

/*MK: The purpose of this function is to make sure that the user of the website cannot enter the orderPage if the user
/is not logged in.
/This function use the same if statement as the function above but here it is an if else statement. The difference is mainly that this function is activated when a button is clicked.
This if statement locate the user to either the loginPage or the orderPage. If the key in local storage is null they direct to loginPage else the user go to orderPage where the order can be made.
 */
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
//MK: This function has the same purpose and use the same if else statement as the one above.
//MK: But this is for the profilePage this means that if the user of the programme is logged in it can now see information about the profile and orders.
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
