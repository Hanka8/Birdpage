// Detecting click

for (var x = 0; x < document.querySelectorAll(".drum").length; x++) {
  document.querySelectorAll(".drum")[x].addEventListener("click", function() {
    var buttonInnerHTML = this.textContent;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting keyboard press

document.addEventListener("keydown", function(event) {
  // eventListener passes a function whenever the event occurs --> you can pass a parameter "event" which lets us tap into the event that triggers the event listener
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {

    case "w":
      var tom1 = new Audio("sounds/1.mp3");
      tom1.play();
    break;

    case "a":
      var tom2 = new Audio("sounds/knikknikknik.mp3");
      tom2.play();
    break;

    case "s":
      var tom3 = new Audio("sounds/pip.mp3");
      tom3.play();
    break;

    case "d":
      var tom4 = new Audio("sounds/pipi.mp3");
      tom4.play();
    break;

    case "j":
      var crash = new Audio("sounds/short1.mp3");
      crash.play();
    break;

    case "k":
      var kickBass = new Audio("sounds/short2.mp3");
      kickBass.play();
    break;

    case "l":
      var snare = new Audio("sounds/short3.mp3");
      snare.play();
    break;

    default: console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 300)

}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();
