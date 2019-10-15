
function confirmTime() {
    // creating variables that represents the user selection//
    var rentDayID = document.getElementById("rentDay");
    var rentDayValue = rentDayID.options[rentDayID.selectedIndex].value;
    var rentMonthID = document.getElementById("rentMonth");
    var rentMonthValue = rentMonthID.options[rentMonthID.selectedIndex].value;
    var rentYearID = document.getElementById("rentYear");
    var rentYearValue = rentYearID.options[rentYearID.selectedIndex].value;

    var rentTimeID = document.getElementById("rentTime");
    var rentTimeValue = rentTimeID.options[rentTimeID.selectedIndex].value;

//Tests if the var set before are equal to 00 (haven't been set). If they are not, it shows the jetskis)
    if (rentDayValue != "00" && rentMonthValue != "00" && rentYearValue != "00" && rentTimeValue != "00") {
        document.getElementById("modelContainer1").style.display = ""
        document.getElementById("modelContainer2").style.display = ""
        document.getElementById("modelContainer3").style.display = ""
    }

}