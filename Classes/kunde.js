//Der oprettes en klasse for kunden. Herunder står kundens log-in oplysninger samt kontakt-oplysninger//
class customer {
    constructor(name, address, phone, email, password){
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.password = password;
    }
//Oplysninger hentes fra signup når der bliver indtastet inputs
    this.name = document.getElementById("name")
    this.address = document.getElementById("address")
    this.phone = document.getElementById("phone")
    this.email = document.getElementById("email")
    this.password = document.getElementById("password")


//Denne funktion lagrer input fra sign-up i local storage
    storeLogin(){
        localStorage.setItem('name', name.value);
        localStorage.setItem('address', address.value);
        localStorage.setItem('phone', phone.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
    }
}



