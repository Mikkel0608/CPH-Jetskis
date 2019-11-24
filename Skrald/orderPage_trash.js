
  //This next if statement checks the localstorage and sees if there are already any reservation for the given date/time.
  if (rentDayValue == localStorage.getItem('orderDay') && rentMonthValue == localStorage.getItem('orderMonth') && rentYearValue == localStorage.getItem('orderYear') && rentTimeValue == localStorage.getItem('timePeriod')) {
      //Checks if there are any orders of Jetski 1 in local storage and adjusts the amount shown
      if (localStorage.getItem('amount1') == 1) {
          document.getElementById('jetski1Amount3').style.display = "none";
      } else if (localStorage.getItem('amount1') == 2) {
          document.getElementById('jetski1Amount3').style.display = "none";
          document.getElementById('jetski1Amount2').style.display = "none";
      } else if (localStorage.getItem('amount1') == 3) {
          document.getElementById("modelContainer1").style.display = "none";
      }
      // Checks if there are any orders of Jetski 2 in local storage and adjusts the amount shown
      if (localStorage.getItem('amount2') == 1) {
          document.getElementById('jetski2Amount3').style.display = "none";
      } else if (localStorage.getItem('amount2') == 2) {
          document.getElementById('jetski2Amount3').style.display = "none";
          document.getElementById('jetski2Amount2').style.display = "none";
      } else if (localStorage.getItem('amount2') == 3) {
          document.getElementById("modelContainer2").style.display = "none";
      }
      // Checks if there are any orders of Jetski 3 in local storage and adjusts the amount shown
      if (localStorage.getItem('amount3') == 1) {
          document.getElementById('jetski3Amount3').style.display = "none";
      } else if (localStorage.getItem('amount3') == 2) {
          document.getElementById('jetski3Amount3').style.display = "none";
          document.getElementById('jetski3Amount2').style.display = "none";
      } else if (localStorage.getItem('amount3') == 3) {
          document.getElementById("modelContainer3").style.display = "none";
      }
      //If the chosen date is not the date that may exist in the local storage, it should show all jetskis/amounts
  } else if (timeValid == true) {
      document.getElementById("modelContainer1").style.display = "";
      document.getElementById("modelContainer2").style.display = "";
      document.getElementById("modelContainer3").style.display = "";
  }

