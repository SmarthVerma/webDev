let remains = 10;
const theNumber = Math.floor(Math.random() * 100);
console.log(theNumber);

let guess = document.querySelector(".submit");

function handleClick(event) {
  event.preventDefault();

  let user_guess = guessBox.value;

  if (user_guess === "") {
    alert("Error: Enter your guess.");
  } else if (user_guess < 0 || user_guess > 100) {
    alert("Wrong input. Enter your guess from 0 to 100.");
  } else {
    if (user_guess == theNumber) {
      document.querySelector(".low-high").innerHTML = "YOU WIN!!!";
      // Remove the event listener
      guess.removeEventListener("click", handleClick);
    } else {
      document.querySelector(".prev-guess").innerHTML += `${user_guess} `;
      remains--;
      document.querySelector(".remain").innerHTML = remains;

      if (user_guess < theNumber)
        document.querySelector(".low-high").innerHTML = "high";
      else if (user_guess > theNumber)
        document.querySelector(".low-high").innerHTML = "low";
    }
  }
}

// Add event listener
guess.addEventListener("click", handleClick);
