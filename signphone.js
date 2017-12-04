var phoneNumber = getPhoneNumberFromUserInput();
var appVerifier = window.recaptchaVerifier;
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function(confirmationResult) {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
    }).catch(function(error) {
        // Error; SMS not sent
        // ...
    });

var code = getCodeFromUserInput();
confirmationResult.confirm(code).then(function(result) {
    // User signed in successfully.
    var user = result.user;
    // ...
}).catch(function(error) {
    // User couldn't sign in (bad verification code?)
    // ...
});

firebase.auth().signOut().then(function() {
    console.log('Signed out') // Sign-out successful.
}).catch(function(error) {
    console.log('Error in signing out using mobile') // An error happened.
});