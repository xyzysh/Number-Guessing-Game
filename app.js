let btn = document.querySelector("button");

btn.addEventListener("click", function () {


    let max = prompt("Enter the max number:");
    max = parseInt(max);


    while (isNaN(max)) {
        alert("Input should be an Integer or Number. Please try again!");
        max = prompt("Enter the max number (Integer value):");
    };


    const random = Math.floor(Math.random() * max) + 1;
    let i = 0;
    let j = 0;
    let guess = prompt(`Guess the Number:`);
    guess = parseInt(guess);



    while (true) {
        if (guess == "quit") {
            console.log("User quit.");
            console.log(`The correct answer is ${random}`);
            console.log(`Attempts: ${i}`);
            break;
        }

        if (guess == random) {
            console.log("Congratulations ! You won.");
            console.log(`Attempts: ${i + 1}, The correct answer is ${random}`);
            break;

        }
        else if (guess < random) {
            guess = prompt("Your guess is small than the number. Please Try Again !");
            i++;
        }
        else if (guess > max) {
            alert(`Entering Wrong number could let you kick out of the game.                 Invaild attempts : ${j + 1}       Max: 5`);
            guess = prompt(`Value is Greater than max value. Please Try Again.`);
            j++;
            if (j == 4) {
                console.log("You Loose.");
                console.log("You've reached your max invalid attempts.")
                break;
            }
        } else {
            guess = prompt("Your guess is Bigger than the number. Please Try Again !");
            i++;
        }
    }
})


