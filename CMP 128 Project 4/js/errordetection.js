/*
Author: Jose Nunez
Date: 5/14/21
Date Modified: 5/20/21
*/

function formValidation(){

    var fv = true
    var string1 = ""
    var string2 = ""
    var pattern = ""

    /* if statement that checks if the full name is empty */
    string1 = document.getElementById("fullname").value;

    if (string1 == "" || string1.length < 1) {
        document.getElementById("name_error").style.visibility = "visible";
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("fullname").style.border = "2px solid rgb(232, 50, 82)";
        fv = false;
    }
    else {
        document.getElementById("name_error").style.visibility = "hidden";
        document.getElementById("fullname").style.border = "none";
        if (fv != false)
            fv = true;
    }

    /* if statement that checks if the email follows the pattern*/
    string1 = document.getElementById("email").value;
    pattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/

    if (!pattern.test(string1)) {
        document.getElementById("email_error").style.visibility = "visible";
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("email").style.border = "2px solid rgb(232, 50, 82)";
        fv = false;
    }
    else {
        document.getElementById("email_error").style.visibility = "hidden";
        document.getElementById("email").style.border = "none";
        if (fv == true)
            fv = true;
    }

    /* if statement that checks if the password is empty */
    string1 = document.getElementById("password").value;

    if (string1 == ""){
        document.getElementById("password_error").style.visibility = "visible";
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("password").style.border = "2px solid rgb(232, 50, 82)";
        fv = false;
    }
    else {
        document.getElementById("password_error").style.visibility = "hidden";
        document.getElementById("password").style.border = "none";
        if (fv == true)
            fv = true;
    }

    /* if statement that checks if the password confirmation is empty */
    string1 = document.getElementById("Conf_password").value;

    if (string1 == ""){
        document.getElementById("Conf_password_error").style.visibility = "visible";
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("Conf_password").style.border = "2px solid rgb(232, 50, 82)";
        fv = false;
    }
    else {
        document.getElementById("Conf_password_error").style.visibility = "hidden";
        document.getElementById("Conf_password").style.border = "none";
        if (fv == true)
            fv = true;
    }
    
    /* if statement that makes sure that the password is greater than 10 but less than 20 characters */
    string1 = document.getElementById("password").value;
    string2 = document.getElementById("Conf_password").value;

    if ((string1.length < 10 || string1.length > 20) || (string2.length < 10 || string2.length > 20)) {
        document.getElementById("password_not10-20").style.visibility = "visible";
        document.getElementById("formErrors").style.display = "block"; 
        document.getElementById("password").style.border = "2px solid red rgb(232, 50, 82)";
        fv = false;
    }
    else {
        document.getElementById("password_not10-20").style.visibility = "hidden";
        document.getElementById("password").style.border = "none";
        if (fv == true)
            fv = true
    }
    
    /* if statement that makes sure that the password has atleast one lowercase character */
    string1 = document.getElementById("password").value;

    if (!hasLower(string1)) {
        document.getElementById("password_no_lower").style.visibility = "visible";
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("password").style.border = "2px solid red rgb(232, 50, 82)";
        fv = false;
    }
    else {
        document.getElementById("password_no_lower").style.visibility = "hidden";
        document.getElementById("password").style.border = "none";
        if (fv == true)
            fv = true
    }

    /* if statement that makes sure that the password has atleast one uppercase character */
    string1 = document.getElementById("password").value;

    if (!hasUpper(string1)) {
        document.getElementById("password_no_upper").style.visibility = "visible";
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("password").style.border = "2px solid red rgb(232, 50, 82)";
        fv = false;
    }
    else {
        document.getElementById("password_no_upper").style.visibility = "hidden";
        document.getElementById("password").style.border = "none";
        if (fv == true)
            fv = true
    }

    /* if statement that makes sure that the password has atleast one digit */
    string = document.getElementById("password").value;

    if (!hasDigit(string1)){
        document.getElementById("password_no_digit").style.visibility = "visible";
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("password").style.border = "2px solid red rgb(232, 50, 82)";
        fv = false;
    }
    else {
        document.getElementById("password_no_digit").style.visibility = "hidden";
        document.getElementById("password").style.border = "none";
        if (fv == true)
            fv = true
    }

    /* if statement that is checking if the passwords match */
    string1 = document.getElementById("password").value;
    string2 = document.getElementById("Conf_password").value;

    if (string1 != string2) {
        document.getElementById("password_dont_match").style.visibility = "visible";
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("password").style.border = "2px solid red rgb(232, 50, 82)"
        document.getElementById("Conf_password").style.border = "2px solid red rgb(232, 50, 82)"
        fv = false;
    }
    else {
        document.getElementById("password_dont_match").style.visibility = "hidden";
        document.getElementById("password").style.border = "none";
        document.getElementById("Conf_password").style.border = "none";
        if (fv == true)
            fv = true
    }

    /* if statement that checks if the organization is empty */
    string1 = document.getElementById("organization").value;
    if (string1 == "" || string1.length < 1) {
        document.getElementById("attendee_error").style.visibility = "visible";
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("organization").style.border = "2px solid rgb(232, 50, 82)";
        fv = false;
    }
    else {
        document.getElementById("attendee_error").style.visibility = "hidden";
        document.getElementById("organization").style.border = "none";
        if (fv != false)
            fv = true;
    }

    /* if statement that checks if the phone number format is correct*/
    string1 = document.getElementById("phonenumber").value;
    pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    if (!pattern.test(string1)) {
        document.getElementById("phone_error").style.visibility = "visible";
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("phonenumber").style.border = "2px solid rgb(232, 50, 82)";
        fv = false;
    }
    else {
        document.getElementById("phone_error").style.visibility = "hidden";
        document.getElementById("phonenumber").style.border = "none";
        if (fv == true)
            fv = true;
    }

    /* if statement that checks if a country was selected */
    string1 = document.getElementById("country").value;
    
    if (string1 == "Select a Country") {
        document.getElementById("country_error").style.visibility = "visible";
        document.getElementById("formErrors").style.display = "block";
        document.getElementById("country").style.border = "2px solid rgb(232, 50, 82)";
        fv = false;
    }
    else {
        document.getElementById("country_error").style.visibility = "hidden";
        document.getElementById("country").style.border = "none";
        if (fv != false)
            fv = true;
    }
    
    /* I tried getting the the discount working but then it will not allow the div with the errors appear
    string1 = document.getElementsById("discount")

    if (string1 == "Lehman College"){
        document.getElementById("formErrors").style.display = "block";
        console.log(discountedPrice)
        fv = false;
    }
    else{
        if (fv == true)
            fv = true;
    }
    */

    return fv;

    /* hasDigit method used to check if the password has a digit */
    function hasDigit(string) { 
        return (/[0-9]/.test(string));
    }

    /* hasLower method used to check if the password has a lowercase */
    function hasLower(string) {
        return (/[a-z]/.test(string));  
    }
    
    /* hasUpper method used to check if the password has a uppercase */
    function hasUpper(string) {
        return (/[A-Z]/.test(string)); 
    }

    /* method that is supposed to check the selected radio button and "calculate" the price */
    function applyDiscount() {
        var price = document.getElementsByName('registrationType');
        var foundPrince;
        var discountedPrice;
    
        for (var i = 0; i < price.length; i++) {
            if (price[i].checked) {
                foundPrince = price[i].value;
            }
        }
    
        if (foundPrince == "author") {
            discountedPrice = 200;
        } else if (foundPrince == "participant") {
            discountedPrice = 150;
        } else {
            discountedPrice = 50;
        }
        return discountedPrice;
    }
}

