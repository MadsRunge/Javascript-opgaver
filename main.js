//HandIn opgaver

// 1 - What to wear?
//Create a function (that you have to name) that has temperature as parameter.
// Based on the temperature it should return a string with what the user should wear. You decide what the user should wear based on the temperature.

function clothesToWear(temperature){
    if (temperature > 15){
        return "Shorts and a t-shirt"
    }else if (temperature < 15){
        return "Jacket and pants"
    }
}

console.log(clothesToWear(1))



// 2 - dice game Part 1 and 2

function rollDice(numOfRolls) {
    let amountOfSix = 0
    for (let i = 0; i < numOfRolls; i++) {
        let randomNumber = Math.floor(Math.random()*6) + 1

        if (randomNumber === 6)
            console.log("You just hit "+randomNumber+"!")
        else
            console.log("You hit "+randomNumber+"... try again.");

        if (randomNumber === 6) {
            amountOfSix++
            if (amountOfSix === numOfRolls)
                console.log("JACKPOT");
        }

    }

}
rollDice(2)


// 3 -  Build a sentiment analyzer

function getSentimentScore(string){
    let lowercaseString = string.toLowerCase()
    let splitString = lowercaseString.split(" ");
    let score = 0

    for (let i = 0; i < splitString.length; i++) {
        if (splitString.includes(["happy", "awesome", "super"])){
            return  score++
        }else if (splitString.includes(["boring", "fucking", "looser"])){
            return score--
        }

    }
    return `score ${score}`



}


console.log(getSentimentScore("i am mega super awesome happy"))