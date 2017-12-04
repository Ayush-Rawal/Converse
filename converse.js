angular.module("Converse", ["firebase"])
    .controller("Conversations", Conversations)

function Conversations($firebaseArray, $firebaseAuth, $http) {
    var conv = this;
    var auth = $firebaseAuth();
    var database = $firebase.database();
    conv.conversation = $firebaseArray(database.ref(conv.name));

    conv.send = function(t) {
        conv.conversation.$add({ "message": t, "sender": conv.name }) //code to add message to firebase, timestamp to be added later
        conv.text = "";
    }

    conv.login = function() {
            auth.$signInWithPopup("google").then(function(firebaseUser) {
                    console.log("Signed in as:", firebaseUser.user);
                    console.log(firebaseUser.user.displayName)
                    conv.name = firebaseUser.user.displayName;
                }
            }