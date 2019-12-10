window.onload = function getOrderInfo() {
    //MM: Inserts the user ID in the navibar
    document.getElementById('loginPhone').innerHTML="Logget ind med ID: <br>" + localStorage.getItem('phone');
    //MM: Creates variables that represent the order array and the length of the order array
    var orderArray = JSON.parse(localStorage.getItem('orderArray'));
    var orderAmount = JSON.parse(localStorage.getItem('orderArray')).length;

    //MM: Creates variables that represent the information in the latest order created. This is done by taking the length of the order array and subtracting 1.
    var day = orderArray[orderAmount-1].orderDay;
    var month = orderArray[orderAmount-1].orderMonth;
    var year = orderArray[orderAmount-1].orderYear;
    var timePeriod = orderArray[orderAmount-1].timePeriod;
    var amount1 = orderArray[orderAmount-1].amount1;
    var amount2 = orderArray[orderAmount-1].amount2;
    var amount3 = orderArray[orderAmount-1].amount3;
    var orderPrice = orderArray[orderAmount-1].orderPrice;
    var orderID = orderArray[orderAmount-1].orderId;
    //MM: Uses HTML DOM getElementByID to refer to the empty P tags on the page, and inserts the relevant information stored in the variables above
    document.getElementById('date').innerHTML ="Dato for udlejning: "+ day + "/" + month+"/"+year;
    document.getElementById('timePeriod').innerHTML ="Tidspunkt for udlejning: kl. " + timePeriod;
    document.getElementById('amountOfJetski1').innerHTML ="Antal Sea Doo Spark: " + amount1;
    document.getElementById('amountOfJetski2').innerHTML ="Antal Yamaha Waverunner VX: " + amount2;
    document.getElementById('amountOfJetski3').innerHTML ="Antal Kawasaki STX-15F: " + amount3;
    document.getElementById('orderPrice').innerHTML = "Samlet pris til betaling ved udlejning: " + orderPrice;
    document.getElementById('orderID').innerHTML = "Ordre ID: " + orderID;
}
//MM: Checks if there is stored a phone value when the user pressed the order page button. If not, it sends the user to the login page
function checkLoginOrderPage() {
    if (localStorage.getItem('phone') == null) {
        window.location = "Loginpage.html"
    } else {
        window.location ="orderPage.html"
    }
}
//MM: Checks if there is stored a phone value when the user pressed the profile button. If not, it sends the user to the login page
function checkLoginProfilePage() {
    if (localStorage.getItem('phone') == null) {
        window.location = "Loginpage.html"
    } else {
        window.location ="profile.html"
    }
}