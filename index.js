const prompt = require('prompt-sync')({ sigint: true });
const { getPoint, displayCard, calPoint } = require('./util');
let isFinished = false
let totalBet = 0

while (!isFinished) {
   let bet = prompt('Please put your bet ');
   bet = Number(bet)
   if (isNaN(bet)) {
      throw new Error('Please fill number only')
   }

   const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
   const faces = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']

   let deck = []

   //Place cards
   for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < faces.length; x++) {
         let card = { face: faces[x], suit: suits[i] };
         deck.push(card);
      }
   }

   //Shuffle cards
   for (let i = deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
   }

   let yourFirstCard = deck[Math.floor(Math.random() * (deck.length - 1))]
   let yourSecondCard = deck[Math.floor(Math.random() * (deck.length - 1))]

   let dealerFirstCard = deck[deck.length - 1]
   let dealderSecondCard = deck[deck.length - 2]

   const dealerPoints = calPoint(getPoint(dealerFirstCard) + getPoint(dealderSecondCard))
   const yourPoints = calPoint(getPoint(yourFirstCard) + getPoint(yourSecondCard))

   console.log(`You got ${displayCard(yourFirstCard)}, ${displayCard(yourSecondCard)} => your point is ${yourPoints}`)
   console.log(`The dealer got ${displayCard(dealerFirstCard)}, ${displayCard(dealderSecondCard)} => dealer point is ${dealerPoints}`)

   if (yourPoints === dealerPoints) {
      console.log('You tie!!! better luck next time.')
   } else if (yourPoints > dealerPoints) {
      console.log(`You won!!!, received ${bet} chips`)
      totalBet += bet
   } else {
      console.log(`You lost!!!, lose ${bet} chips`)
      totalBet -= bet
   }

   let isAnsValid = false
   //Check if answer is valid
   while (!isAnsValid) {
      let isPlayAgain = prompt('Wanna play more(Y/N)? ');
      if (isPlayAgain.toUpperCase() == 'N') {
         isFinished = true
         isAnsValid = true
      } else if (isPlayAgain.toUpperCase() == 'Y') {
         isFinished = false
         isAnsValid = true
      }
   }
}
console.log(`You got total ${totalBet} chips`)

