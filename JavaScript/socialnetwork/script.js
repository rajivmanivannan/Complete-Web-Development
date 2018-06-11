var database = [{
    username: "john",
    password: "admin"
}, {
    userName: "jack",
    password: "admin"
}];

var newsFeed = [{
    username: "John",
    timeLine: "JavaScript is Awesome."
}, {
    userName: "Jack",
    timeLine: "Kotlin is Elegant"
}];

var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

function isValidUser(username,password){
    for(var i=0;i< database.length;i++){
     if(username === database[i].username && password === database[i].password){
     return true;
     }else{
         return false;
     }
    }
}

function signIn(username, password) {
    if (isValidUser(username,password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }

}

signIn(userNamePrompt, passwordPrompt);