
let userInput = prompt("enter the day")
switch (userInput) {
    case "mon":
    case "tues":
        console.log("football.");
        break;
    case "thrusday":
    case"friday":
        console.log("volleyball.");
        break;
    case "saturday":
        console.log("no work");
        break;
    case "sunday":
        console.log("play all indoor.");
        break;
    default:
        console.log("Invalid input. Please try again.");
}
