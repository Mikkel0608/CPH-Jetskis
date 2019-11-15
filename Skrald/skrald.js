//brug dette dokument til at smide ubrugt kode ind i.



/* denne kode virker ikke   storeOrder(){
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









//This function will validate whether the input values correspond to the values stored in localStorage.
function loginVal() {

    //Creating variables for the stored values
    var storedPhone = localStorage.getItem('phone');
    var storedPassword = localStorage.getItem('password');

    //Creating variables for the input values
    var inputPhone = document.getElementById('phone');
    var inputPassword = document.getElementById('password');


    /*Now an if-statement is created to check whether these values match each other, which determines wheter
    the user can log in or not. If they match, it adds the predefined user values to local storage.
     */

    if(inputPhone.value == storedUsers[3] && inputPassword.value == storedUsers[5]) {
        window.location ="frontpage.html";
    } else if (inputPhone.value == customer1.phone && inputPassword.value == customer1.password){
        localStorage.setItem('customerName', customer1.customerName);
        localStorage.setItem('address', customer1.address);
        localStorage.setItem('city', customer1.city);
        localStorage.setItem('phone', customer1.phone);
        localStorage.setItem('email', customer1.email);
        localStorage.setItem('password', customer1.password);
        window.location ="frontpage.html";
    } else if (inputPhone.value == customer2.phone && inputPassword.value == customer2.password) {
        localStorage.setItem('customerName', customer2.customerName);
        localStorage.setItem('address', customer2.address);
        localStorage.setItem('city', customer2.city);
        localStorage.setItem('phone', customer2.phone);
        localStorage.setItem('email', customer2.email);
        localStorage.setItem('password', customer2.password);
        window.location = "frontpage.html";
    } else if (inputPhone.value == customer3.phone && inputPassword.value == customer3.password) {
        localStorage.setItem('customerName', customer3.customerName);
        localStorage.setItem('address', customer3.address);
        localStorage.setItem('city', customer3.city);
        localStorage.setItem('phone', customer3.phone);
        localStorage.setItem('email', customer3.email);
        localStorage.setItem('password', customer3.password);
        window.location = "frontpage.html";
    } else if (inputPhone.value == customer4.phone && inputPassword.value == customer4.password) {
        localStorage.setItem('customerName', customer4.customerName);
        localStorage.setItem('address', customer4.address);
        localStorage.setItem('city', customer4.city);
        localStorage.setItem('phone', customer4.phone);
        localStorage.setItem('email', customer4.email);
        localStorage.setItem('password', customer4.password);
        window.location = "frontpage.html";
    } else if (inputPhone.value == customer5.phone && inputPassword.value == customer5.password) {
        localStorage.setItem('customerName', customer5.customerName);
        localStorage.setItem('address', customer5.address);
        localStorage.setItem('city', customer5.city);
        localStorage.setItem('phone', customer5.phone);
        localStorage.setItem('email', customer5.email);
        localStorage.setItem('password', customer5.password);
        window.location = "frontpage.html";
    } else {
        alert('Fejl ved login - forkert telefonnummer og password kombination') */
    }
}