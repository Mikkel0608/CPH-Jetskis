/* MM: The following function uses an if statement with the condition that the phone key in local storage has to equal null.
If the condition is true, it sends the user to the login page, as the user is not logged in. If not, it allows the user to access the order page.
The function is activated by the onclick attribute specified on the "Bestil tid" button HTML tag.
 */
function checkLoginOrderPage() {
    if (localStorage.getItem('phone') == null) {
        window.location = "Loginpage.html"
    } else {
        window.location ="orderPage.html"
    }
}
/* MM: The following function has the same functionality as the function above, but with the "Profil" button instead.
 */
function checkLoginProfilePage() {
    if (localStorage.getItem('phone') == null) {
        window.location = "Loginpage.html"
    } else {
        window.location ="profile.html"
    }
}

/* MM: The logOut function removes the specified keys from the local storage. By removing the keys, the user is seen as
logged out by the system.
 */
//Function written by Morten Dyberg
function logOut(){
    localStorage.removeItem("customerName");
    localStorage.removeItem("address");
    localStorage.removeItem("city");
    localStorage.removeItem("phone");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
}

/*  MM: The following function is activated whenever the window has loaded. This is done by using the "window.onload"
event handler.
 */
//Function written by Mikkel Marcher
window.onload = function getCustomerInfo() {
    /*
    MM:
    The code retrieves information from local storage by using the "getItem" command, and specifying the key that the
    information should be retrieved from. This retrieved information is then saved to the newly created variables.
     */
    var storedName = localStorage.getItem('customerName');
    var storedAddress = localStorage.getItem('address');
    var storedCity = localStorage.getItem('city');
    var storedPhone = localStorage.getItem('phone');
    var storedEmail = localStorage.getItem('email');

    /*
    MM: Inserts the value of the variables created above into the innerHTML of a set of <p> tags.
     */
    document.getElementById('customerName').innerHTML=storedName;
    document.getElementById('customerAddress').innerHTML=storedAddress;
    document.getElementById('customerCity').innerHTML=storedCity;
    document.getElementById('customerPhone').innerHTML=storedPhone;
    document.getElementById('customerEmail').innerHTML=storedEmail;

    /* MM: This if statement checks if there is a "phone" value stored in local storage. If there is no value saved, it
    links the user to the login page.
     */
        if (localStorage.getItem('phone') == null) {
            window.location = "Loginpage.html"
        }
    /* MM: This line of code retrieves the innerHTML part of the HTML tag with id "loginPhone" and sets it equal to some text and
    the phone key's value stored in local storage.
     */
    document.getElementById('loginPhone').innerHTML="Logget ind med ID: <br>" + localStorage.getItem('phone');

    /*
    MM:
    Two variables are created. The variable "orderAmount" is set equal to the length of the array "orderArray" that is saved in local storage.
    The array is retrieved from local storage by using JSON.parse. The array from local storage is saved as the "orderArray" variable.
     */
    var orderAmount = JSON.parse(localStorage.getItem('orderArray')).length;
    var orderArray = JSON.parse(localStorage.getItem('orderArray'));

    /* MM: The following for loop cycles through all the stored orders and prints the order information onto the page
    if the order's phone number matches the phone number of the logged in user.
     */
    var i;
    for (i = 0; i < orderAmount; i++) {
        if (localStorage.getItem('phone') == orderArray[i].phone) {
            /*
            MM: Variables are created and set equal to the corresponding values of the number i object of the orderArray.
             */
            var day = orderArray[i].orderDay;
            var month = orderArray[i].orderMonth;
            var year = orderArray[i].orderYear;
            var timePeriod = orderArray[i].timePeriod;
            var amount1 = orderArray[i].amount1;
            var amount2 = orderArray[i].amount2;
            var amount3 = orderArray[i].amount3;
            var orderPrice = orderArray[i].orderPrice;
            var orderID = orderArray[i].orderId;

            /* MM: A new variable is created and set equal to the createElement() method, as we want to create a new <p> tag.
             */
            var orderInfo = document.createElement("P");
            /*
            MM: The innerHTML of the newly created <p> tag is set equal to a section of text and the variables above.
             */
            orderInfo.innerHTML ="Dato for udlejning: "+ day + "/" + month + "/" + year + "</br></br>" + "Tidspunkt for udlejning: kl." + timePeriod + "</br></br>" + "Antal Sea Doo Spark: " + amount1 + "</br></br>" + "Antal Yamaha Waverunner VX: " + amount2 + "</br></br>" + "Antal Kawasaki STX-15F: " + amount3 + "</br></br>" + "Samlet pris til betaling ved udlejning: " + orderPrice + "</br></br> Ordre ID: " + orderID + "</br></br>";
            /*
            MM: The appendChild method is used to set the newly created <p> tag as a child to to the ID "orderList", specified in the
            getElementById method.
             */
            document.getElementById('orderList').appendChild(orderInfo);
            /*
            MM: The following line empties the innerHTML of the noOrders ID tag. If the line below is not run, the text
            explains that there are no orders. Whenever the line below is run, the text is removed.
             */
            document.getElementById('noOrders').innerHTML = "";
        }
    }
}
/*
MM: Two variables are created. The "selection" variable is set equal to the HTML select tag with the ID "orderID".
The "option" variable is set equal to the options of the "selection" variable.
 */
