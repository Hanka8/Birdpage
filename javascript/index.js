var myArray = [1, "beep", "first", "fourth", "knikknikknik", "pip", "pipi", "second", "short1", "short2", "short3", "third", "zpev"];
var randomSound = myArray[Math.floor(Math.random()*myArray.length)];
var randomSound2 = myArray[Math.floor(Math.random()*myArray.length)];

var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$("h1").click(function(){
  $("h1").fadeOut(100).fadeIn(100)
});

$(".birbImg").click(function(){
  playSound(randomSound)
});

$(".birbImg2").click(function(){
  playSound(randomSound2)
});
