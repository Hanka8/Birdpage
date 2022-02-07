var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 100);
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
  playSound("beep")
});

function clickFunction() {
  var img = document.getElementById("clickIt");
  img.setAttribute("class", "rotated-image");
}
