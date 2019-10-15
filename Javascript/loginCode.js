//A class is created. It's variables are info about the customers.
class customer {
    constructor(customerName, address, phone, email, password){
        this.customerName = customerName;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }

//This function stores input from the sign-up page in the local storage, as well as creating an alert box.
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

    var customer1 = new customer(customerName, address, phone, email, password)
    customer1.storeLogin()
    //Down here, the function storeLogin is called.

}


function validate(){
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    if (phone == "admin" && password == 12345) {
        window.location = "adminpage.html";
    } else if (phone == "admin" && password != 12345){
        alert("Wrong Password")
    } else if (phone != 'admin'){
        loginVal()
        }
}

function loginVal() {

    //Creating variables for the stored values
    var storedPhone = localStorage.getItem('phone');
    var storedPassword = localStorage.getItem('password');

    //Creating variables for the input values
    var inputPhone = document.getElementById('phone');
    var inputPassword = document.getElementById('password');


    /*Now an if-statement is created to check whether these values match each other, so the
    user can log in or not.
     */

    if(inputPhone.value == storedPhone && inputPassword.value == storedPassword) {
        window.location ="frontpage.html";
    }else {
        alert('Fejl ved login - forkert telefonnummer og password kombination')
    }
}
