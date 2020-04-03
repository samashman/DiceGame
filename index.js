class Result {
  constructor(dieValue, image) {
    this.dieValue = dieValue;
    this.image = image;
  }
  getValue() {
    return this.dieValue;
  }
  getImage() {
    return this.image;
  }

}


var dice = ["images/dice1.png", "images/dice2.png", "images/dice3.png",
  "images/dice4.png", "images/dice5.png", "images/dice6.png"
];

function generateDiceValue() {
  var number = Math.floor(Math.random() * 6);
  rollResult = new Result(number, dice[number]);
  return rollResult;
}

function rollDice() {
  var dice1 = generateDiceValue();
  var dice2 = generateDiceValue();
  document.querySelector(".img1").setAttribute("src", dice1.getImage());
  document.querySelector(".img2").setAttribute("src", dice2.getImage());
  if (dice1.getValue() > dice2.getValue()) {
    document.querySelector("h1").textContent = "Player one wins!";
  } else if (dice1.getValue() < dice2.getValue()) {
    document.querySelector("h1").textContent = "Player two wins!";
  } else {
    document.querySelector("h1").textContent = "It's a tie. How Euro."
  }
}
