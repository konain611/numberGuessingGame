import inquirer from "inquirer";

const randomNumber = Math.random();

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a number",
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulations. You Guessed the right number. YAYY");
    
}
else{
    console.log("You guessed the wrong number :( ");
    
}