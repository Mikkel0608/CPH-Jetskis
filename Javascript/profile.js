window.onload = function getCustomerInfo() {
    var storedName = localStorage.getItem('customerName');
    var storedAddress = localStorage.getItem('address');
    var storedCity = localStorage.getItem('city');
    var storedPhone = localStorage.getItem('phone');
    var storedEmail = localStorage.getItem('email');

    document.getElementById('customerName').innerHTML=storedName;
    document.getElementById('customerAddress').innerHTML=storedAddress;
    document.getElementById('customerCity').innerHTML=storedCity;
    document.getElementById('customerPhone').innerHTML=storedPhone;
    document.getElementById('customerEmail').innerHTML=storedEmail;

    //checks if the user is logged in and redirects to loginpage if not (this is used if the user is linked directly to this page)
        if (localStorage.getItem('phone') == null) {
            window.location = "Loginpage.html"
        }
    //This part shows the logged in user in the navibar
    document.getElementById('loginPhone').innerHTML="Logget ind med ID: <br>" + localStorage.getItem('phone');

    //Inserts the order information from local storage
    if (localStorage.getItem('orderPrice') == null) {
        document.getElementById('timePeriod').innerHTML ="Ingen aktive ordrer på nuværende tidspunkt";
        } else {
    var day = localStorage.getItem('orderDay');
    var month = localStorage.getItem('orderMonth');
    var year = localStorage.getItem('orderYear');
    document.getElementById('date').innerHTML ="Dato for udlejning: "+ day + "/" + month+"/"+year;
    document.getElementById('timePeriod').innerHTML ="Tidspunkt for udlejning: kl. " + localStorage.getItem('timePeriod');
    document.getElementById('amountOfJetski1').innerHTML ="Antal Sea Doo Spark: " + localStorage.getItem('amount1');
    document.getElementById('amountOfJetski2').innerHTML ="Antal Yamaha Waverunner VX: " + localStorage.getItem('amount2');
    document.getElementById('amountOfJetski3').innerHTML ="Antal Kawasaki STX-15F: " + localStorage.getItem('amount3');
    document.getElementById('orderPrice').innerHTML = "Samlet pris til betaling ved udlejning: " + localStorage.getItem('orderPrice');
    }
}


function deleteUser() {
    var choice = window.confirm("Er du sikker på, at du vil slette din bruger?");
    if (choice == true) {
        localStorage.clear();
        alert('Brugeren er blevet slettet');
        window.location = 'Loginpage.html';
    }
}

//MD: This function deletes the current order stored in localStorage
function deleteOrder(){
    var choice = window.confirm("Er du sikker på, at du vil annullere din bestilling?");
    if (choice == true) {

        localStorage.removeItem("amount1");
        localStorage.removeItem("amount2");
        localStorage.removeItem("amount3");
        localStorage.removeItem("orderDay");
        localStorage.removeItem("orderMonth");
        localStorage.removeItem("orderYear");
        localStorage.removeItem("timePeriod");
        localStorage.removeItem("orderPrice");

        alert("Bestillingen er blevet aflyst");
        window.location = "profile.html";
    }
}




function checkLoginOrderPage() {
    if (localStorage.getItem('phone') == null) {
        window.location = "Loginpage.html"
    } else {
        window.location ="orderPage.html"
    }
}

function checkLoginProfilePage() {
    if (localStorage.getItem('phone') == null) {
        window.location = "Loginpage.html"
    } else {
        window.location ="profile.html"
    }
}