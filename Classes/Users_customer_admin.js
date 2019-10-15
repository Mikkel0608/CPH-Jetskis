//A class is created. It's variables are info about the customers.
class customer {
    constructor(customerName, address, phone, email, password){
        this.customerName = customerName;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }

//This method stores input from the sign-up page in the local storage, as well as creating an alert box.
    storeLogin(){
        localStorage.setItem('customerName', customerName.value);
        localStorage.setItem('address', address.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        alert("Ny bruger er blevet oprettet");
        window.location = "Loginpage.html";
    }
}


//Variables are created using the input from the form, and an object is created.
function register() {
    var customerName = document.getElementById("customerName").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var customer1 = new customer(customerName, address, phone, email, password);
    customer1.storeLogin()
    //Down here, the function storeLogin is called.

}

//This function will validate whether the input values correspond to the values stored in localStorage.
function loginVal() {

    //Creating variables for the stored values
    var storedPhone = localStorage.getItem('phone');
    var storedPassword = localStorage.getItem('password');

    //Creating variables for the input values
    var inputPhone = document.getElementById('phone');
    var inputPassword = document.getElementById('password');


    /*Now an if-statement is created to check whether these values match each other, which determines wheter
    the user can log in or not.
     */

    if(inputPhone.value == storedPhone && inputPassword.value == storedPassword) {
        window.location ="frontpage.html";
    }else {
        alert('Fejl ved login - forkert telefonnummer og password kombination')
    }
}






//A class is created for the admin. The only variables in this class are username and password.
class Admin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}
//An object is created from the class
var admin1 = new Admin('admin', 12345);

/*This function validates the login. It retrieves the input entered, and uses if-statements to check whether
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
    } else if (phone != 'admin') {
        loginVal()
    }
}