var selection = document.getElementById("orderId");

/*
MM: This function goes through all the stored orders in localStorage and adds the orderID to the order selector if the phone
attribute in the stored order matches the phone of the active user.
 */
//Function written by Morten Dyberg
(function getOrderId() {
    var orderArray = JSON.parse(localStorage.getItem("orderArray"));
    /*
    MM: This for loop cycles through all the orders in the orderArray. For each repetition, variable i is increased by 1.
    The loop only stops once i is greater than the length of the orderArray.
     */
    for (var i = 0; i < orderArray.length; i++) {
        if (localStorage.getItem("phone") == orderArray[i].phone) {

            var orderId = document.createElement("option");
            /*
            MM: The innerHTML of the newly created option tag is set equal to the orderID of order object number i in the orderArray.
             */
            orderId.innerHTML = orderArray[i].orderId;

            /*
            MM: The appendChild method is used to set the newly created option tag as a child to the "orderId" ID.
             */
            document.getElementById("orderId").appendChild(orderId);
        }
    }
}());

/*
MM: The following function deletes the order that is currently selected.
 */
//Function written by Morten Dyberg
function deleteOrder() {
    var orderArray = JSON.parse(localStorage.getItem("orderArray"));
    /*
    MM: The following for loop cycles through all the stored orders. If the currently selected order is equal to
    the stored order's orderId attribute, the order is removed from the order array.
     */
    for (var i = 0; i < orderArray.length; i++) {
        if (selection.value == orderArray[i].orderId) {
            /*
            MM: The page is reloaded using the location property.
             */
            window.location = "profile.html";
            /*
            MM: The splice method is used to remove a section of the orderArray. It specifies that at position i, it should
            remove 1 item.
             */
            orderArray.splice(i, 1);
            /*
            MM: Using the JSON.stringify method, the orderArray array is saved as a string in the variable "orderArrayString".
            The variable is saved to the key "orderArray" in local storage using the localStorage.setItem method.
             */
            var orderArrayString = JSON.stringify(orderArray);
            localStorage.setItem("orderArray", orderArrayString);
        }
    }
}
/*
MM: The following function prompts the user to confirm that they want to delete their order.
 */
//Function written by Morten Dyberg
function deleteOrderAlert() {
    /*
    MM: The window.confirm method prompts the user to either confirm or cancel the cancellation action.
     */
    var choice = window.confirm("Er du sikker på, at du vil slette din ordre?");
    /*
    MM: If the user confirms to delete their order, an alert appears and the deleteOrder function is called.
     */
    if (choice == true) {
        alert("Ordren er blevet slettet");
        deleteOrder();
    }
}
/*
MM: The deleteUser function deletes the current user from the userArray.
 */
//Function written by Morten Dyberg
function deleteUser() {
    var userArray = JSON.parse(localStorage.getItem("userArray"));
    var choice = window.confirm("Er du sikker på, at du vil slette din bruger?");
    if (choice == true) {
        /*
        MM: The following for loop runs through all the stored users in the userArray, and if the active phone and the
        phone attribute of the i object in the array is the same, it splices the number i user from the array. The array is then
        again saved to local storage using the JSON.stringify method. The user is linked to the login page using window.location,
        and the logOut() function and deleteOrder() functions are called.
         */
        for (var i = 0; i <= userArray.length; i++) {
            if (localStorage.getItem("phone") == userArray[i].phone) {
                alert("Bruger er blevet slettet");
                window.location = 'Loginpage.html';
                userArray.splice(i, 1);

                var userArrayString = JSON.stringify(userArray);
                localStorage.setItem('userArray', userArrayString);
                logOut();
                deleteOrder();

            }
        }
    }
}






