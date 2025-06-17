let guessBtn = document.getElementById("guess");
let inputVal = document.getElementById("inputVal");
let reset = document.getElementById("reset");
let attempts = document.getElementById("attempts");
let output = document.getElementById("output");
let attemptsCount = 0;

// Reset logic
reset.addEventListener("click", () => {
  inputVal.value = "";
  attemptsCount = 0;
  attempts.textContent = "";
});

// generate a number for user guess 
let generatedNum = Math.floor(Math.random() * 100) + 1;

// Guess logic
guessBtn.addEventListener("click", () => {
  let userGuess = Number(inputVal.value);

  // if userGuess not true the do not  incress attemptsCount 
  if (userGuess) {
    attemptsCount += 1;
  }

  if (userGuess === generatedNum) {
    output.textContent = "🎉 Correct guess!";
  } else if (userGuess > 100) {
    output.textContent = "Please enter valid number between 1 to 100.";
    output.style.color = "red";
  } else if (userGuess > generatedNum) {
    output.textContent = "📈 Too high";
    output.style.color = "green";
  } else if (userGuess < generatedNum && userGuess) {
    output.textContent = "📉 Too low";
    output.style.color = "red";
  } else {
    output.textContent = "Please enter valid number between 1 to 100.";
    output.style.color = "red";
  }

  // show attempts
  if (attemptsCount >= 11) {
    attempts.textContent = `Game Over`;
    attempts.style.color = "red";
  } else {
    userGuess ? (attempts.textContent = `Attempts: ${attemptsCount}`) : null;
  }

  // show reset btn
  if (attemptsCount >= 1) {
    reset.style.display = "block";
  }
});
