//MD: A class is created. Classes can in JavaScript be used for creating objects (instantiation)
//Written by Morten Dyberg/Markus Kronborg
class Customer {
    constructor(customerName, address, city, phone, email, password){
        this.customerName = customerName;
        this.address = address;
        this.city = city;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
}


/*MD:
The purpose of the code is validate the input in the registration form. We achieve this by using a boolean value
that returns false if some of the text fields are invalid.
 */
//This code is written by Morten Dyberg
function register() {
    var customerName = document.getElementById("customerName").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    //The following lines of code will validate whether the inputs are valid.
    //1. Validating the form
    var form_valid = true;
    var validation_message = "";

    //2. Validating the name
    if (customerName==null || customerName=="")
    {
        document.getElementById('customerName').style.borderColor = "red";
        validation_message += "Venligst udfyld navn!";
        form_valid = false;
    }

    //3. Validating the address (same method as the name)
    if (address==null || address=="")
    {
        document.getElementById('address').style.borderColor = "red";
        validation_message += "Venligst udfyld addresse!";
        form_valid = false;
    }

    //4. Validating the City
    if (city==null || city=="")
    {
        document.getElementById('city').style.borderColor = "red";
        validation_message += "Venligst udfyld by!";
        form_valid = false;
    }

    //5. Validating the phone number using isNaN method
    if (isNaN(phone) || phone==null || phone=="")
    {
        document.getElementById('phone').style.borderColor = "red";
        validation_message += "Venligst udfyld telefonnummer!";
        form_valid = false;
    }

    //6. Validating the e-mail
    if (email==null || email=="")
    {
        document.getElementById('email').style.borderColor = "red";
        validation_message += "Venligst udfyld E-mail!";
        form_valid = false;
    }

    /*7. Validating the password(s).
     */
    if (password==null || password=="" || confirmPassword==null || confirmPassword=="")
    {
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('confirmPassword').style.borderColor = "red";
        validation_message += "Venligst udfyld password!";
        form_valid = false;
    }

    //This if statement checks whether the password and confirmPassword values are equal to eachother.
    if (document.getElementById("password").value!=document.getElementById("confirmPassword").value) {
        document.getElementById('confirmPassword').style.borderColor = "red";
        validation_message += "Passwords er ikke ens";
        form_valid = false;
    }

/*MD:
This statement checks whether the form is valid. If it is valid, that means that none of the above conditions have
been met in order to make the form_valid = false.
The JSON.parse command takes some JSON data and converts it back to JavaScript values.
The JSON.stringify command does the opposite, and converts JavaScript values to a JSON-encoded string.
The method .push is used to introduce a new customer object into the back of the userArray.
.setItem is used to put data into the localStorage.
*/
    if (form_valid) {

        var userArray = JSON.parse(localStorage.getItem('userArray'));
        userArray.push(new Customer(customerName, address, city, phone, email, password));

        localStorage.setItem("userArray", JSON.stringify(userArray));
        alert("Ny bruger er blevet oprettet");
        window.location = "Loginpage.html";

    } else {
        alert(validation_message)
    }

}



/*MD:
The following code will execute if the value of the userArray key in localStorage is null. If it is empty, it will push
the following pre-defined user objects into the array, then stringify to JSON format and then add them to localStorage.
The objects all have the same properties, but with different values.
 */
//Originally written by Markus Kronborg, changed to fit new needs by Morten Dyberg
var userArray;
if (localStorage.getItem('userArray')==null) {
    userArray = [];

    userArray.push(new Customer('Per','Nørregade 31, 4th', 'København', '45678904','per@købenahvn.dk', 'per123'));
    userArray.push(new Customer('Tina','Gothersgade 42, 3tv', 'København', '22340987','tina@gmail.com', 'Minkode122'));
    userArray.push(new Customer('Louise','Brostykkevej 81', 'Hvidovre', '67880322', 'Louise@hotmail.com', 'nulnul42'));
    userArray.push(new Customer('Martin', 'Lemchesvej 22', 'Hellerup', '33445522', 'martin@privat.eu','Hejmeddig'));
    userArray.push(new Customer('Niels', 'Gurrevej 12', 'Helsingør', '73459025','Niels123@yahoo.dk','Niels8477'));
    
    var userArrayString = JSON.stringify(userArray);
    localStorage.setItem('userArray', userArrayString);
}



/*MD:
This function will validate whether the input values correspond to the values stored in localStorage.
A "for loop" is introduced to loop through the array, and an if-statement is used to check if a specific condition
is met.
The condition checks whether the input phone/password matches the phone/password of the array at index i.
If it matches, the user is sent to the front page, and the user information is stored in their respective keys.
 */
//Function written by Morten Dyberg
function loginVal() {
    var userArray = JSON.parse(localStorage.getItem('userArray'));
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var status = false;

    for (var i = 0; i < userArray.length; i++) {
        if (phone == userArray[i].phone && password == userArray[i].password) {
            status = true;
            window.location = "index.html";
            localStorage.setItem('customerName', userArray[i].customerName);
            localStorage.setItem('address', userArray[i].address);
            localStorage.setItem('city', userArray[i].city);
            localStorage.setItem('phone', userArray[i].phone);
            localStorage.setItem('email', userArray[i].email);
            localStorage.setItem('password', userArray[i].password);

//The console.log method is used to display data. This string is displayed in the browser console.
            console.log("logged in");
        }
    }
    if (status==false) {
        alert("Forkert ID eller password. Prøv igen.");
    }
}


//A class is created for the admin. The only properties in this class are username and password.
//Class written by Markus Kronborg
class Admin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    logIn(){
        console.log(this.username, "har lige logget ind");
    }
}
//We make an instance of this class by creating an object.
admin1 = new Admin('admin', 12345);


