const emojis = [
  "👍", "👍", "😭", "😭", "💩", "💩", "🤑", "🤑",
  "😍", "😍", "🤮", "🤮", "🤡", "🤡", "🤭", "🤭"
];
let openedCards = [];
let matchedCards = 0;
let attempts = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initializeGame() {
  const gameWrapper = document.querySelector(".game-wrapper");
  gameWrapper.innerHTML = "";
  const shuffledEmojis = shuffleArray([...emojis]);

  shuffledEmojis.forEach((emoji) => {
    const box = document.createElement("div");
    box.className = "card";
    box.innerHTML = emoji;
    box.onclick = handleClick;
    gameWrapper.appendChild(box);
  });

  document.querySelector(".attempts").textContent = `Attempts: 0`;
  document.querySelector(".win-message").style.visibility = "hidden";
  openedCards = [];
  matchedCards = 0;
  attempts = 0;
}

function handleClick() {
  if (openedCards.length < 2 && !this.classList.contains("boxOpen") && !this.classList.contains("boxMatch")) {
    this.classList.add("boxOpen");
    openedCards.push(this);
  }

  if (openedCards.length === 2) {
    attempts++;
    document.querySelector(".attempts").textContent = `Attempts: ${attempts}`;
    setTimeout(checkMatch, 1000);
  }
}

function checkMatch() {
  if (openedCards[0].innerHTML === openedCards[1].innerHTML) {
    openedCards[0].classList.add("boxMatch");
    openedCards[1].classList.add("boxMatch");
    matchedCards += 2;
  } else {
    openedCards[0].classList.remove("boxOpen");
    openedCards[1].classList.remove("boxOpen");
  }

  openedCards = [];

  if (matchedCards === emojis.length) {
    document.querySelector(".win-message").textContent = "You Win!";
    document.querySelector(".win-message").style.visibility = "visible";
  }
}

document.querySelector(".reset-button").addEventListener("click", initializeGame);

initializeGame();
