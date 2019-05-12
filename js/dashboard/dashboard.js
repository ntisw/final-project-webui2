$(document).ready(function() {
    /* Reqiured */
    $.get("../../data/customers.json", function(data, status){
        var totalCustomers=data.length
        $("#totalCustomers").text(totalCustomers)
        //console.log("Getting Total No. of Customers: " + totalCustomers + "\nStatus: " + status);
    });
    $.get("../../data/products.json", function(data, status){
        var totalProducts=data.length
        $("#totalProducts").text(totalProducts)
        //console.log("Getting Total No. of Products: " + totalProducts + "\nStatus: " + status);
    });
    $.get("../../data/suppliers.json", function(data, status){
        var totalSuppliers = data.length
        $("#totalSuppliers").text(totalSuppliers)
        //console.log("Getting Total No. of Suppliers: " + totalSuppliers + "\nStatus: " + status);
        
    });
    $.get("../../data/orders.json", function(data, status){
        var totalOrders = data.length
        $("#totalOrders").text(totalOrders)
        //console.log("Getting Total No. of Orders: " + totalOrders + "\nStatus: " + status);
    });
    /* Optional  */
});