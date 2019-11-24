/*MK: This function is activated when the user load this window. window.onload is activated this means that it will activate a function when the the window is loaded.

The basic syntax for a function is using the keyword function followed by the name of the
function, followed by parantheses containing possible parameters. Inside the brackets is the 'body' of the function.
The body is always wrapped in braces. The body contains the statements that are going to be run if the function is called.

This function check if the user is logged in. The function is using an if statement. The if statement contains localStorage.getitem.
localStorage.getItem takes the information from the chosen key saved in localStorage here we use phone. Local storage is used to save data in the users browser storage.
We use the operator '==' that means is equal to in this case null.


In this function we also use the document.getElementById().innerhtml. The id refers to the html file. Here the elementid is loginPhone.
Inserted in the html is first a String 'Logget ind med ID:' + the key 'phone' from localStorage.

 */

window.onload = function checkLoginButton() {
    if (localStorage.getItem('phone') != null) {
        var userPhone = localStorage.getItem('phone');
        document.getElementById('loginButton').style.display = "none";
        document.getElementById('loginPhone').style.display = "";
        document.getElementById('loginPhone').innerHTML = "Logget ind med ID: <br>" + userPhone;
    }
}

//MK: The purpose of this function is to make sure that the user of the website cannot enter the orderPage if the user is not logged in.
//This function use the same if statement as the function above but here it is an if else statement. The difference is mainly that this function is activated when a button is clicked.
//This if statement locate the user to either the loginPage or the orderPage. If the key in local storage is null they direct to loginPage else the user go to orderPage where the order can be made.
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
