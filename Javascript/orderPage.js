/*MK/MM:
This function check if the user is logged in. localStorage.getItem takes the information from the chosen key saved
in localStorage (here we use the 'phone' key), and checks if there are is any value saved to the key. If not, the user
is redirected to the login page. In addition, the function also inserts the users phone number in the navibar as text.
 */
//Function written by: MM
window.onload = function checkLoginButton() {
    document.getElementById('loginPhone').innerHTML="Logget ind med ID: <br>" + localStorage.getItem('phone');

    //checks if the user is logged in and redirects to loginpage if not
    // (this is used if the user is linked directly to this page and have not logged in or registered before.)
    if (localStorage.getItem('phone') == null) {
        window.location = "Loginpage.html"
    }
}
//MK: The purpose of this function is to make sure that the user of the website cannot enter the orderPage if the user is not logged in.
//This function uses the same if statement as the function above but here it is an if else statement. The difference is mainly that this function is activated when a button is clicked.
//This if statement locate the user to either the loginPage or the orderPage. If the key in local storage is null they direct to loginPage else the user goes to orderPage where the order can be made.
//Function written by: MM
function checkLoginOrderPage() {
    if (localStorage.getItem('phone') == null) {
        window.location = "Loginpage.html"
    } else {
        window.location ="orderPage.html"
    }
}
//MK: This function has the same purpose and uses the same if else statement as the one above.
//MK: But this is for the profilePage. This means that if the user of the programme is logged in it can now see information about the profile and orders.
//Function written by: MM
function checkLoginProfilePage() {
    if (localStorage.getItem('phone') == null) {
        window.location = "Loginpage.html"
    } else {
        window.location ="profile.html"
    }
}
/*MM/MK: The following function is activated by the confirm time button. It has the following purposes:
1. It checks if the date/time values have been filled out, and displays an error if not.
2. It checks if there already are reservations for the given time/date, and adjusts the amount of jetskis shown.
 */
