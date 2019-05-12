$(document).ready(function() {
    $.get("../../data/customers.json", function(data, status){
        //console.log(status)
        customers=data
        tagOpenTbody = '<tbody>'
        tagCloseTbody = '</tbody>'
        tagAndDataCustomers = ''
        for(index in data ){
            customer = customers[index]
            methodSetCookie = "setCookie('custINDEX',"+index+",1)"
            tagAndDataCustomers += '<tr><td><a href="custdetail.html" onclick="'+methodSetCookie+'">'
            +customer.customerID+'</a></td><td>'
            +customer.companyName+'</td><td>'
            +customer.contactName+'</td><td>'
            +customer.contactTitle+'</td></tr>'
        }
        allInOne = tagOpenTbody+tagAndDataCustomers+tagCloseTbody
        //console.log(allInOne)
        $("#custTable").append(allInOne)
        $('#custTable').DataTable();
    });
});