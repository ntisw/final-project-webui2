$(document).ready(function() {
    $.get("../../data/customers.json", function(data, status){
        //console.log(status)
        //console.log(getCookie('custINDEX'))
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
        address = street+' St, '+city+', ';
        if(region!="NULL")
            address += region+', '
        if(postalCode)
            address += postalCode+' '
        $('#showCustID').attr('title','ID - '+customerID)
        $('#customerID').text(customerID)
        $('#contactName').text(contactName)
        $('#contactTitle').text(contactTitle)
        $('#companyName').text(companyName)
        $('#address').text(address)
        $('#country').text(country)
        $('#phone').text(phone)
    });
});