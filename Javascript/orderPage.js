/*MK: This funtion is activated when the user load this window. window.onload is activated this means that it will activate a function when the the window is loaded.

The basic syntax for a function is using the keyword function followed by the name of the
function, followed by parantheses containing possible parameters. Inside the brackets is the 'body' of the function.
The body is always wrapped in braces. The body contains the statements that are going to be run if the function is called.

This function check if the user is logged in. This function is using an if statement. The if statement contains localStorage.getitem.
localStorage.getItem takes the information from the chosen key saved in localStorage here we use phone. Local storage is used to save data in the users browser storage.
We use the operator '==' that means is equal to in this case null.
This means that if a phone is not saved in localstorage the login button will direct to the login page when activated.


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
//This function use the same if statement as the function above but here it is an if else statement. The difference is mainly that this function is activated when a button is clicked.
//This if statement locate the user to either the loginPage or the orderPage. If the key in local storage is null they direct to loginPage else the user go to orderPage where the order can be made.
//Function written by: MM
function checkLoginOrderPage() {
    if (localStorage.getItem('phone') == null) {
        window.location = "Loginpage.html"
    } else {
        window.location ="orderPage.html"
    }
}
//MK: This function has the same purpose and use the same if else statement as the one above.
//MK: But this is for the profilePage this means that if the user of the programme is logged in it can now see information about the profile and orders.
//Function written by: MM
function checkLoginProfilePage() {
    if (localStorage.getItem('phone') == null) {
        window.location = "Loginpage.html"
    } else {
        window.location ="profile.html"
    }
}
/*MM/MK: The following function is activated by the confirm time button.
The Purpose of this function is to make sure that the user confirms time and date, jetski type, jetski amount, price.
The function also store the new order into the order array so the order is now saved in the array and cannot be rented out again at the specific time.
It checks if the date/time values have been filled out, and displays an error if not.
In this function we also use the document.getElementById(). The id refers to the html file. Here the elementid is rentDay/Month/Year/Time.
2. It checks if there already are reservations for the given time/date, and adjusts the amount of jetskis shown.

 */
//Function written by: MM
function confirmTime() {
    /* MK/MM Creating variables that represents the user selection of date and time we assign the variable to the different elementID's from our HTML
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
    } else { //MK: Here we make an else statement that is activated if the user have not selected all the fields they will get an alert with a message.
        alert("Udfyld venligst alle felter.");
    }
    /*
       MM:
       Two variables are created. The variable "orderAmount" is set equal to the length of the array "orderArray" that is saved in local storage.
       The array is retrieved from local storage by using JSON.parse. This method retrieves the saved string from local storage and
       translates it back into an array.
        */
    var orderAmount = JSON.parse(localStorage.getItem('orderArray')).length;
    var orderArray = JSON.parse(localStorage.getItem('orderArray'));
    //MK: Three new variables are created for occupiedAmount1/2/3 which refers to the jetskis. They are defined using number 0 because they as a standard is free to use.
    var occupiedAmount1 = 0;
    var occupiedAmount2 = 0;
    var occupiedAmount3 = 0;

    /*MK: A loop is created to cycle through all registred order and counts if possible amount of occupied jetskis for the selected period.
    The purpose of this loop is to make sure that you cannot create an order if the jetskis are already rented out. The loop is created to make a more generic system so you dont need to hardcode the system to check every part of the array.
    In this loop we have different types of if statements and else if statements.

    This loop is using the orderAmount and the orderArray.

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
//MK: A class is created. Classes in Javascript is used to create objects.
//A class has the following structure: the keyword 'class' followed by the name of the class, first letter capitalized in this case Jetski.
//Then comes the constructor method, which lists the properties of the class: model, price and horsepower.
//The 'this' keyword refers to the 'owner' of the method, which is Jetski in this case.
class Jetski {
    constructor(model, price, HorsePower) {
        this.model = model;
        this.price = price;
        this.HorsePower = HorsePower;
    }
}
//MK: Variables are created for the 3 different types of jetski. Here the class for Jetski is used to define the different models.
//The variables are created using the keyword var which can hold values.
var jetski1= new Jetski('Sea Doo Spark', 300, 60);
var jetski2= new Jetski('Yamaha Waverunner VX', 500, 125);
var jetski3= new Jetski('Kawasaki STX 15F', 600, 160);

/*MM: The following function is activated when the user changes the amount of jetskis in the selector. It does the following:
1. It add up the total price of the selected jetskis and shows it in the basket.
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

    //Checks if all order amounts are 0, then the basket should be hidden again
    if (orderAmount1JS == 0 && orderAmount2JS == 0 && orderAmount3JS == 0)
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

//MK: A class is created. This Class is made for Orders.
//This class methods, is the following: phone, amount1/2/3, orderDay, orderMonth and so on.
//Amount1/2/3 is defining the amount of the three different types of Jetski's placed in the order.
//The 'this' keyword refers to the 'owner' of the method, which is Order in this case.

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

/*MK: An Array is created for pre defined orders and orders made in the system and saved in local storage.
Spørg Mikkel om hjælp til det her if statement.
We first define the orderArray as an variable. Then we use the method '.push' to push our new orders into our orderArray. The orders is made with the Order Class.

JSON.stringify is used. This method saves the orderArray in local storage as a string. We use JSON.stringify so it is possible for the predefined users to 'see' their orders when they are logged in.
Without JSON.stringify this would not be possible.

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


//MK: This function's purpose is to store the created order in the array.
//Function written by: MM & MD
function storeOrder() {
    // MK:Variables are created for the amount picked of the three different types of Jetski.
    // MK: document.getElementById.value refers to the what the amount of the different types of jetski the user have ordered(selected) the elementid refers to the HTML file where there is a dropdown menu.
    var orderAmount1JS = document.getElementById('orderAmount1').value;
    var orderAmount2JS = document.getElementById('orderAmount2').value;
    var orderAmount3JS = document.getElementById('orderAmount3').value;
    // MK: A variable is created to the total price of the order calculating simple math.
    // MK: Totalprice = Amount picked of jetski1 * jetski1's price + Amount picked of jetski2 * jetski2's price and so on...
    var finalPrice = orderAmount1JS * jetski1.price + orderAmount2JS * jetski2.price + orderAmount3JS * jetski3.price;
    //MK: A orderId is created to the order. The purpose of this is to make a unique ID for every order. This variable picks a random number up to 999.999.
    var orderId = Math.floor(Math.random()*10000) + 99999;

    // MM: The array is retrieved from local storage by using JSON.parse. This method retrieves the saved string from local storage and translates it back into an array.
    // MK: Here we push the created order into the already created orderArray. But this time a new order is created using localStorage.getItem and document.getElementById.
    // MK: localStorage.getItem takes the information from the chosen key saved in localStorage here we use phone and save it to the new Order.
    // MK: document.getElementById().value takes the value that are selected in the different ID's field's. The id refers to the html file. Here the elementid's is the different methods from the class except phone.
    var orderArray = JSON.parse(localStorage.getItem('orderArray'));
    orderArray.push(new Order(localStorage.getItem('phone'), orderAmount1JS, orderAmount2JS, orderAmount3JS, document.getElementById('rentDay').value, document.getElementById('rentMonth').value, document.getElementById('rentYear').value, document.getElementById('rentTime').value, finalPrice, orderId));

    localStorage.setItem('orderArray', JSON.stringify(orderArray));
    window.location = "orderConfirmation.html";
}
