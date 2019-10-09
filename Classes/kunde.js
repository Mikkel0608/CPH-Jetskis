//Der oprettes en klasse for kunden. Herunder står kundens log-in oplysninger samt kontakt-oplysninger//
class kunde {
    constructor(navn, addresse, tlf, email, password){
    this.navn = navn;
    this.addresse = addresse;
    this.tlf = tlf;
    this.email = email;
    this.password = password;
    }
    whoIsThisCustomer() {
    console.log(`This customer is $(this.navn)`);
    }

}

let mikkelCustomer = new kunde("Mikkel");


