//function sayHello(greeting) {
//// Gets the user's name and greets them
//
//    var name = prompt("What is your name?");
//    var greeting_message = greeting + ", " + name + ".\n";
//    //var apology_message = "I can't let you do that, " + name + ".";
//    var alert_message = greeting_message; // + " " + apology_message;
//
//    alert(alert_message);
//}
//
$("#greeting-form").on("submit", function(event_details){
    var greeting = "Hello, ";
    var name = jQuery("#fullName").val();
    var greeting_message = greeting + name;
    var apology_message = "I can't let you do that, " + name + ".";
    //alert(greeting_message);
    $("#greeting-form").hide();
    $("#greeting").append('<p>'+greeting_message+"</p>" + "<p>" + apology_message + "</p>");
    event_details.preventDefault();
});