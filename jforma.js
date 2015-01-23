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
$("#booking-form").on("submit", function(event_details){
    alert("Submitted.");
    event_details.preventDefault();
});