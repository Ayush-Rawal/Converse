angular.module("login", ["firebase"])
    .controller("login", login)


logingoogle = function() {
    auth.$signInWithPopup("google").then(function(firebaseUser) {
        console.log("Signed in as:", firebaseUser.user);
        console.log(firebaseUser.user.displayName);
        conv.name = firebaseUser.user.displayName;
    }).catch(function(error) {
        console.log("Authentication failed:", error);
    });
}

loginphone = function() {

}

loginemail = function() {

}