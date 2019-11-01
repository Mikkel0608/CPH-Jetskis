window.onload = function checkLoginButton() {
    document.getElementById('loginPhone').innerHTML="Logget ind med ID: <br>" + localStorage.getItem('phone');

    //checks if the user is logged in and redirects to loginpage if not (this is used if the user is linked directly to this page)
    if (localStorage.getItem('phone') == null) {
        window.location = "Loginpage.html"
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

function confirmTime() {
    // creating variables that represents the user selection of date and time
    var rentDayID = document.getElementById("rentDay");
    var rentDayValue = rentDayID.options[rentDayID.selectedIndex].value;
    var rentMonthID = document.getElementById("rentMonth");
    var rentMonthValue = rentMonthID.options[rentMonthID.selectedIndex].value;
    var rentYearID = document.getElementById("rentYear");
    var rentYearValue = rentYearID.options[rentYearID.selectedIndex].value;

    var rentTimeID = document.getElementById("rentTime");
    var rentTimeValue = rentTimeID.options[rentTimeID.selectedIndex].value;



    //Tests if the variables set before are equal to 00 (haven't been set). If they are not, it shows the jetskis
    if (rentDayValue != "00" && rentMonthValue != "00" && rentYearValue != "00" && rentTimeValue != "00") {
        document.getElementById("modelContainer1").style.display = "";
        document.getElementById("modelContainer2").style.display = "";
        document.getElementById("modelContainer3").style.display = "";
    } else {
        alert("Udfyld venligst alle felter.")
    }
    //This next if statement checks the localstorage and sees if there are already any reservation for the given date/time.
    if (rentDayValue == localStorage.getItem('orderDay') && rentMonthValue == localStorage.getItem('orderMonth') && rentYearValue == localStorage.getItem('orderYear') && rentTimeValue == localStorage.getItem('timePeriod')) {
        //Checks if there are any orders of Jetski 1 in local storage and adjusts the amount shown
        if (localStorage.getItem('amountOfJetski1') == 1) {
            document.getElementById('jetski1Amount3').style.display = "none";
        } else if (localStorage.getItem('amountOfJetski1') == 2) {
            document.getElementById('jetski1Amount3').style.display = "none";
            document.getElementById('jetski1Amount2').style.display = "none";
        } else if (localStorage.getItem('amountOfJetski1') == 3) {
            document.getElementById("modelContainer1").style.display = "none";
        }
        // Checks if there are any orders of Jetski 2 in local storage and adjusts the amount shown
        if (localStorage.getItem('amountOfJetski2') == 1) {
            document.getElementById('jetski2Amount3').style.display = "none";
        } else if (localStorage.getItem('amountOfJetski2') == 2) {
            document.getElementById('jetski2Amount3').style.display = "none";
            document.getElementById('jetski2Amount2').style.display = "none";
        } else if (localStorage.getItem('amountOfJetski2') == 3) {
            document.getElementById("modelContainer2").style.display = "none";
        }
        // Checks if there are any orders of Jetski 3 in local storage and adjusts the amount shown
        if (localStorage.getItem('amountOfJetski3') == 1) {
            document.getElementById('jetski3Amount3').style.display = "none";
        } else if (localStorage.getItem('amountOfJetski3') == 2) {
            document.getElementById('jetski3Amount3').style.display = "none";
            document.getElementById('jetski3Amount2').style.display = "none";
        } else if (localStorage.getItem('amountOfJetski3') == 3) {
            document.getElementById("modelContainer3").style.display = "none";
        }
    }
}

class Jetski {
    constructor(model, price, HorsePower) {
        this.model = model;
        this.price = price;
        this.HorsePower = HorsePower;
    }
}

var jetski1= new Jetski('Sea Doo Spark', 300, 60);
var jetski2= new Jetski('Yamaha Waverunner VX', 500, 125);
var jetski3= new Jetski('Kawasaki STX 15F', 600, 160);

//calculates the total price of the current order
function calculatePrice() {
    var orderAmount1JS = document.getElementById('orderAmount1').value;
    var orderAmount2JS = document.getElementById('orderAmount2').value;
    var orderAmount3JS = document.getElementById('orderAmount3').value;
    var finalPrice = orderAmount1JS * jetski1.price + orderAmount2JS * jetski2.price + orderAmount3JS * jetski3.price;
    document.getElementById('totalPrice').innerHTML = "Samlet Pris: " + finalPrice + " kr.";
    document.getElementById('basketDivFull').style.display = "";

    //Checks if all order amounts are 0, then the basket should be hidden again
    if (orderAmount1JS == 00 && orderAmount2JS == 00 && orderAmount3JS == 00)
        document.getElementById('basketDivFull').style.display = "none";

    /* Checks if the order amount if above 0, and if so, it adds the jetski name, photo, price and amount to the <p> in the basket.
    If the order amount is 0, it empties the <p> so that the element is hidden in the basket */
    if (orderAmount1JS > 0) {
        document.getElementById('basketJetski1').innerHTML = "<img style=\"width:30%; float:left; \" src=\"../images/sea-doo-spark.jpg\"> Sea Doo Spark <br> Antal: " + orderAmount1JS + "<br> Pris: " + orderAmount1JS * jetski1.price + " kr.";
    } else {
        document.getElementById('basketJetski1').innerHTML = "";
    }
    if (orderAmount2JS > 0) {
        document.getElementById('basketJetski2').innerHTML = "<br><img style=\"width:30%; float:left; \" src=\"../images/yamaha-waverunner-vx.jpg\"> Yamaha Waverunner VX <br> Antal: " + orderAmount2JS + "<br> Pris: " + orderAmount2JS * jetski2.price + " kr.";
    } else {
        document.getElementById('basketJetski2').innerHTML = "";
    }
    if (orderAmount3JS > 0) {
        document.getElementById('basketJetski3').innerHTML = "<br><img style=\"width:30%; float:left; \" src=\"../images/kawasaki-stx-15f.jpg\"> Kawasaki STX-15F <br> Antal: " + orderAmount3JS + "<br> Pris: " + orderAmount3JS * jetski3.price + " kr.";
    } else {
        document.getElementById('basketJetski3').innerHTML = "";
    }
}

//Creating class to define each individual order

class Order {
    constructor(amount1, amount2, amount3, orderDay, orderMonth, orderYear, timePeriod, orderPrice) {
        this.amount1 = amount1;
        this.amount2 = amount2;
        this.amount3 = amount3;
        this.orderDay = orderDay;
        this.orderMonth = orderMonth;
        this.orderYear = orderYear;
        this.timePeriod = timePeriod;
        this.orderPrice = orderPrice;
    } }


    var orderArray = [];
    order1 = new Order('2', '1', '1', '')
 /*   storeOrder(){
        localStorage.setItem('amount1', amount1.value);
        localStorage.setItem('amount2', amount2.value);
        localStorage.setItem('amount3', amount3.value);
        localStorage.setItem('orderDay', orderDay.value);
        localStorage.setItem('orderMonth', orderMonth.value);
        localStorage.setItem('orderYear', orderYear.value);
        localStorage.setItem('timePeriod', timePeriod.value);
        localStorage.setItem('orderPrice', finalPrice.value);

    }

}

function registerOrder(){
    var amount1 = document.getElementById('orderAmount1').value;
    var amount2 = document.getElementById('orderAmount2').value;
    var amount3 = document.getElementById('orderAmount3').value;
    var orderDay = document.getElementById('rentDay').value;
    var orderMonth = document.getElementById('rentMonth').value;
    var orderYear = document.getElementById('rentYear').value;
    var timePeriod = document.getElementById('rentTime').value;
    var orderAmount1JS = document.getElementById('orderAmount1').value;
    var orderAmount2JS = document.getElementById('orderAmount2').value;
    var orderAmount3JS = document.getElementById('orderAmount3').value;
    var finalPrice = orderAmount1JS * jetski1.price + orderAmount2JS * jetski2.price + orderAmount3JS * jetski3.price;

    var order1 = new order(amount1, amount2, amount3, orderDay, orderMonth, orderYear, timePeriod, finalPrice);

    order1.storeOrder();
    window.location = 'orderConfirmation.html';

}
*/



function storeOrder() {
    var orderAmount1JS = document.getElementById('orderAmount1').value;
    var orderAmount2JS = document.getElementById('orderAmount2').value;
    var orderAmount3JS = document.getElementById('orderAmount3').value;
    var finalPrice = orderAmount1JS * jetski1.price + orderAmount2JS * jetski2.price + orderAmount3JS * jetski3.price;
    localStorage.setItem('amount1', document.getElementById('orderAmount1').value);
    localStorage.setItem('amount2', document.getElementById('orderAmount2').value);
    localStorage.setItem('amount3', document.getElementById('orderAmount3').value);
    localStorage.setItem('orderDay', document.getElementById('rentDay').value);
    localStorage.setItem('orderMonth', document.getElementById('rentMonth').value);
    localStorage.setItem('orderYear', document.getElementById('rentYear').value);
    localStorage.setItem('timePeriod', document.getElementById('rentTime').value);
    localStorage.setItem('orderPrice', finalPrice);
    window.location = "orderConfirmation.html";
}





