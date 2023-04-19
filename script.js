let playerCard = document.querySelector(".player-Card");
let computerCard = document.querySelector(".computer-Card");
let higher = document.querySelector(".higher");
const lower = document.querySelector(".lower");

let playerCard = "";
let computerCard = "";
let higher = "";
let lower = "";

const carta = [
  { value: 1, name: "as" },
  { value: 2, name: "dos" },
  { value: 3, name: "tres" },
  { value: 4, name: "cuatro" },
  { value: 5, name: "cinco" },
  { value: 6, name: "seis" },
  { value: 7, name: "siete" },
  { value: 8, name: "ocho" },
  { value: 9, name: "nueve" },
  { value: 10, name: "diez" },
  { value: 11, name: "jota" },
  { value: 12, name: "reina" },
  { value: 13, name: "rey" },
];

const deck = [];

const totalDeck = (suit) => {
  for (i = 0; i < 13; i++) {
    deck.push({
      symbol: suit,
      valor: carta[i].value,
      name: carta[i].name,
    });
  }
};

totalDeck("heart");
totalDeck("spades");
totalDeck("clovers");
totalDeck("diamonds");

const randomCard1 = Math.floor(Math.random() * 52);
const randomCard2 = Math.floor(Math.random() * 52);

//console.log(deck[randomCard]);
//console.log(randomCard);

const myCard = deck[randomCard1];
const computerCard = deck[randomCard2];

console.log(myCard);
console.log(computerCard);

const playGame = () => {
  alert(`Your card is the ${myCard.symbol} of ${myCard.name}`);

  let decision = prompt(`If you think the hidden card is bigger write "B",\n
  but if you think is smaller write "S"`);

  if (myCard.valor < computerCard.valor) {
    alert("Bien, es mayor");
  } else {
    alert("Mal, es menor");
  }
};

//1. Que recibe?
//2. Va a devolver algo? si es mayor o menor (true o false)
//3. Qué hace dentro? Qué responsabilidades tiene?

playGame();

const displaynNumber = () => 
  playerCard.innerText= ;
  playerCard = myCard.valor;


restart.addEventListener("click", () => {
  counterDisplay = 0;
  counter.textContent = counterDisplay;
});
