import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1); //it will generate numbers from 1-10 now
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a number between 1 - 10:",
    },
]);
if (answer.userGuessedNumber > 10) {
    console.log("Please guess the number between the given range.");
}
else if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations. You Guessed the right number. YAYY");
    console.log(`The Random number was actually ${randomNumber} :D `);
}
else {
    console.log("You guessed the wrong number :( ");
    console.log(`The Random number was ${randomNumber}`);
}
