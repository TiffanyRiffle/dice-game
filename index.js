
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDice1 = "images/dice" + randomNumber1 + ".png";

document.getElementsByClassName("img1")[0].setAttribute("src", randomDice1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "images/dice" + randomNumber2 + ".png";

document.getElementsByClassName("img2")[0].setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "🚩Player 1 wins!";
  } else if
(randomNumber2 > randomNumber1) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins!🚩";
} else if
(randomNumber1 = randomNumber2 ){
document.getElementsByTagName("h1")[0].innerHTML = "It's a tie!";
}
