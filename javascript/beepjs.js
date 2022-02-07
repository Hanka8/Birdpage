var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["first", "second", "third", "fourth"];
var level = 0;
var gameStarted = false;

function nextSequence() {
  userClickedPattern = []
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(50).fadeIn(50);
  playSound(randomChosenColour);
  level ++;
  $("h1").text("Level " + level);
}

$(".butt").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout( function () {
      $("#" + currentColour).removeClass("pressed");
    }, 500);
}

if (gameStarted === false) {
  $(document).keydown(function(){
    nextSequence();
    $("h1").text("Level 1")
    gameStarted = true;
  });
  $(".keyDown").click(function(){
    nextSequence();
    $("h1").text("Level 1")
    gameStarted = true;
  });
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("right");
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  gamePattern = [];
  level = 1;
  userClickedPattern = [];
  gameStarted = false;
}
