//A class is created. It's variables are info about the customers.
class customer {
    constructor(customerName, address, city, phone, email, password){
        this.customerName = customerName;
        this.address = address;
        this.city = city;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }

//This method stores input from the sign-up page in the local storage, as well as redirecting to the login-page.
    /*storeLogin(){
        localStorage.setItem('customerName', customerName.value);
        localStorage.setItem('address', address.value);
        localStorage.setItem('city', city.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);


     
    }*/

}

/*MD: This function is supposed to collect the inputs from the form as well as validating whether the input
is valid.
This is accomplished by creating a variable called form_valid, which has a boolean value. The form can either be true
or false. If the form is true, the registration is successful and the user is redirected to the login page. The method
storeLogin is called if the form is true, so the inputs are stored.
The form is false if the inputs are invalid, i.e. if the input in the phone number field is not a number. An alert box
will pop up if this is the case.

The reason we chose to implement this cod, is because we have had form validation lessons in our other course, BIS,
where we used this exact method of validating the form.
 */


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
    else if (document.getElementById("password").value!=document.getElementById("confirmPassword").value) {
        document.getElementById('confirmPassword').style.borderColor = "red";
        validation_message += "Passwords er ikke ens"
        form_valid = false;
    }

    /*
    If the form is valid, then an alert box will pop up,
    and the function storeLogin, which stores the inputs, will be called.
     */
    if (form_valid) {

        var userArray = JSON.parse(localStorage.getItem('userArray'));
        userArray.push(new customer(customerName, address, city, phone, email, password));

        localStorage.setItem("userArray", JSON.stringify(userArray));
        alert("Ny bruger er blevet oprettet");
        window.location = "Loginpage.html";




        /*var userArray = JSON.parse(localStorage.getItem('user'));
        userArray.push(new customer(customerName.value, address.value, city.value, phone.value, email.value, password.value));

        localStorage.setItem("customer", JSON.stringify(customerArray));
        alert("Ny bruger er blevet oprettet");
        window.location ="Loginpage.html";
        console.log(localStorage);
*/
    } else {
        alert(validation_message)
    }

}
/*
function storeLogin() {
    localStorage.setItem('customerName', customerName.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
}
*/

var userArray;
if (localStorage.getItem('userArray')==null) {
    userArray = [];

    userArray.push(new customer('Per','Nørregade 31, 4th', 'København', '45678904','per@købenahvn.dk', 'per123'));
    userArray.push(new customer('Tina','Gothersgade 42, 3tv', 'København', '22340987','tina@gmail.com', 'Minkode122'));
    userArray.push(new customer('Louise','Brostykkevej 81', 'Hvidovre', '67880322', 'Louise@hotmail.com', 'nulnul42'));
    userArray.push(new customer('Martin', 'Lemchesvej 22', 'Hellerup', '33445522', 'martin@privat.eu','Hejmeddig'));
    userArray.push(new customer('Niels', 'Gurrevej 12', 'Helsingør', '73459025','Niels123@yahoo.dk','Niels8477'));
    
    var userArrayString = JSON.stringify(userArray);
    localStorage.setItem('userArray', userArrayString);
}
/*
//5 customer objects are created
customer1 = new customer(localStorage.getItem('customerName'),localStorage.getItem('address'),localStorage.getItem('city'),localStorage.getItem('phone'),localStorage.getItem('email'),localStorage.getItem('password'));
customer2 = new customer('Per','Nørregade 31, 4th', 'København', '45678904','per@købenahvn.dk', 'per123');
customer3 = new customer('Tina','Gothersgade 42, 3tv', 'København', '22340987','tina@gmail.com', 'Minkode122');
customer4 = new customer('Louise','Brostykkevej 81', 'Hvidovre', '67880322', 'Louise@hotmail.com', 'nulnul42');
customer5 = new customer('Martin', 'Lemchesvej 22', 'Hellerup', '33445522', 'martin@privat.eu','Hejmeddig');
customer6 = new customer('Niels', 'Gurrevej 12', 'Helsingør', '73459025','Niels123@yahoo.dk','Niels8477');

//The 5 objects i just created is being pushed into the customerArray
customerArray.push(customer1, customer2, customer3, customer4, customer5, customer6);
*/

