
//Method to generate random number (min and max included)
function randomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
//Greetings Array
var greetings = ["नमस्ते!","Aloha!","Hi!","Hello!","Hola!","Hallo!","Salute!","Halo!","नमस्कार!","Ciao!","Olá!"]

var rand = randomInt(0,greetings.length - 1)

var randomGreeting = greetings[rand];

document.getElementById("greetings").innerHTML = randomGreeting;

