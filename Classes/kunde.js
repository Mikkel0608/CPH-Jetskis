//Der oprettes en klasse for kunden. Herunder står kundens log-in oplysninger samt kontakt-oplysninger//
class customer {
    constructor(name, address, phone, email, password){
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.password = password;
    }
    whoIsThisCustomer() {
    console.log(`This customer is $(this.navn)`);
    }

}



