var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

var image = "images/dice";
var png = ".png";

var value1 = image + randomNumber1 + png;
var value2 = image + randomNumber2 + png;

document.querySelectorAll("img")[0].setAttribute("src", value1);

document.querySelectorAll("img")[1].setAttribute("src", value2);



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}