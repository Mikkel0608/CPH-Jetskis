//Der oprettes en klasse for kunden. Herunder står kundens log-in oplysninger samt kontakt-oplysninger//
class customer {
    constructor(name, address, phone, email, password){
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.password = password;
    }
//Email og password fra signup
    this.email = document.getElementById('email')
    this.password = document.getElementById('password')

//Denne funktion lagrer input fra sign-up i local storage
    function storeLogin(){
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
    }
}



