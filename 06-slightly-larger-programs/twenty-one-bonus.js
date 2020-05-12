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


function shuffle(deck) {
  for (let i = deck.length - 1; i > 0; i -= 1) {
    let j = Math.floor((i + 1) * Math.random());
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}


function dealFirstFour(deck, contestant1, contestant2) {
  deal(deck, contestant1);
  deal(deck, contestant2);
  deal(deck, contestant1);
  deal(deck, contestant2);
}


function deal(deck, contestant) {
  return contestant.cards.push(deck.pop());
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

  contestant.cardScore = result;
}


function displayGame(dealer, player, revealAll) {
  console.clear();
  displayIntro(dealer, player);

  displayRowOfCards(dealer, revealAll);
  console.log("\n");

  displayRowOfCards(player, true);
  console.log();
}


function displayIntro(dealer, player) {
  console.log("Welcome to Twenty-One!\n");
  console.log(`We're playing best of ${(GAMES_TO_WIN * 2) - 1}.\nThe current overall score is:\n`);
  console.log(`PLAYER   ${player.matchScore} : ${dealer.matchScore}   DEALER\n`);
}


function displayRowOfCards(contestant, revealAll) {
  let numberOfCards = contestant.cards.length;

  console.log("   +-----+".repeat(numberOfCards));
  console.log("   |     |".repeat(numberOfCards));
  displayValueLine(contestant, revealAll);
  displaySuitsLine(contestant, revealAll);
  console.log("   |     |".repeat(numberOfCards));
  console.log("   +-----+".repeat(numberOfCards));

  console.log(`${contestant.name}'s card score: ${revealAll ? contestant.cardScore : `at least ${Number(CARD_VALUES[contestant.cards[0][1]]) + 1}`}`);
}


function displayValueLine(contestant, revealAll) {
  let line = "";
  for (let i = 0; i < contestant.cards.length; i += 1) {
    line += (revealAll || (i === 0)) ?
                  `   | ${contestant.cards[i][1] === "10" ? "1 0" : ` ${contestant.cards[i][1]} `} |` :
                  "   |     |";
  }
  console.log(line);
}


function displaySuitsLine(contestant, revealAll) {
  let line = "";
  for (let i = 0; i < contestant.cards.length; i += 1) {
    line += (revealAll || (i === 0)) ?
            `   |  ${contestant.cards[i][0]}  |` :
            "   |     |";
  }
  console.log(line);
}


function hitMe() {
  console.log("Hit or stay? (h/s)");
  let input = getValidAnswer(["h", "s"]);
  return input === "h";
}


function bust(contestant) {
  if (contestant.cardScore > MAX_SCORE) {
    switch (contestant.name) {
      case "Player":
        console.log("You bust! The house has won this game.\n");
        return true;
      case "Dealer":
        console.log("Dealer busts! You have won this game.\n");
        return true;
    }
  }
  return false;
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
    return null;
  }

  switch (contestant.name) {
    case "Player":
      console.log("You have won this game.\n");
      break;
    case "Dealer":
      console.log("The house has won this game.\n");
  }

  contestant.matchScore += 1;
  return null;
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

  return answer;
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

    dealFirstFour(deck, player, dealer);
    updateCardScore(player);
    updateCardScore(dealer);
    displayGame(dealer, player, false);

    while (player.cardScore <= MAX_SCORE) { // player loop
      if (hitMe()) {
        deal(deck, player);
        updateCardScore(player);
        displayGame(dealer, player, false);
        continue;
      }

      break;
    }

    if (bust(player)) {
      dealer.matchScore += 1;
      if (weHaveMatchWinner(dealer, player)) break;

      startNextRound();
      continue;
    }


    displayGame(dealer, player, true);

    while (dealer.cardScore < DEALER_MIN_SCORE) { // dealer loop
      rlsync.question("Press enter to reveal dealer's next card.");
      deal(deck, dealer);
      updateCardScore(dealer);
      displayGame(dealer, player, true);
    }

    if (bust(dealer)) {
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