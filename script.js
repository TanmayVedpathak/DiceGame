var plyCount1 = 0;
var plyCount2 = 0;
let scoreInner = document.getElementById("score");
const dice = document.getElementsByClassName("dice");

function random() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  document.getElementById("img1").src = randomImageSource1;

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.getElementById("img2").src = randomImageSource2;

  if (randomNumber1 > randomNumber2) {
    // document.querySelector("h2").innerHTML = "🥇 Player 1 Wins!";
    plyCount1++;
    document.getElementById("ply1").innerHTML = plyCount1;
    document.getElementById("ply2").innerHTML = plyCount2;
    scoreInner.innerHTML += "<br/> " + plyCount1 + "-" + plyCount2;
    dice[0].style.boxShadow = "0px 0px 5px 5px green";
    dice[1].style.boxShadow = "0px 0px 5px 5px red";
  } else if (randomNumber2 > randomNumber1) {
    // document.querySelector("h2").innerHTML = "Player 2 Wins! 🥇";
    plyCount2++;
    document.getElementById("ply1").innerHTML = plyCount1;
    document.getElementById("ply2").innerHTML = plyCount2;
    scoreInner.innerHTML += "<br/> " + plyCount1 + "-" + plyCount2;
    dice[0].style.boxShadow = "0px 0px 5px 5px red";
    dice[1].style.boxShadow = "0px 0px 5px 5px green";
  } else {
    // document.querySelector("h2").innerHTML = "🏅 Draw! 🏅";
    document.getElementById("ply1").innerHTML = plyCount1;
    document.getElementById("ply2").innerHTML = plyCount2;
    scoreInner.innerHTML += "<br/> " + plyCount1 + "-" + plyCount2;
    dice[0].style.boxShadow = "0px 0px 5px 5px aqua";
    dice[1].style.boxShadow = "0px 0px 5px 5px aqua";
  }
}

function refreshPage() {
  plyCount1 = 0;
  plyCount2 = 0;
  // document.querySelector("h2").innerHTML = "Go!";
  document.getElementById("ply1").innerHTML = plyCount1;
  document.getElementById("ply2").innerHTML = plyCount2;
  document.getElementById("img1").src = "images/square-256.png";
  document.getElementById("img2").src = "images/square-256.png";
  scoreInner.innerHTML = "LEADER BOARD";
  dice[0].style.boxShadow = "0px 0px 5px 5px var(--shadow)";
  dice[1].style.boxShadow = "0px 0px 5px 5px var(--shadow)";
}

document.addEventListener("keypress", function (event) {
  // console.log(event);
  if (event.key === " ") {
    random();
  }
  if (event.key === "r") {
    refreshPage();
  }
});

var theme = document.getElementById("theme");
theme.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    document.querySelector("i").className = "fas fa-moon";
  } else {
    document.querySelector("i").className = "far fa-sun";
  }
};
