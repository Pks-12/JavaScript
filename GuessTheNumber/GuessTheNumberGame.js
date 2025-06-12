const secretNumber = 7;
let attempts = 3;
while(attempts>0){
    const guess = parseInt(prompt("Guess the Number 1 to 10"));
       if (guess < 1 || guess > 10 || isNaN(guess)) {
        alert("❗ Please enter a number between 1 and 10!");
        continue; // Skip the rest of the loop and prompt again
    }
    if(guess === secretNumber){
        alert("You win the game!");
        break;
    }
    else{
        attempts--;
        if(attempts>0){
            alert(`Wrong Guess. Try again! Attempts left: ${attempts}`);
        }
        else{
            alert("You loose! No attempts left");
        }
    }
}