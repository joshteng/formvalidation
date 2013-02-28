/*
When the user clicks the "Sign Up" button
They should be notified if any of the following conditions are NOT true
- The email conforms to the standard pattern
- The password has at least 8 characters
- The password has at least one capital letter
- The password has at least one numeric character

If any of the above conditions are false
- The form is not allowed to be submitted
- Error messages are displayed
 */

$(document).ready(function() {
  $('#login').submit(function(e){
    $('#errors li').remove(); //to remove the errors previously appended

    //regex to check email format, pwd contains at least 1 capital and 1 number
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var pwdCapitalExp = /.*[A-Z]+.*/
    var pwdNumericExp = /.*\d+.*/

    //setting variables to contain the input from the form
    var email = $("input#email").val();
    var password = $("input#password").val();

    //storing our errors in an array
    var errors = new Array();

    if(!emailExp.test(email)) {
      errors.push("Must be a valid email address");
    }

    if(password.length < 8){
     errors.push("Password must be at least 8 characters long");
    }

    if(!pwdCapitalExp.test(password)) {
      errors.push("Password must have at least one capital letter")
    }

    if(!pwdNumericExp.test(password)) {
      errors.push("Password must have at least one numeric character(0-9)")
    }
    
    if(errors.length > 0) {
      e.preventDefault();
      for (e in errors) {
        $("#errors").append("<li>" + errors[e] + "</li>");
      }
    }
    else {
      return true
    }

  });
});