//Function written by: MM
function confirmTime() {
    /* MK/MM Creating variables that represent the user selection of date and time we assign the variable to the different elementID's from our HTML
    */
    var rentDayID = document.getElementById("rentDay");
    var rentDayValue = rentDayID.options[rentDayID.selectedIndex].value;
    var rentMonthID = document.getElementById("rentMonth");
    var rentMonthValue = rentMonthID.options[rentMonthID.selectedIndex].value;
    var rentYearID = document.getElementById("rentYear");
    var rentYearValue = rentYearID.options[rentYearID.selectedIndex].value;

    var rentTimeID = document.getElementById("rentTime");
    var rentTimeValue = rentTimeID.options[rentTimeID.selectedIndex].value;

    //MM: Tests if the variables set before are equal to 00 (haven't been set).
    //MM: If the variables have been set, it changes the display property from "none" to "", showing all the jetski models
    //and all the jetski amounts.
    if (rentDayValue != "00" && rentMonthValue != "00" && rentYearValue != "00" && rentTimeValue != "00") {
        document.getElementById("modelContainer1").style.display = '';
        document.getElementById("modelContainer2").style.display = '';
        document.getElementById("modelContainer3").style.display = '';
        document.getElementById('jetski1Amount3').style.display = '';
        document.getElementById('jetski1Amount2').style.display = '';
        document.getElementById('jetski2Amount3').style.display = '';
        document.getElementById('jetski2Amount2').style.display = '';
        document.getElementById('jetski3Amount3').style.display = '';
        document.getElementById('jetski3Amount2').style.display = '';
    } else { //MM: If the user has not filled out alle the date/time fields, an error is shown:
        alert("Udfyld venligst alle felter.");
    }
    /*
       MM:
       Two variables are created. The variable "orderAmount" is set equal to the length of the array "orderArray" that is saved in local storage.
        */
    var orderAmount = JSON.parse(localStorage.getItem('orderArray')).length;
    var orderArray = JSON.parse(localStorage.getItem('orderArray'));
    //MK: Three new variables are created for occupiedAmount1/2/3 which refers to the jetskis. They are defined using number 0 because they as a standard are not rented.
    var occupiedAmount1 = 0;
    var occupiedAmount2 = 0;
    var occupiedAmount3 = 0;

    /*MK/MM: A loop is created to cycle through all registered order and count the occupied jetskis for the selected period.
    The purpose of this loop is that only available jetskis are shown, and that jetskis that are already reserved are hidden.
    The loop uses the orderAmount and the orderArray variables.
     */
    for (var i = 0; i < orderAmount; i++) {
        if (rentDayValue == orderArray[i].orderDay && rentMonthValue == orderArray[i].orderMonth && rentYearValue == orderArray[i].orderYear && rentTimeValue == orderArray[i].timePeriod) {
            //MM:Counts the amount of jetski1 reserved and adds to the var
            if (orderArray[i].amount1 == 1) {
                occupiedAmount1++;
            } else if (orderArray[i].amount1 == 2) {
                occupiedAmount1+=2;
            } else if (orderArray[i].amount1 == 3) {
                occupiedAmount1+=3;
            }
            //MM:Counts the amount of jetski2 reserved and adds to the var
            if (orderArray[i].amount2 == 1) {
                occupiedAmount2++;
            } else if (orderArray[i].amount2 == 2) {
                occupiedAmount2+=2;
            } else if (orderArray[i].amount2 == 3) {
                occupiedAmount2+=3;
            }
            //MM:Counts the amount of jetski3 reserved and adds to the var
            if (orderArray[i].amount3 == 1) {
                occupiedAmount3++;
            } else if (orderArray[i].amount3 == 2) {
                occupiedAmount3+=2;
            } else if (orderArray[i].amount3 == 3) {
                occupiedAmount3+=3;
            }
        }
    }

    //MK: This if statement corrects the amount of jetski 1 if there are any reserved
    if (occupiedAmount1 == 1) {
        document.getElementById('jetski1Amount3').style.display = "none";
    } else if (occupiedAmount1 == 2) {
        document.getElementById('jetski1Amount3').style.display = "none";
        document.getElementById('jetski1Amount2').style.display = "none";
        //MM:The following condition is set to >= in case a bug occurs and the amount of reserved jetskis exceeds 3.
    } else if (occupiedAmount1 >= 3) {
        document.getElementById("modelContainer1").style.display = "none";
    }
    //MK: This if statement corrects the amount of jetski 2 if there are any reserved
    if (occupiedAmount2 == 1) {
        document.getElementById('jetski2Amount3').style.display = "none";
    } else if (occupiedAmount2== 2) {
        document.getElementById('jetski2Amount3').style.display = "none";
        document.getElementById('jetski2Amount2').style.display = "none";
        //MM:The following condition is set to >= in case a bug occurs and the amount of reserved jetskis exceeds 3.
    } else if (occupiedAmount2 >= 3) {
        document.getElementById("modelContainer2").style.display = "none";
    }
    //MK: This if statement corrects the amount of jetski 3 if there are any reserved
    if (occupiedAmount3 == 1) {
        document.getElementById('jetski3Amount3').style.display = "none";
    } else if (occupiedAmount3 == 2) {
        document.getElementById('jetski3Amount3').style.display = "none";
        document.getElementById('jetski3Amount2').style.display = "none";
        //MM: The following condition is set to >= in case a bug occurs and the amount of reserved jetskis exceeds 3.
    } else if (occupiedAmount3 >= 3) {
        document.getElementById("modelContainer3").style.display = "none";
    }
}
//MM: The Jetski class is created. For now, only the price property is used in the code.
class Jetski {
    constructor(model, price, HorsePower) {
        this.model = model;
        this.price = price;
        this.HorsePower = HorsePower;
    }
}
//MM: Objects are created from the Jetski class, representing the different jetski models.
var jetski1= new Jetski('Sea Doo Spark', 300, 60)
var jetski2= new Jetski('Yamaha Waverunner VX', 500, 125);
var jetski3= new Jetski('Kawasaki STX 15F', 600, 160);
//the Object.freeze is used to make sure customers can't change the price property of the objects.
Object.freeze(jetski1);
Object.freeze(jetski2);
Object.freeze(jetski3);


/*MM: The following function is activated when the user changes the amount of jetskis in the HTML selector. It does the following:
1. It adds up the total price of the selected jetskis and shows it in the basket.
2. It shows the basket if the amount of jetskis is above 0.
3. It shows the name of the jetski, the photo, and the price of the selected jetskis in the basket.
 */
