function schedule() {
  var date = new Date();
  var time = date.toLocaleTimeString();
  var today = date.getHours();

  var day = date.getDay();
  var isWeekend = (day === 5) || (day === 6) || (day === 0)

  //apply the time to the html element
  $("#time").text(time);

  //check if opened, else closed
  if ((today >= 21 && isWeekend == true) || (today <= 4 && isWeekend == true)) {
    //remove and add class to change the gradient of the bg
    $("body").removeClass("closed");
    $("body").addClass("open");

    //toggle between messages
    $("#open-message").css("display", "block");
    $("#closed-message").css("display", "none");
  } else {
    //remove and add class to change the gradient of the bg
    $("body").removeClass("open");
    $("body").addClass("closed");

    //toggle between messages
    $("#open-message").css("display", "none");
    $("#closed-message").css("display", "block");
  }
}
//initialize function
schedule();

setInterval(function () {
  //check time every minute
  schedule();
}, 60000);
