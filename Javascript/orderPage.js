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

//Tests if the vars set before are equal to 00 (haven't been set). If they are not, it shows the jetskis)
    if (rentDayValue != "00" && rentMonthValue != "00" && rentYearValue != "00" && rentTimeValue != "00") {
        document.getElementById("modelContainer1").style.display = "";
        document.getElementById("modelContainer2").style.display = "";
        document.getElementById("modelContainer3").style.display = "";
    } else {
        alert("Udfyld venligst alle felter.")
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
}