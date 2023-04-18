const carta = [
  { valor: 1, name: "as" },
  { valor: 2, name: "dos" },
  { valor: 3, name: "tres" },
  { valor: 4, name: "cuatro" },
  { valor: 5, name: "cinco" },
  { valor: 6, name: "seis" },
  { valor: 7, name: "siete" },
  { valor: 8, name: "ocho" },
  { valor: 9, name: "nueve" },
  { valor: 10, name: "diez" },
  { valor: 11, name: "jota" },
  { valor: 12, name: "reina" },
  { valor: 13, name: "rey" },
];

const deck = [];

const totalDeck = (palo) => {
  for (i = 0; i < 13; i++) {
    deck.push({
      symbol: palo,
      valor: carta[i].valor,
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
