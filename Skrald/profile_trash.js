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


function deleteUser() {
    var choice = window.confirm("Er du sikker på, at du vil slette din bruger?");
    if (choice == true) {
        localStorage.clear();
        alert('Brugeren er blevet slettet');
        window.location = 'Loginpage.html';
    }
}
//MD: This function deletes the current order stored in localStorage
function deleteOrder() {
    var orderArray = JSON.parse(localStorage.getItem("orderArray"));
    alert("Dine bestillinger er blevet aflyst");
    window.location = "profile.html";
        for (var i = 0; i <= orderArray.length; i++) {
            if (localStorage.getItem("phone") == orderArray[i].phone) {

                orderArray.splice(i, 1);
                //i--;

                var orderArrayString = JSON.stringify(orderArray);
                localStorage.setItem("orderArray", orderArrayString);

            }
        }
}