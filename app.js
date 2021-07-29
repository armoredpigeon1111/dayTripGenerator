//Day Trip Generator
function runDayTrip(){
    let destinationsArray = ["Myrtle Beach", "the State House", "Charleston", "Six Flags"];
    let restaurantArray = ["McDonald's", "Chilli's", "Wendy's", "KFC"];
    let transportTypeArray = ["bus", "train", "car"];
    let entertainmentArray = ["a movie", "swimming", "bowling"];
    let trip = [getSelection(destinationsArray), getSelection(restaurantArray), getSelection(transportTypeArray),getSelection(entertainmentArray) ]
    initialDayTrip(trip, destinationsArray, restaurantArray, transportTypeArray, entertainmentArray);
}

//Selections array
function getSelection(array){ 
    return array[Math.floor(Math.random() * (array.length))];

}


//Provides prompt with trip details
function initialDayTrip(trip, destinationsArray, restaurantArray, transportTypeArray, entertainmentArray){
let userSatisfied = prompt(`Your trip is to ${trip[0]} where you will eat at ${trip[1]}, travel by ${trip[2]}, and enjoy ${trip[3]}.
Are you satisfied with your trip? Yes or No.`).toLowerCase();

isUserSatisfied(userSatisfied, trip, destinationsArray, restaurantArray, transportTypeArray, entertainmentArray); //invokes user satisfication check
}



//Checks user satisfication
function isUserSatisfied(userSatisfication, trip, destinationsArray, restaurantArray, transportTypeArray, entertainmentArray){
    if(userSatisfication === "no"){
        let userUnsatisfiedWith = prompt("Are you unsatisfied with destination, restaurant, transportation, or entertainment?");

        userSwitch(userUnsatisfiedWith, trip, destinationsArray, restaurantArray, transportTypeArray, entertainmentArray); //invokes user switch to rerandomize selection
    }
    else if(userSatisfication === "yes"){
        console.log(`Your trip is to ${trip[0]} where you will eat at ${trip[1]}, travel by ${trip[2]}, and enjoy ${trip[3]}.`);
    }


}


//Checks user input and rerandomizes user selection
function userSwitch(unsatisfiedItem, trip, destinationsArray, restaurantArray, transportTypeArray, entertainmentArray){
    switch(unsatisfiedItem){
            
        case "destination":
            trip[0] = getSelection(destinationsArray);
            initialDayTrip(trip, destinationsArray, restaurantArray, transportTypeArray, entertainmentArray);
        break;

        case "restaurant":
            trip[1] = getSelection(restaurantArray);
            initialDayTrip(trip, destinationsArray, restaurantArray, transportTypeArray, entertainmentArray);
        break;

        case "transportation":
            trip[2] = getSelection(transportTypeArray);
            initialDayTrip(trip, destinationsArray, restaurantArray, transportTypeArray, entertainmentArray);
        break;

        case "entertainment":
            trip[3] = getSelection(entertainmentArray);
            initialDayTrip(trip, destinationsArray, restaurantArray, transportTypeArray, entertainmentArray);
        break;

        default:
            let userSelection = prompt("Must select destination, restaurant, transportation, or entertainment.");
            userSwitch(userSelection, trip, destinationsArray, restaurantArray, transportTypeArray, entertainmentArray);
    }
}

runDayTrip();
