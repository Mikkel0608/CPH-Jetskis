window.onload = function getCustomerInfo() {
    var storedName = localStorage.getItem('customerName');
    var storedAddress = localStorage.getItem('address');
    var storedPhone = localStorage.getItem('phone');
    var storedEmail = localStorage.getItem('email');

    document.getElementById('customerName').innerHTML=storedName;
    document.getElementById('customerAddress').innerHTML=storedAddress;
    document.getElementById('customerPhone').innerHTML=storedPhone;
    document.getElementById('customerEmail').innerHTML=storedEmail;
}


function deleteUser() {
    var choice = window.confirm("Er du sikker på, at du vil slette din bruger?")
    if (choice == true) {
        localStorage.clear();
        alert('Brugeren er blevet slettet');
        window.location.pathname = 'Eksamensprojekt/CPH-Jetskis/html/Loginpage.html'
    }
}
