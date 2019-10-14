//Der oprettes en klasse for kunden. Herunder står kundens log-in oplysninger samt kontakt-oplysninger//
class customer {
    constructor(customerName, address, phone, email, password){
    this.customerName = customerName;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.password = password;
    }

//Denne funktion lagrer input fra sign-up i local storage
    storeLogin(){
        localStorage.setItem('customerName', customerName.value);
        localStorage.setItem('address', address.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);

        alert("new user has been created");
    }
}


function registrer() {
//Oplysninger hentes fra signup når der bliver indtastet inputs
    var customerName = document.getElementById("customerName").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var customer1 = new customer(customerName, address, phone, email, password)
    customer1.storeLogin()

}




