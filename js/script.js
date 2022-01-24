//gobal and local scope (functional scope)

var myName = "Isac";
function login(arg) {
    return myName = arg;
}
var someVar = login("morten");
console.log(someVar);
console.log(myName)


//
var myName = "isac"; 
    function login(arg) {
        return myName = arg;
    
}
var someVar = login("killer");
console.log(someVar)

//
var enterSite = function (){
    console.log("hello you have enterd the website")

}
//exmample callback function
function loginInToSite(arg){
    arg();
}

loginInToSite(enterSite);

//assign a function to a variabel
var login = function (name){
    console.log("you may login: ", name)
}

function login (name){
    console.log("you may login: ", name)
}

//example 4
var user = {
    name: "isac holstad",
    job: "developer",
    login: function (name){
        console.log("hello name is ", name)
    }
}

console.log("my user object: ", user);
console.log("name: ",user.name);

user.login("isac");

//console.dir(window);

console.dir(window);

//let and const

//const count = 1;
//count = 2;
//count = count + 99;
//console.log("my count is equal to: ", count);


//let count = 1;
//count = 2;
//count = count + 1;

//console.log("your count is equal to: ",count);

//let
let pet = "dog"
pet = "new dog"
console.dir(pet)

//object with const
const profile = {
    job:"developer",
    name:"isac",
    lastname:"holstad",
    age:"19",
    height:"187cm",
}
console.dir(profile.name);
console.dir(profile.job);
console.dir(profile.lastname);
console.dir(profile.age);
console.dir(profile.height);

//ES6 strings using backticks
//const sentence = 'one.
//two';
//console.log(sentence)

console.dir(document)