//This function will validate whether the input values correspond to the values stored in localStorage.
function loginVal() {
    userArray = JSON.parse(localStorage.getItem('userArray'));
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    for (let i = 0; i <= userArray.length; i++) {
        if (phone == userArray[i].phone && password == userArray[i].password) {
            window.location = "frontpage.html";
            localStorage.setItem('customerName', userArray[i].customerName);
            localStorage.setItem('address', userArray[i].address);
            localStorage.setItem('city', userArray[i].city);
            localStorage.setItem('phone', userArray[i].phone);
            localStorage.setItem('email', userArray[i].email);
            localStorage.setItem('password', userArray[i].password);


            console.log("logged in");
        }
    }
}
    //Creating variables for the stored values
   /* var storedPhone = localStorage.getItem('phone');
    var storedPassword = localStorage.getItem('password');

    //Creating variables for the input values
    var inputPhone = document.getElementById('phone');
    var inputPassword = document.getElementById('password');


    /*Now an if-statement is created to check whether these values match each other, which determines wheter
    the user can log in or not. If they match, it adds the predefined user values to local storage.

     */
/*
    if(inputPhone.value == storedPhone && inputPassword.value == storedPassword) {
        window.location ="frontpage.html";
    } else if (inputPhone.value == customer1.phone && inputPassword.value == customer1.password){
        localStorage.setItem('customerName', customer1.customerName);
        localStorage.setItem('address', customer1.address);
        localStorage.setItem('city', customer1.city);
        localStorage.setItem('phone', customer1.phone);
        localStorage.setItem('email', customer1.email);
        localStorage.setItem('password', customer1.password);
        window.location ="frontpage.html";
    } else if (inputPhone.value == customer2.phone && inputPassword.value == customer2.password) {
        localStorage.setItem('customerName', customer2.customerName);
        localStorage.setItem('address', customer2.address);
        localStorage.setItem('city', customer2.city);
        localStorage.setItem('phone', customer2.phone);
        localStorage.setItem('email', customer2.email);
        localStorage.setItem('password', customer2.password);
        window.location = "frontpage.html";
    } else if (inputPhone.value == customer3.phone && inputPassword.value == customer3.password) {
        localStorage.setItem('customerName', customer3.customerName);
        localStorage.setItem('address', customer3.address);
        localStorage.setItem('city', customer3.city);
        localStorage.setItem('phone', customer3.phone);
        localStorage.setItem('email', customer3.email);
        localStorage.setItem('password', customer3.password);
        window.location = "frontpage.html";
    } else if (inputPhone.value == customer4.phone && inputPassword.value == customer4.password) {
        localStorage.setItem('customerName', customer4.customerName);
        localStorage.setItem('address', customer4.address);
        localStorage.setItem('city', customer4.city);
        localStorage.setItem('phone', customer4.phone);
        localStorage.setItem('email', customer4.email);
        localStorage.setItem('password', customer4.password);
        window.location = "frontpage.html";
    } else if (inputPhone.value == customer5.phone && inputPassword.value == customer5.password) {
        localStorage.setItem('customerName', customer5.customerName);
        localStorage.setItem('address', customer5.address);
        localStorage.setItem('city', customer5.city);
        localStorage.setItem('phone', customer5.phone);
        localStorage.setItem('email', customer5.email);
        localStorage.setItem('password', customer5.password);
        window.location = "frontpage.html";
    } else {
        alert('Fejl ved login - forkert telefonnummer og password kombination')
    }
}
*/

//A class is created for the admin. The only variables in this class are username and password.
class Admin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
//An object is created from the class
admin1 = new Admin('admin', 12345);


/*This function validates the login. It retrieves the input entered, and uses an if-statement to check whether
the input matches the properties in the admin1 object. It also calls the function loginVal, to validate the
customer log-in.
 */
function validate() {
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    if (phone == admin1.username && password == admin1.password) {
        window.location = "adminpage.html";
    } else if (phone == admin1.username && password != admin1.password) {
        alert("Wrong Password")
    } else if (phone != admin1.username) {
        loginVal();
        //storePreDefinedOrder();
    }
}


// This function is made to get phone numbers from customers into the 'phoneSelect' in the Changeuser HTML.
var selection = document.getElementById("phoneSelect");
var option = selection.options;

