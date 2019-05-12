$(document).ready(function() {
    $.get("../../data/customers.json", function(data, status){
        //console.log(status)
        //console.log(getCookie('custINDEX'))
        //console.log(window.cookie)
        var index = getCookie('custINDEX')
        var customers=data
        var customer = customers[index]
        var objAddress = customer.address
        
        //customer details
        var customerID = customer.customerID
        var companyName = customer.companyName
        var contactName = customer.contactName
        var contactTitle = customer.contactTitle
        //address
        var street = objAddress.street
        var city = objAddress.city
        var region = objAddress.region
        var postalCode = objAddress.postalCode
        var country = objAddress.country
        var phone = objAddress.phone

        
        $('#showCustID').attr('title','ID - '+customerID)
        $('#customerID').val(customerID)
        $('#contactName').val(contactName)
        $('#contactTitle').val(contactTitle)
        $('#companyName').val(companyName)
        $('#street').val(street)
        $('#city').val(city)
        if(region!='NULL')
        $('#region').val(region)
        if(postalCode!='NULL')
        $('#postalCode').val(postalCode)
        $('#country').val(country)
        $('#phone').val(phone)
    });
});