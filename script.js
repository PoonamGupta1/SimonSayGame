let body = document.querySelector("body");
let h2 = document.querySelector("h2");
let btnContainer = document.querySelector(".btn-container");
let btn = ["red", "yellow", "green", "blue"];
let gameSequence = [];
let userSequenec = [];

let started = false;
let level = 0;
body.addEventListener("keypress", function (event) {
  if (!started) {
    started = true;
    levelUp();
  }
});

function levelUp() {
  userSequenec = [];
  level++;
  h2.innerText = `Level ${level}`;
  let choose = Math.floor(Math.random() * 3);
  let color = btn[choose];
  let btnd = document.querySelector(`.${color}`);
  gameSequence.push(color);
  console.log(gameSequence);
  buttonFlash(btnd);
}

function buttonFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 200);
}

function buttonPress(btn) {
  let userColor = this.getAttribute("id");
  userSequenec.push(userColor);
  userFlash(this);
  checkAns(userSequenec.length - 1);
}
let scoreCount = [];
function checkAns(idx) {
  if (userSequenec[idx] === gameSequence[idx]) {
    if (userSequenec.length === gameSequence.length) {
      setTimeout(() => {
        levelUp();
      }, 200);
    }
  } else {
    scoreCount.push(level);
    h2.innerHTML = `GAME OVER! <b>Your Score was ${level} </b> <br> Highest Score ${Math.max(...scoreCount)} <br>Press any key to start.`;
    body.classList.add("gameOver");
    setTimeout(() => {
      body.classList.remove("gameOver");
    }, 200);
    reset();
  }
}

function reset() {
  started = false;
  level = 0;
  userSequenec = [];
  gameSequence = [];
}

let btnHere = document.querySelectorAll(".btn");

for (btnPress of btnHere) {
  btnPress.addEventListener("click", buttonPress);
}
