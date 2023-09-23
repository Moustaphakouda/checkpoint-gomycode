// question n°1
console.log("hello world");

// question n°2

const port = 3000;
const http = require("http");

http.listen(port,()=> console.log("le server est lancé au port " + port));

//  question n°3

// j'ai deja creer le file name"welcome.txt"

var fs = require("fs");
const { workerData } = require("worker_threads");
 var readdata = function(err,data){
    console.log(data)
}

fs.readFile("welcome.txt",readdata);

// question n°4

// creer le filename
var passwordGenerateur = require("password-generateur")  ;
// dans le terminale installons le generateur de mot de passe
// creer mon generateur de mot de passe
var password = document.getElementById("password");

 function genPassword() {
    //sugerons des mot de passe avec les lettres de l'alphabet et les caracteres
    var editeur = "&é_çà=[123567890#é()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 10;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var NombresLamdar = Math.floor(Math.random() * editeur.length);
   password += editeur.substring(NombresLamdar, NombresLamdar +1);
  }
        document.getElementById("password").value = password;
 }

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  document.execCommand("copier");  
};

// question 5

var email = require( "email-sender")
// installons dans npm