//Function written by: MM
function calculatePrice() {
    var orderAmount1JS = document.getElementById('orderAmount1').value;
    var orderAmount2JS = document.getElementById('orderAmount2').value;
    var orderAmount3JS = document.getElementById('orderAmount3').value;
    var finalPrice = orderAmount1JS * jetski1.price + orderAmount2JS * jetski2.price + orderAmount3JS * jetski3.price;
    document.getElementById('totalPrice').innerHTML = "Samlet Pris: " + finalPrice + " kr.";
    document.getElementById('basketDivFull').style.display = "";

    //MM:Checks if all order amounts are 0, then the basket should be hidden
    if (orderAmount1JS == 0 && orderAmount2JS == 0 && orderAmount3JS == 0)
        document.getElementById('basketDivFull').style.display = "none";

    /* MM: Checks if the order amount if above 0, and if so, it adds the jetski name, photo, price and amount to the <p> in the basket.
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

//MM: A class is created to represent order data.
class Order {
    constructor(phone, amount1, amount2, amount3, orderDay, orderMonth, orderYear, timePeriod, orderPrice, orderId) {
        this.phone = phone;
        this.amount1 = amount1;
        this.amount2 = amount2;
        this.amount3 = amount3;
        this.orderDay = orderDay;
        this.orderMonth = orderMonth;
        this.orderYear = orderYear;
        this.timePeriod = timePeriod;
        this.orderPrice = orderPrice;
        this.orderId = orderId;
    }
}


/*
MM: If no orderArray exists in localStorage, an orderArray with predefined users is pushed to localStorage using JSON.stringify.
 */
//Statements written by: MD
var orderArray;
if (localStorage.getItem('orderArray')==null) {
    orderArray = [];
    orderArray.push(new Order('45678904', '1', '1', '1', '03', '3', '2019', '10-12', '1400', "548676"));
    orderArray.push(new Order('22340987', '2', '3', '1', '12', '7', '2020', '16-18', '2700', "383953"));
    orderArray.push(new Order('67880322', '3', '1', '2', '24', '12', '2021', '12-14', '2600', "457364"));
    orderArray.push(new Order('33445522', '2', '1', '3', '15', '5', '2019', '12-14', '2900', "692642"));
    orderArray.push(new Order('73459025', '1', '3', '3', '21', '9', '2020', '10-12', '3600', "725637"));

    var orderArrayString = JSON.stringify(orderArray);
    localStorage.setItem('orderArray', orderArrayString);
}

//MK: This function's purpose is to store the created order in the orderArray in localStorage.
//Function written by: MM & MD
function storeOrder() {
    // MK:Variables are created for the amount picked of the three different types of Jetski.
    var orderAmount1JS = document.getElementById('orderAmount1').value;
    var orderAmount2JS = document.getElementById('orderAmount2').value;
    var orderAmount3JS = document.getElementById('orderAmount3').value;
    // MK/MM: A variable is created to calculate the final price of the order.
    // MK: Totalprice = Amount picked of jetski1 * jetski1's price + Amount picked of jetski2 * jetski2's price and so on...
    var finalPrice = orderAmount1JS * jetski1.price + orderAmount2JS * jetski2.price + orderAmount3JS * jetski3.price;
    //MK: A orderId is created to the order. The purpose of this is to make a unique ID for every order. This variable picks a random number up to 999.999.
    var orderId = Math.floor(Math.random()*10000) + 99999;

    /* MM: The orderArray is retrieved from local storage by using JSON.parse.
    The values of the new order is collected from variables used earlier, and from HTML elements by using getElementById().
    The new order is pushed onto the retrieved orderArray, and the entire updated array is saved to local storage by using
    JSON.stringify() and localStorage.setItem().
     */
    var orderArray = JSON.parse(localStorage.getItem('orderArray'));
    orderArray.push(new Order(localStorage.getItem('phone'), orderAmount1JS, orderAmount2JS, orderAmount3JS, document.getElementById('rentDay').value, document.getElementById('rentMonth').value, document.getElementById('rentYear').value, document.getElementById('rentTime').value, finalPrice, orderId));

    localStorage.setItem('orderArray', JSON.stringify(orderArray));
    window.location = "orderConfirmation.html";
}
