// INITIALIZATION

const rlsync = require("readline-sync");

const MAX_SCORE = 21;
const DEALER_MIN_SCORE = 17;
const GAMES_TO_WIN = 5;

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


function shuffle(deckOfCards) {
  for (let i = deckOfCards.length - 1; i > 0; i -= 1) {
    let j = Math.floor((i + 1) * Math.random());
    [deckOfCards[i], deckOfCards[j]] = [deckOfCards[j], deckOfCards[i]];
  }

  return deckOfCards;
}


function dealTopCard(deck) {
  return deck.pop();
}


function updateCardScore(contestant) {
  let result = 0;
  let aces = 0;
  contestant.cards.forEach(card => {
    result += Number(CARD_VALUES[card[1]]);
    aces += (card[1] === "A") ? 1 : 0;
  });

  while ((result > MAX_SCORE) && (aces > 0)) {
    result -= 10;
    aces -= 1;
  }

  return result;
}


function displayGame(dealer, player, revealAll) {
  console.clear();
  displayIntro(dealer, player);

  displayRowOfCards(player, true);
  console.log("\n");

  displayRowOfCards(dealer, revealAll);
  console.log();
}


function displayIntro(dealer, player) {
  console.log("Welcome to Twenty-One!\n");
  console.log(`We're playing best of ${(GAMES_TO_WIN * 2) - 1}.\nThe current overall score is:\n`);
  console.log(`PLAYER   ${player.matchScore} : ${dealer.matchScore}   DEALER\n`);
}


function displayRowOfCards(contestant, revealAll) {
  let numberOfCards = contestant.cards.length;

  console.log("   \u250C\u2500\u2500\u2500\u2500\u2500\u2510".repeat(numberOfCards));
  console.log("   \u2502     \u2502".repeat(numberOfCards));
  displayValueLine(contestant, revealAll);
  displaySuitsLine(contestant, revealAll);
  console.log("   \u2502     \u2502".repeat(numberOfCards));
  console.log("   \u2514\u2500\u2500\u2500\u2500\u2500\u2518".repeat(numberOfCards));

  console.log(`${contestant.name}'s card score: ${revealAll ? contestant.cardScore : `at least ${Number(CARD_VALUES[contestant.cards[0][1]]) + 1}`}`);
}


function displayValueLine(contestant, revealAll) {
  let line = "";
  let firstCard = true;

  contestant.cards.forEach(card => {
    let value = card[1];

    if (revealAll || firstCard) {
      if (value === "10") {
        line += "   \u2502 1 0 \u2502";
      } else {
        line += `   \u2502  ${value}  \u2502`;
      }
      firstCard = false;
    } else {
      line += "   \u2502     \u2502";
    }
  });

  console.log(line);
}


function displaySuitsLine(contestant, revealAll) {
  let line = "";
  let firstCard = true;

  contestant.cards.forEach(card => {
    let symbol = card[0];

    if (revealAll || firstCard) {
      line += `   \u2502  ${symbol}  \u2502`;
      firstCard = false;
    } else {
      line += "   \u2502     \u2502";
    }
  });

  console.log(line);
}


function hitMe() {
  console.log("Hit or stay? (h/s)");
  let input = getValidAnswer(["h", "s"]);
  return input === "h";
}


function isBust(contestant) {
  return contestant.cardScore > MAX_SCORE;
}


function declareBust(contestant) {
  switch (contestant.name) {
    case "Player":
      console.log("You bust! The house has won this game.\n");
      break;
    case "Dealer":
      console.log("Dealer busts! You have won this game.\n");
      break;
  }
}


function weHaveMatchWinner(contestant1, contestant2) {
  return (contestant1.matchScore >= GAMES_TO_WIN) ||
         (contestant2.matchScore >= GAMES_TO_WIN);
}


function startNextRound() {
  rlsync.question("Press enter to start the next round.");
}


function declareGameWinner(contestant) {
  if (contestant === "push") {
    console.log("Push! No one wins this game.\n");
    return;
  }

  switch (contestant.name) {
    case "Player":
      console.log("You have won this game.\n");
      break;
    case "Dealer":
      console.log("The house has won this game.\n");
      break;
  }

  contestant.matchScore += 1;
}


function compare(contestant1, contestant2, scoreType) {
  if (contestant1[scoreType] === contestant2[scoreType]) return "push";

  return contestant1[scoreType] > contestant2[scoreType] ?
         contestant1 : contestant2;
}


function declareMatchWinner(contestant) {
  switch (contestant.name) {
    case "Player":
      console.log("CONGRATULATIONS!\nYou have won the match.\n");
      break;
    case "Dealer":
      console.log("SORRY,\nbut the house has won the match.\n");
      break;
  }
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

  return answer.toLowerCase();
}


//
// MAIN
// PROGRAM
//

while (true) { // play again loop

  let player = {
    name: "Player",
    matchScore: 0
  };

  let dealer = {
    name: "Dealer",
    matchScore: 0
  };

  while (true) { // game loop

    player.cards = [];
    dealer.cards = [];

    let deck = generateDeck();
    shuffle(deck);

    player.cards.push(dealTopCard(deck));
    dealer.cards.push(dealTopCard(deck));
    player.cards.push(dealTopCard(deck));
    dealer.cards.push(dealTopCard(deck));

    player.cardScore = updateCardScore(player);
    dealer.cardScore = updateCardScore(dealer);

    displayGame(dealer, player, false);

    while (!isBust(player)) { // player loop
      if (hitMe()) {
        player.cards.push(dealTopCard(deck));
        player.cardScore = updateCardScore(player);
        displayGame(dealer, player, false);
        continue;
      }

      break;
    }

    if (isBust(player)) {
      declareBust(player);
      dealer.matchScore += 1;
      if (weHaveMatchWinner(dealer, player)) break;

      startNextRound();
      continue;
    }


    displayGame(dealer, player, true);

    while (dealer.cardScore < DEALER_MIN_SCORE) { // dealer loop
      rlsync.question("Press enter to reveal dealer's next card.");
      dealer.cards.push(dealTopCard(deck));
      dealer.cardScore = updateCardScore(dealer);
      displayGame(dealer, player, true);
    }

    if (isBust(dealer)) {
      declareBust(player);
      player.matchScore += 1;
      if (weHaveMatchWinner(dealer, player)) break;

      startNextRound();
      continue;
    }

    declareGameWinner(compare(player, dealer, "cardScore"));
    if (weHaveMatchWinner(dealer, player)) break;

    startNextRound();
  }

  displayGame(dealer, player, true);
  declareMatchWinner(compare(player, dealer, "matchScore"));

  if (playAgain()) continue;

  break;
}

console.log("\nThanks for playing!\n");