//This array we decided not to use because we made another.
    var orderArray = [];
    order1 = new Order(localStorage.getItem('phone'), localStorage.getItem('amount1'), localStorage.getItem('amount2'), localStorage.getItem('amount3'), localStorage.getItem('orderDay'), localStorage.getItem('orderMonth'), localStorage.getItem('orderYear'), localStorage.getItem('timePeriod'), localStorage.getItem('orderPrice'));
    order2 = new Order('45678904', '1', '1', '1', '03', '3', '2019', '10-12', '1400');
    order3 = new Order('22340987', '2', '3', '1', '12', '7', '2020', '16-18', '2700');
    order4 = new Order('67880322', '3', '1', '2', '24', '12', '2021', '12-14', '2600');
    order5 = new Order('33445522', '2', '1', '3', '15', '5', '2019', '12-14', '2900');
    order6 = new Order('73459025', '1', '3', '3', '21', '9', '2020', '10-12', '3600');

    orderArray.push(order1, order2, order3, order4, order5, order6);


  //Denne funktion tjekker hvor vidt loggedIn = yes (hvilket bliver oprettet i loginVal ved succesfuld login)
  function storePreDefinedOrder() {
      orderArray = JSON.parse(localStorage.getItem('orderArray'));
     // var phone = document.getElementById("phone").value;
      //var password = document.getElementById("password").value;

      for (let i = 0; i < orderArray.length; i++) {
          if (localStorage.getItem("loggedIn") == "yes") {
              localStorage.setItem('amount1', orderArray[i].amount1);
              localStorage.setItem('amount2', orderArray[i].amount2);
              localStorage.setItem('amount3', orderArray[i].amount3);
              localStorage.setItem('orderDay', orderArray[i].orderDay);
              localStorage.setItem('orderMonth', orderArray[i].orderMonth);
              localStorage.setItem('orderYear', orderArray[i].orderYear);
          }
      }
  }


  // This loop shows the

  getNumber();


  function showOrder() {
      orderArray = JSON.parse(localStorage.getItem('orderArray'));
      for (let i = 0; i < orderArray.length; i++) {
          if (selection.value === orderArray[i].phone) {
              document.getElementById('orderHeadline').innerHTML = "<h4>Din bestilling</h4>";
              document.getElementById('date').innerHTML = "Dato for udlejning: " + orderArray[i].orderDay + "/" + orderArray[i].orderMonth + "/" + orderArray[i].orderYear;
              document.getElementById('timePeriod').innerHTML = "Tidspunkt for udlejning: kl. " + orderArray[i].timePeriod;
              document.getElementById('amountOfJetski1').innerHTML = "Antal Sea Doo Spark: " + orderArray[i].amount1;
              document.getElementById('amountOfJetski2').innerHTML = "Antal Yamaha Waverunner VX: " + orderArray[i].amount2;
              document.getElementById('amountOfJetski3').innerHTML = "Antal Kawasaki STX-15F: " + orderArray[i].amount3;
              document.getElementById('orderPrice').innerHTML = "Samlet pris til betaling ved udlejning: " + orderArray[i].orderPrice;

          }
      }
  }

  localStorage.setItem('amount1', orderAmount1JS);

   localStorage.setItem('amount1', orderAmount1JS);
   localStorage.setItem('amount2', orderAmount2JS);
   localStorage.setItem('amount3', orderAmount3JS);
   localStorage.setItem('orderDay', document.getElementById('rentDay').value);
   localStorage.setItem('orderMonth', document.getElementById('rentMonth').value);
   localStorage.setItem('orderYear', document.getElementById('rentYear').value);
   localStorage.setItem('timePeriod', document.getElementById('rentTime').value);
   localStorage.setItem('orderPrice', finalPrice);


  /*Dette er blevet udkommenteret, da det var smartere at lave dette array i et globalt scope. Ellers ville man ikke
   kunne referere til arrayet nede i showOrder(jeg har også ændret den funktion til at virke med de nye JSON objekter.
   Før brugte vi det array længere oppe, hvor der var 'hardcodet' værdier ind.
   Jeg har også ændret på det der if-statement, som Mikkel har lavet. Det ville ikke rigtigt loade orderArray ind altid.
   Jeg har derfor også linket dette dokument til de fleste html dokumenter, så orderArray bliver loaded ind på de
   fleste sider. :)
    */
  var storedOrders = JSON.parse(localStorage.getItem('storedOrders'));
   if (storedOrders == null) {
       storedOrders = [];
       storedOrders.push(new Order('45678904', '1', '1', '1', '03', '3', '2019', '10-12', '1400'));
       storedOrders.push(new Order('22340987', '2', '3', '1', '12', '7', '2020', '16-18', '2700'));
       storedOrders.push(new Order('67880322', '3', '1', '2', '24', '12', '2021', '12-14', '2600'));
       storedOrders.push(new Order('33445522', '2', '1', '3', '15', '5', '2019', '12-14', '2900'));
       storedOrders.push(new Order('73459025', '1', '3', '3', '21', '9', '2020', '10-12', '3600'));
       storedOrders.push(new Order(localStorage.getItem('phone'), orderAmount1JS, orderAmount2JS, orderAmount3JS, document.getElementById('rentDay').value, document.getElementById('rentMonth').value, document.getElementById('rentYear').value, document.getElementById('rentTime').value, finalPrice));
   } else if (storedOrders != null) {
       storedOrders.push(new Order(localStorage.getItem('phone'), orderAmount1JS, orderAmount2JS, orderAmount3JS, document.getElementById('rentDay').value, document.getElementById('rentMonth').value, document.getElementById('rentYear').value, document.getElementById('rentTime').value, finalPrice));
   }
   localStorage.setItem('storedOrders', JSON.stringify(storedOrders));
   window.location = "orderConfirmation.html";

