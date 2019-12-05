//MD: A class is created. Classes can in JavaScript be used for creating objects (instantiation)
//A class has the following structure: the keyword 'class' followed by the name of the class, first letter capitalized
//Then comes the constructor method, which lists the properties of the class: name, address, city and so on...
//The 'this' keyword refers to the 'owner' of the method, which is Customer in this case.
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
This is a function. A function is a little piece of program wrapped in a value. Functions can be called/invoked
in order to run the 'program'. The basic syntax for a function is using the keyword function followed by the name of the
function, followed by parantheses containing possible parameters. Inside the brackets is the 'body' of the function.
The body is always wrapped in braces. The body contains the statements that are going to be run if the function is called.

Different bindings/variables are created using the keyword 'var' (variable), which can hold values. Now, the variable called customerName now has a
value, which is determined by using the '=' operator. Here we assign the variable customerName to the element in our HTML
document with the id = "customerName".

Here JavaScript reads the DOM (document object model), which is the tree-like structure of an HTML document. The keyword
'document' represents the web page. The getElementbyId method can find a specific node in the DOM by its id. The id is
specified in the HTML document. In this case, its the "customerName" text field we are looking for. We can use the .value
property to access the actual value entered in the text field. Now, the variable customerName holds the value entered in
the text field. Same procedure for all the other text fields.

After that, the validation of the input starts. The variable form_value holds a boolean value, which is a value that can
only have two possibilities - in this case true/false. We also create a variable validation_message, which contains a string.
Strings are used to represent text using "" or ''.

We start using conditional statements to validate the input. An if-statement is used to execute a piece of code, if a
certain condition is met. If customerName is equal to (using the '==' operator) null or (using the || operator) equal to
an empty string. Null is the absence of a value. If any of these conditions are met (because we are using the || operator,
which means or), the code in the brackets will execute:
- Again collecting the specific elementId, we color the border of the text field red using inline CSS styling.
- Using the += operator (which takes the variable and adds itself with whatever comes after the equals sign) a string
containing some text is created.
- the form_valid is set to false.

We do this with all the different variables.

IsNaN: Means 'is not a number'
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

    //5. Validating the phone number
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

    /*7. Validating the password. The else if statement validates whether the value for password
     is the same as in the confirm password text area. The text fields for the password and the confirm password
     are also made red when invalid.
     */
    if (password==null || password=="" || confirmPassword==null || confirmPassword=="")
    {
        document.getElementById('password').style.borderColor = "red";
        document.getElementById('confirmPassword').style.borderColor = "red";
        validation_message += "Venligst udfyld password!";
        form_valid = false;
    }

    //This if statement checks whether the password and confirmPassword values are equal to eachother
    //!= operator: means is not equal to
    if (document.getElementById("password").value!=document.getElementById("confirmPassword").value) {
        document.getElementById('confirmPassword').style.borderColor = "red";
        validation_message += "Passwords er ikke ens";
        form_valid = false;
    }

/*MD:
This statement checks whether the form is valid. If it is valid, that means that none of the above conditions have
been met in order to make the form_valid = false.

JSON (Javascript Object Notation) is introduced. It is a kind of format used for storing data. JSON is used in our
code in order to be able to store arrays in the localStorage.

The JSON.parse command takes some JSON data and converts it back to JavaScript values.
The JSON.stringify command does the opposite, and converts JavaScript values to a JSON-encoded string.

We collect this data from localStorage using the .getItem method. The data has a 'key' from which we can locate the data.
LocalStorage is where data can be stored in the browser.

The method .push is used to introduce a new customer object into the userArray. This method pushes the object into the
back of the array.

An object is an instance of the class created in the beginning (Customer). We can have many objects that with the same
properties as the class. The properties are specific to the object. So this Customer object will contain the properties
of whatever has been typed in the registration form.

.setItem is used to put data into the localStorage. Inside the parentheses the key comes first, followed by the value.

window.location object loads another html page.

alert method puts a box on the screen containing a string of text.

The else statement will execute if the if-statement is false.
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
An array is created "userArray". An array is used for storing sequences of values.
The following code will execute if the value of the userArray key in localStorage is null. If it is empty, it will push
the following pre-defined user objects into the array, then stringify to JSON format and then add them to localStorage.
The objects all have the same properties, but with different values.
This is a good implementation, as this code will execute when the user opens the front page, and all the users will load in.
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
Some variables are created: the userArray (parsed, to convert back to JS format), phone (value comes from text field),
password (value retrieved from text field using document.getElementById).

Since we have an array of users, we have more than just one pair of matching phone/password pairs. We have one for however
many objects there are in the array. A "for loop" is introduced to loop through the array, and an if-statement is used
to check if a specific condition is met.
A variable i is created. Its value is set to 0. The loop is set to loop through the whole length of the array using
.length, a property that returns the length of something (in this case the array). i++ means i+1. Therefore the loop
will go through the length of the array with +1 at a time, checking for the condition.

The condition checks whether the input phone/password matches the phone/password of the array at index i. An index is
the 'position' of data in an array. In our case, index 0 is Per, and index 4 is Niels.
If it matches, the user is sent to the front page, and the user information is stored in their respective keys. We use these
localStorage keys to check whether a user is logged in.

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
There is not an if statement, so the loop doesn't check for a specific condition. It will just list all the users phones
in the select field.
A new array, allUsersArray is created, and each index is set to create a new option using document.createElement(). We
can create elements in the DOM using this method. To create an option, we use the option tag (like one would do in HTMl
<option>).
The value of this option is manipulated using the .innerHTML property, which lets us change the content of an HTML document.

Lastly, the .appendChild method is used to append the new node (option) into the select field. Inside the parentheses is
the value.
 */

//Function originally written by Markus Kronborg, changed quite a bit by Morten Dyberg
var selection = document.getElementById("phoneSelect");

(function getNumber() {
    var userArray = JSON.parse(localStorage.getItem('userArray'));

    for (var i = 0; i <= userArray.length; i++) {

        var allUsers = document.createElement("option");
        allUsers.innerHTML = userArray[i].phone;

        document.getElementById("phoneSelect").appendChild(allUsers);
    }
}());







/*MD:
This function is a loop that first check the selection value in an if statement. If the selection value matches a
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
function, but this function can also dynamically show any new orders by using document.createElement. The procedure is the
same as the getNumber function, but this function displays a paragraph instead of an option.
We add some strings in between the variables, so the user can see what the different values represent.
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