//Here the function takes the customers phone number from the array.
function getNumber() {
    var userArray = JSON.parse(localStorage.getItem('userArray'));

    for (var i = 0; i <= userArray.length; i++) {
        var allUsersArray = [];
        allUsersArray[i] = document.createElement("option");
        allUsersArray[i].innerHTML = userArray[i].phone;

        document.getElementById("phoneSelect").appendChild(allUsersArray[i]);
    }
}
getNumber();


/*
function getNumber() {

    option[1].innerHTML = customer1.phone;
    option[2].innerHTML = customer2.phone;
    option[3].innerHTML = customer3.phone;
    option[4].innerHTML = customer4.phone;
    option[5].innerHTML = customer5.phone;
    option[6].innerHTML = customer6.phone;
}
*/

// The function getNumber is being called.



/*This function is a loop that first check the selection value in an if statement. If the selection value matches a phone number from customerArray
then the function shows the rest of the data from the customer object. */

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


                var orderInfo = [];

                orderInfo[i] = document.createElement("P");
                orderInfo[i].innerHTML = "Dato for udlejning: " + day + "/" + month + "/" + year + "</br></br>" + "Tidspunkt for udlejning: kl." + timePeriod + "</br></br>" + "Antal Sea Doo Spark: " + amount1 + "</br></br>" + "Antal Yamaha Waverunner VX: " + amount2 + "</br></br>" + "Antal Kawasaki STX-15F: " + amount3 + "</br></br>" + "Samlet pris til betaling ved udlejning: " + orderPrice + "</br></br> Ordre ID: " + orderID + "<br><br>";

                document.getElementById('orderDetails').appendChild(orderInfo[i]);
                document.getElementById('noOrders').innerHTML = "";


                /*document.getElementById('date').innerHTML = "Dato for udlejning: " + orderArray[i].orderDay + "/" + orderArray[i].orderMonth + "/" + orderArray[i].orderYear;
                document.getElementById('timePeriod').innerHTML = "Tidspunkt for udlejning: kl. " + orderArray[i].timePeriod;
                document.getElementById('amountOfJetski1').innerHTML = "Antal Sea Doo Spark: " + orderArray[i].amount1;
                document.getElementById('amountOfJetski2').innerHTML = "Antal Yamaha Waverunner VX: " + orderArray[i].amount2;
                document.getElementById('amountOfJetski3').innerHTML = "Antal Kawasaki STX-15F: " + orderArray[i].amount3;
                document.getElementById('orderPrice').innerHTML = "Samlet pris til betaling ved udlejning: " + orderArray[i].orderPrice;
                 */
            }
    }
}





/*function showOrder(){
    if (selection.value == customer1.phone){

    var day = localStorage.getItem('orderDay');
    var month = localStorage.getItem('orderMonth');
    var year = localStorage.getItem('orderYear');

    document.getElementById('orderHeadline').innerHTML = "<h4>Nuværende og tidligere bestilling</h4>";
    document.getElementById('date').innerHTML ="Dato for udlejning: "+ day + "/" + month+"/"+year;
    document.getElementById('timePeriod').innerHTML ="Tidspunkt for udlejning: kl. " + localStorage.getItem('timePeriod');
    document.getElementById('amountOfJetski1').innerHTML ="Antal Sea Doo Spark: " + localStorage.getItem('amountOfJetski1');
    document.getElementById('amountOfJetski2').innerHTML ="Antal Yamaha Waverunner VX: " + localStorage.getItem('amountOfJetski2');
    document.getElementById('amountOfJetski3').innerHTML ="Antal Kawasaki STX-15F: " + localStorage.getItem('amountOfJetski3');
    document.getElementById('orderPrice').innerHTML = "Samlet pris til betaling ved udlejning: " + localStorage.getItem('orderPrice');
    }
    else{
        document.getElementById('orderHeadline').innerHTML = "";
        document.getElementById('date').innerHTML ="";
        document.getElementById('timePeriod').innerHTML ="";
        document.getElementById('amountOfJetski1').innerHTML ="";
        document.getElementById('amountOfJetski2').innerHTML ="";
        document.getElementById('amountOfJetski3').innerHTML ="";
        document.getElementById('orderPrice').innerHTML = "";
    }
}*/

