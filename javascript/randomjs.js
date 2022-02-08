var randomNumber1 = Math.floor(Math.random() * 17) + 1;
var randomNumber2 = Math.floor(Math.random() * 17) + 1;

document.querySelector(".img1").setAttribute("src","css/images/" + randomNumber1 + ".jpg");
document.querySelector(".img2").setAttribute("src","css/images/" + randomNumber2 + ".jpg");

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "You won!";
}
