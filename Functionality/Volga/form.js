// perform actions when doc is ready
$(document).ready(function () {

  // format the table
  $('td:nth-child(1)').css("text-align", "left");
  $('td:nth-last-child(2)').css("text-align", "right");
  $('td:nth-last-child(1)').css("text-align", "left");

  var passRegister = true;

  // Clears all of the registration form
  $("#clear").on("click", function () {
    $('form')[0].reset();
    $("span").text("");
    $("#instructions").text("Form has been cleared.");
  });

  // error checking for inputs

  $('#txtEmailAddress,#txtConfirmEmailAddress').on("focusout", function () {
    var email = $('#txtEmailAddress').val();
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email != "") {
      if (!email.match(emailRegex)) {
        $("#emailSpan").text("Invalidate email");
        passRegister = false;
      } else {
        $("#emailSpan").text("Good").css("color", "green");
      }
    } else {
      $("#emailSpan").text("required");
      passRegister = false;
    }



    var emailConfirm = $('#txtConfirmEmailAddress').val();
    var isEmailEqualConfirmEmail = email.localeCompare(emailConfirm);

    if (emailConfirm != "") {
      if (isEmailEqualConfirmEmail !== 0) {
        $("#confirmEmailSpan").text("Email has to match");
        passRegister = false;
      } else {
        $("#confirmEmailSpan").text("Good").css("color", "green");
      }
    } else {
      $("#confirmEmailSpan").text("required");
      passRegister = false;
    }
  });


  $("#txtPassword, #txtConfirmPassword").on("focusout", function () {
    var lowerCaseLetters = /[a-z]/g;	// Validate lowercase letters
    var numbers = /[0-9]/g;				// Validate numbers
    var upperCaseLetters = /[A-Z]/g;	// Validate capital letters
    var password = $('#txtPassword').val();

    // password
    if (password != "") {
      if (password.length < 10) {
        $("#passwordSpan").text("Need at least 10 characters for password!");
        passRegister = false;
      } else {
        if (!password.match(upperCaseLetters)) {
          $("#passwordSpan").text("Need at least 1 upper case");
          passRegister = false;
        } else {
          if (!password.match(numbers)) {
            $("#passwordSpan").text("Need at least 1 digit!");
            passRegister = false;
          } else {
            if (!password.match(lowerCaseLetters)) {
              $("#passwordSpan").text("least 1 lower case is needed!");
              passRegister = false;
            } else {
              $("#passwordSpan").text("Good").css("color", "green");
            }
          }
        }
      }
    } else {
      $("#passwordSpan").text("required");
      passRegister = false;
    }

    // confirm password
    var confirmPassword = $('#txtConfirmPassword').val();
    var isPasswordEqualConfirmPassword = password.localeCompare(confirmPassword);
    if (confirmPassword != "") {
      if (isPasswordEqualConfirmPassword != 0) {
        $("#confirmPasswordSpan").text("password has to match");
        passRegister = false;
      } else {
        $("#confirmPasswordSpan").text("Good").css("color", "green");
      }
    } else {
      $("#confirmPasswordSpan").text("required");
      passRegister = false;
    }
  });

  // first name
  $("#txtFirstName").on("focusout", function () {
    var onlyAlphabeticChar = /^[A-Za-z\s]+$/;
    var firstName = $('#txtFirstName').val();
    if (firstName != "") {
      if (!firstName.match(onlyAlphabeticChar)) {
        $("#firstNameSpan").text("Alphabetic characters only!");
        passRegister = false;
      } else {
        $("#firstNameSpan").text("Good").css("color", "green");
      }
    } else {
      $("#firstNameSpan").text("required");
      passRegister = false;
    }
  });


  // last name
  $("#txtLastName").on("focusout", function () {
    var onlyAlphabeticChar = /^[A-Za-z\s]+$/;
    var lastName = $('#txtLastName').val();
    if (lastName != "") {
      if (!lastName.match(onlyAlphabeticChar)) {
        $("#lastNameSpan").text("Alphabetic characters only!");
        passRegister = false;
      } else {
        $("#lastNameSpan").text("Good").css("color", "green");
      }
    } else {
      $("#lastNameSpan").text("required");
      passRegister = false;
    }
  });

  // city
  $("#txtCity").on("focusout", function () {
    // city
    var onlyAlphabeticChar = /^[A-Za-z\s]+$/;
    var cityName = $('#txtCity').val();
    if (cityName != "") {
      if (!cityName.match(onlyAlphabeticChar)) {
        $("#citySpan").text("Alphabetic characters only!");
        passRegister = false;
      } else {
        $("#citySpan").text("Good").css("color", "green");
      }
    } else {
      $("#citySpan").text("required");
      passRegister = false;
    }
  });

  // address
  $("#txtAddress").on("focusout", function () {
    var address = $('#txtAddress').val();
    if (address != "") {
      $("#addressSpan").text("Good").css("color", "green");
    } else {
      $("#addressSpan").text("required");
      passRegister = false;
    }
  });


  // Zip Code
  $("#txtZip").on("focusout", function () {
    var zipcode = $('#txtZip').val();
    var USzipcode = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (zipcode != "") {
      if (!zipcode.match(USzipcode)) {
        $("#zipSpan").text("invalid zipcode");
        passRegister = false;

      } else {
        $("#zipSpan").text("Good").css("color", "green");
      }
    } else {
      $("#zipSpan").text("required");
      passRegister = false;

    }
  });

  // state selection
  $("#selState").on("focusout", function () {
    var stateName = $('#selState').val();
    if (stateName != "") {
      $("#stateSpan").text("Good").css("color", "green");
    } else {
      $("#stateSpan").text("required");
      passRegister = false;

    }
  });

  //credit card number
  $("#txtCCNumber").on("focusout", function () {
    var cardNumber = $('#txtCCNumber').val();
    var validateCreditCard = '^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$';
    if (cardNumber != "") {
      if (!cardNumber.match(validateCreditCard)) {
        $("#crdNumSpan").text("Invalidate card number!");
        passRegister = false;
      } else {
        $("#crdNumSpan").text("Good").css("color", "green");
      }
    } else {
      $("#crdNumSpan").text("required");
      passRegister = false;
    }
  });

  // credit card type
  $("#selCCType").on("focusout", function () {
    var cardType = $('#selCCType').val();
    if (cardType != "") {
      $("#cardTypeSpan").text("Good").css("color", "green");
    } else {
      $("#cardTypeSpan").text("required");
      passRegister = false;
    }
  });

  // card holder name
  $("#txtCCName").on("focusout", function () {
    var onlyAlphabeticChar = /^[A-Za-z\s]+$/;
    var holderName = $('#txtCCName').val();
    if (holderName != "") {
      if (!holderName.match(onlyAlphabeticChar)) {
        $("#crdNameSpan").text("Alphabetic characters only!");
        passRegister = false;
      } else {
        $("#crdNameSpan").text("Good").css("color", "green");
      }
    } else {
      $("#crdNameSpan").text("required");
      passRegister = false;
    }
  });

  // Credit card expiration month and year
  $("#ExpMon, #ExpYear").on("focusout", function () {
    var expMonth = $('#ExpMon').val();
    var expYear = $('#ExpYear').val();
    if (expMonth != "" && expYear != "") {
      $("#monthSpan,#yearSpan").text("Good").css("color", "green");
    } else {
      $("#monthSpan,#yearSpan").text("required");
      passRegister = false;
    }

  });

  // phone number
  $("#txtPhone").on("focusout", function () {
    var phone = $('#txtPhone').val();
    var onlyNumber = /^[0-9\s]+$/;
    if (phone != "") {
      if (!phone.match(onlyNumber)) {
        $("#phoneSpan").text("Numbers only!");
        passRegister = false;

      } else {
        $("#phoneSpan").text("Good").css("color", "green");
      }
    }

  });


  // when the filed is focused, the error messages disappear
  $('#txtEmailAddress,#txtConfirmEmailAddress').on("focus", function () {
    $("#emailSpan,#confirmEmailSpan").text("");
  });

  $('#txtPassword,#txtConfirmPassword').on("focus",function(){
    $("#passwordSpan,#confirmPasswordSpan").text("");
  });

  $('#txtFirstName').on("focus",function(){
    $("#firstNameSpan").text("");
  });


  $('#txtLastName').on("focus",function(){
    $("#lastNameSpan").text("");
  });


  $('#txtAddress,#txtAddress2').on("focus",function(){
    $("#addressSpan,#address2Span").text("");
  });

  $('#txtCity').on("focus",function(){
    $("#citySpan").text("");
  });

  $('#selState').on("focus",function(){
    $("#stateSpan").text("");
  });

  $('#txtZip').on("focus",function(){
    $("#zipSpan").text("");
  });

  $('#txtPhone').on("focus",function(){
    $("#phoneSpan").text("");
  });

  $('#selCCType').on("focus",function(){
    $("#cardTypeSpan").text("");
  });

  $('#txtCCNumber').on("focus",function(){
    $("#crdNumSpan").text("");
  });

  $('#txtCCName').on("focus",function(){
    $("#crdNameSpan").text("");
  });

  $('#ExpMon').on("focus",function(){
    $("#monthSpan").text("");
  });

  $('#ExpYear').on("focus",function(){
    $("#yearSpan").text("");
  });


  // set certain fields required
  $('span:not(#address2Span,#phoneSpan)').text("required");

  // // clear the spans when fields clicked
  // $('form').on("click", function () {
  //   if ($('span:not(#address2Span)').text() === "requiredrequiredrequiredrequiredrequiredrequiredrequiredrequiredrequiredrequiredrequiredrequiredrequiredrequiredrequired") {
  //     $('#monthSpan,#crdNameSpan,#crdNumSpan,#zipSpan,#addressSpan,#citySpan,#lastNameSpan,#confirmPasswordSpan,#cardTypeSpan,#confirmEmailSpan,#emailSpan,#firstNameSpan,#passwordSpan,#address2Span,#stateSpan,#phoneSpan,#yearSpan').text("");
  //   }
  // });


  //  trigger submit
  $("#Register").on("click", function () {
    $("#frmRegistration").submit();
  });



  // event handler for submit
  $("#frmRegistration").on('submit', function (e) {
    // error variable to check if there are Errors
    var error = false;

    // Count to check each input
    var count = 0;
    $("input:not(#txtAddress2,#txtPhone).notEmpty").each(function () {
      // If the value at the input has nothing in the text field
      if (!$(this).val()) {
        // Place text in span[n]
        $("span:eq(" + count + ")").text("Required *");
        error = true
      }
      count++
    });


    // check error
    if (error == true || $('span').each().val().contains()=="Missing Input *" || $('span').each().val().contains()=="required")
    {
      e.preventDefault();
    }
    else
    {
      alert("Your Form Has Been Submitted")
    }
  })
});
