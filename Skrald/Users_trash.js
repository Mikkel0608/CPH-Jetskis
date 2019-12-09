
//Brugt under Customer class
//This method stores input from the sign-up page in the local storage, as well as redirecting to the login-page.
storeLogin(){
    localStorage.setItem('customerName', customerName.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('city', city.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
}





//5 customer objects are created
customer1 = new customer(localStorage.getItem('customerName'),localStorage.getItem('address'),localStorage.getItem('city'),localStorage.getItem('phone'),localStorage.getItem('email'),localStorage.getItem('password'));
customer2 = new customer('Per','Nørregade 31, 4th', 'København', '45678904','per@købenahvn.dk', 'per123');
customer3 = new customer('Tina','Gothersgade 42, 3tv', 'København', '22340987','tina@gmail.com', 'Minkode122');
customer4 = new customer('Louise','Brostykkevej 81', 'Hvidovre', '67880322', 'Louise@hotmail.com', 'nulnul42');
customer5 = new customer('Martin', 'Lemchesvej 22', 'Hellerup', '33445522', 'martin@privat.eu','Hejmeddig');
customer6 = new customer('Niels', 'Gurrevej 12', 'Helsingør', '73459025','Niels123@yahoo.dk','Niels8477');











//This was the old loginVal funktion!
//Creating variables for the stored values
 var storedPhone = localStorage.getItem('phone');
 var storedPassword = localStorage.getItem('password');

 //Creating variables for the input values
 var inputPhone = document.getElementById('phone');
 var inputPassword = document.getElementById('password');


 Now an if-statement is created to check whether these values match each other, which determines wheter
 the user can log in or not. If they match, it adds the predefined user values to local storage.



    if(inputPhone.value == storedPhone && inputPassword.value == storedPassword) {
        window.location ="index.html";
    } else if (inputPhone.value == customer1.phone && inputPassword.value == customer1.password){
        localStorage.setItem('customerName', customer1.customerName);
        localStorage.setItem('address', customer1.address);
        localStorage.setItem('city', customer1.city);
        localStorage.setItem('phone', customer1.phone);
        localStorage.setItem('email', customer1.email);
        localStorage.setItem('password', customer1.password);
        window.location ="index.html";
    } else if (inputPhone.value == customer2.phone && inputPassword.value == customer2.password) {
        localStorage.setItem('customerName', customer2.customerName);
        localStorage.setItem('address', customer2.address);
        localStorage.setItem('city', customer2.city);
        localStorage.setItem('phone', customer2.phone);
        localStorage.setItem('email', customer2.email);
        localStorage.setItem('password', customer2.password);
        window.location = "index.html";
    } else if (inputPhone.value == customer3.phone && inputPassword.value == customer3.password) {
        localStorage.setItem('customerName', customer3.customerName);
        localStorage.setItem('address', customer3.address);
        localStorage.setItem('city', customer3.city);
        localStorage.setItem('phone', customer3.phone);
        localStorage.setItem('email', customer3.email);
        localStorage.setItem('password', customer3.password);
        window.location = "index.html";
    } else if (inputPhone.value == customer4.phone && inputPassword.value == customer4.password) {
        localStorage.setItem('customerName', customer4.customerName);
        localStorage.setItem('address', customer4.address);
        localStorage.setItem('city', customer4.city);
        localStorage.setItem('phone', customer4.phone);
        localStorage.setItem('email', customer4.email);
        localStorage.setItem('password', customer4.password);
        window.location = "index.html";
    } else if (inputPhone.value == customer5.phone && inputPassword.value == customer5.password) {
        localStorage.setItem('customerName', customer5.customerName);
        localStorage.setItem('address', customer5.address);
        localStorage.setItem('city', customer5.city);
        localStorage.setItem('phone', customer5.phone);
        localStorage.setItem('email', customer5.email);
        localStorage.setItem('password', customer5.password);
        window.location = "index.html";
    } else {
        alert('Fejl ved login - forkert telefonnummer og password kombination')
    }




function getNumber() {

    option[1].innerHTML = customer1.phone;
    option[2].innerHTML = customer2.phone;
    option[3].innerHTML = customer3.phone;
    option[4].innerHTML = customer4.phone;
    option[5].innerHTML = customer5.phone;
    option[6].innerHTML = customer6.phone;
}






//Blev brugt til at vise ordren. Kunne dog ikke dynamisk vise flere ordrer. Dengang manipulerede vi også med .innerhtml,
//hvor vi derimod nu bare laver et nyt element med .createElement
                document.getElementById('date').innerHTML = "Dato for udlejning: " + orderArray[i].orderDay + "/" + orderArray[i].orderMonth + "/" + orderArray[i].orderYear;
                document.getElementById('timePeriod').innerHTML = "Tidspunkt for udlejning: kl. " + orderArray[i].timePeriod;
                document.getElementById('amountOfJetski1').innerHTML = "Antal Sea Doo Spark: " + orderArray[i].amount1;
                document.getElementById('amountOfJetski2').innerHTML = "Antal Yamaha Waverunner VX: " + orderArray[i].amount2;
                document.getElementById('amountOfJetski3').innerHTML = "Antal Kawasaki STX-15F: " + orderArray[i].amount3;
                document.getElementById('orderPrice').innerHTML = "Samlet pris til betaling ved udlejning: " + orderArray[i].orderPrice;






function showOrder(){
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
}

















