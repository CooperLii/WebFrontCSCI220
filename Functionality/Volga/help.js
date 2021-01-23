// perform actions when page is ready
// display instructions in the instruction place for different fields when clicked
$(document).ready(function () {
  $("#txtEmailAddress").focus(function () {
    $("#instructions").text("Please enter an appropriate formatted (match the one in place holder) email");
  });

  $("#txtConfirmEmailAddress").focus(function () {
    $("#instructions").text("This email needs to match the previous email");
  });

  $("#txtPassword").focus(function () {
    $("#instructions").text("Password need at least 10 characters, at least 1 upper case, at least 1 digit, at least 1 lower case!");
  });

  $("#txtConfirmPassword").on("focus", function () {
    $("#instructions").text("This password needs to match the previous password");
  });

  $("#txtFirstName,#txtLastName,#txtCity").on("focus", function () {
    $("#instructions").text("Alphabetical letters only");
  });

  $("#txtAddress").on("focus", function () {
    $("#instructions").text("Please enter your address");
  });

  $("#txtZip").on("focus", function () {
    $("#instructions").text("US zip code only");
  });

  $("#selState").on("focus", function () {
    $("#instructions").text("Please select a state");
  });

  $("#txtCCNumber").on("focus", function () {
    $("#instructions").text("Numbers only");
  });

  $("#selCCType").on("focus", function () {
    $("#instructions").text("Please select a card type");
  });

  $("#txtCCName").on("focus", function () {
    $("#instructions").text("Alphabetical letters only");
  });

  $("#ExpMon, #ExpYear").on("focus", function () {
    $("#instructions").text("Please select one");
  });

  $("#txtPhone").on("focus", function () {
    $("#instructions").text("Numbers only");
  });
});