/*MD:
This function validates the login using if and else if-statements.
It retrieves the input entered, and uses an if-statement to check whether the input matches the properties in the admin1
object. The first else if statement will execute if the if statement is false. If the phone (username) entered is not
admin, it will call the loginVal function, which loops through the user array.
 */
//Function written by Morten Dyberg
function validate() {
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    if (phone == admin1.username && password == admin1.password) {
        window.location = "adminpage.html";
        admin1.logIn();
    } else if (phone == admin1.username && password != admin1.password) {
        alert("Forkert ID eller password. Prøv igen.")
    } else if (phone != admin1.username) {
        loginVal();
    }
}


/*MD:
The selection variable has the value of the select field created in HTML. Here the admin can select a user phone number
to view their orders.

This function creates options in the select field depending on how many customers there are.
We can create elements in the DOM using the .createElement method. To create an option, we use the option tag
(like one would do in HTMl <option>).
The value of this option is manipulated using the .innerHTML property, which lets us change the content of an
HTML document. Lastly, the .appendChild method is used to append the new node (option) into the select field.
 */
//Function originally written by Markus Kronborg, changed quite a bit by Morten Dyberg
var selection = document.getElementById("phoneSelect");

(function getNumber() {
    var userArray = JSON.parse(localStorage.getItem('userArray'));

    for (var i = 0; i < userArray.length; i++) {

        var allUsers = document.createElement("option");
        allUsers.innerHTML = userArray[i].phone;

        document.getElementById("phoneSelect").appendChild(allUsers);
    }
//Self-invoking function: functions doesn't need to be called to activate.
}());


/*MD:
Purpose of the function is to show the info of a user on the admin page.
This function contains a loop that first checks the selection value in an if statement. If the selection value matches a
phone number from userArray then the function shows the rest of the information of the customer object, again using the
.innerHTML method to manipulate the HTML document.
*/
//Function written by Markus Kronborg
function showInfo () {
    var userArray = JSON.parse(localStorage.getItem('userArray'));
    for (let i = 0; i < userArray.length; i++) {
        if (selection.value == userArray[i].phone) {
            document.getElementById('customerName').innerHTML = userArray[i].customerName;
            document.getElementById('customerAddress').innerHTML = userArray[i].address;
            document.getElementById('customerCity').innerHTML = userArray[i].city;
            document.getElementById('customerPhone').innerHTML = userArray[i].phone;
            document.getElementById('customerEmail').innerHTML = userArray[i].email;
        }
    }
}

/*MD:
This function shows the order of the specific customer selected in the select field. Same procedure as the showInfo
function, but this function can also dynamically show any new orders by using document.createElement.
 */
//Function originally written by Markus Kronborg and changed completely by Morten Dyberg
function showOrder() {
    var orderArray = JSON.parse(localStorage.getItem('orderArray'));
    for (let i = 0; i < orderArray.length; i++) {
            if (selection.value == orderArray[i].phone) {
                var day = orderArray[i].orderDay;
                var month = orderArray[i].orderMonth;
                var year = orderArray[i].orderYear;
                var timePeriod = orderArray[i].timePeriod;
                var amount1 = orderArray[i].amount1;
                var amount2 = orderArray[i].amount2;
                var amount3 = orderArray[i].amount3;
                var orderPrice = orderArray[i].orderPrice;
                var orderID = orderArray[i].orderId;



                var orderInfo = document.createElement("P");
                orderInfo.innerHTML = "Dato for udlejning: " + day + "/" + month + "/" + year + "</br></br>" + "Tidspunkt for udlejning: kl." + timePeriod + "</br></br>" + "Antal Sea Doo Spark: " + amount1 + "</br></br>" + "Antal Yamaha Waverunner VX: " + amount2 + "</br></br>" + "Antal Kawasaki STX-15F: " + amount3 + "</br></br>" + "Samlet pris til betaling ved udlejning: " + orderPrice + "</br></br> Ordre ID: " + orderID + "<br><br>";

                document.getElementById('orderDetails').appendChild(orderInfo);
                document.getElementById('noOrders').innerHTML = "";
            }
    }
}


