// INITIALIZATION

const rlsync = require("readline-sync");

const MAX_SCORE = 21;
const DEALER_MIN_SCORE = 17;

const SUIT_SYMOBLS = {
  Clubs: "\u2663",
  Spades: "\u2660",
  Hearts: "\u2665",
  Diamonds: "\u2666"
};

const CARD_VALUES = {
   2: "2",
   3: "3",
   4: "4",
   5: "5",
   6: "6",
   7: "7",
   8: "8",
   9: "9",
  10: "10",
   J: "10",
   Q: "10",
   K: "10",
   A: "11"
};


// FUNCTION
// DEFINITIONS

function generateDeck() {
  let result = [];
  for (let suit in SUIT_SYMOBLS) {
    for (let card in CARD_VALUES) {
      result.push([SUIT_SYMOBLS[suit], card]);
    }
  }
  return result;
}


function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i -= 1) {
    let j = Math.floor((i + 1) * Math.random());
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}


function deal(deck, contestant) {
  return contestant.cards.push(deck.pop());
}


function dealFirstFour(deck, contestant1, contestant2) {
  deal(deck, contestant1);
  deal(deck, contestant2);
  deal(deck, contestant1);
  deal(deck, contestant2);
}


function score(contestant) {
  let result = 0;
  let aces = 0;
  contestant.cards.forEach(card => {
    result += Number(CARD_VALUES[card[1]]);
    aces += (card[1] === "A") ? 1 : 0;
  });
  while ((result > 21) && (aces > 0)) {
    result -= 10;
    aces -= 1;
  }
  return result;
}


function displayCards(contestant1, contestant2, revealDealer) {
  console.clear();
  console.log("welcome to Twenty-One!\n");
  displayRowOfCards(contestant1, revealDealer);
  console.log("\n");
  displayRowOfCards(contestant2, true);
  console.log();
}

// eslint-disable-next-line max-lines-per-function, max-statements
function displayRowOfCards(contestant, revealDealer) {
  let line1 = "";
  let line2 = "";
  let line3 = "";
  let line4 = "";
  for (let i = 0; i < contestant.cards.length; i += 1) {
    line1 += "+-----+   ";
    line2 += "|     |   ";
    line3 += (revealDealer || (i === 0)) ?
             `| ${contestant.cards[i][1] === "10" ? "1 0" : ` ${contestant.cards[i][1]} `} |   ` :
             "|     |   ";
    line4 += (revealDealer || (i === 0)) ?
             `|  ${contestant.cards[i][0]}  |   ` :
             "|     |   ";
  }
  console.log(`${contestant.name}'s score: ${revealDealer ? score(contestant) : "Unknown."}\n`);
  console.log(line1);
  console.log(line2);
  console.log(line3);
  console.log(line4);
  console.log(line2);
  console.log(line1);
}


function compare(contestant1, contestant2) {
  return score(contestant1) > score(contestant2) ? contestant1 : contestant2;
}


function declareWinner(contestant) {
  switch (contestant.name) {
    case "Player":
      console.log("CONGRATULATIONS! You have won!\n");
      break;
    case "Dealer":
      console.log("SORRY, the house has won.\n");
  }
}


function bust(contestant) {
  if (score(contestant) > MAX_SCORE) {
    switch (contestant.name) {
      case "Player":
        console.log("You're bust! Sorry, the house has won.\n");
        return true;
      case "Dealer":
        console.log("Dealer's bust! Good for you, you have won.\n");
        return true;
    }
  }
  return false;
}


function hitMe() {
  console.log("Hit or stay? (h/s)");
  let input = getValidAnswer(["h", "s"]);
  return input === "h";
}


function playAgain() {
  console.log("Do you want to play again? (y/n)");
  let input = getValidAnswer(["y", "n"]);
  return input === "y";
}


// Player input handling


function joinOr(arr, delimiter = ", ", word = "or") {
  if (arr.length === 2) {
    return `${arr[0]} ${word} ${arr[1]}`;
  }

  let result = "";
  for (let index = 0; index < arr.length - 1; index += 1) {
    result += arr[index] + delimiter;
  }
  result += word + " " + arr[arr.length - 1];

  return result;
}


function getValidAnswer(allowedAnswers) {
  let answer = rlsync.question("> ").trim();

  while (!allowedAnswers.includes(answer.toLowerCase())) {
    console.log(`Please enter ${joinOr(allowedAnswers)}.`);
    answer = rlsync.question("> ").trim();
  }

  return answer;
}


//
// MAIN
// PROGRAM
//

while (true) { // play again loop

  while (true) { // game loop

    let deck = generateDeck();
    shuffle(deck);

    let player = {
      name: "Player",
      cards: []
    };

    let dealer = {
      name: "Dealer",
      cards: []
    };

    dealFirstFour(deck, player, dealer);
    displayCards(dealer, player, false);

    while (score(player) < MAX_SCORE) { // player loop
      if (hitMe()) {
        deal(deck, player);
        displayCards(dealer, player, false);
      } else {
        break;
      }
    }

    if (bust(player)) break;

    // rlsync.question("Press enter to reveal dealer's second card.");

    displayCards(dealer, player, true);

    while (score(dealer) < DEALER_MIN_SCORE) { // dealer loop
      rlsync.question("Press enter for dealer's next card.");
      deal(deck, dealer);
      displayCards(dealer, player, true);
    }

    if (bust(dealer)) break;

    declareWinner(compare(player, dealer));

    break;
  }

  if (playAgain()) continue;

  break;
}

console.log("\nThanks for playing!\n");
