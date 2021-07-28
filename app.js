//Day Trip Generator


//Selections arrays
let destinationsArray = ["Myrtle Beach", "the State House", "Charleston", "Six Flags"];
let restaurantArray = ["McDonald's", "Chilli's", "Wendy's", "KFC"];
let transportTypeArray = ["bus", "train", "car"];
let entertainmentArray = ["a movie", "swimming", "bowling"];



//selects a random destination
function selectDestination(destArray){ 
    let destination = destArray[Math.floor(Math.random() * (destArray.length))];

    return destination;
}


//Selects a random restaurant
function selectRestaurant(restArray){ 
    let restaurant = restArray[Math.floor(Math.random() * (restArray.length))];

    return restaurant;
}


//Selects mode of transportation randomly
function selectTransportation(transportArray){
    let transport = transportArray[Math.floor(Math.random()* (transportArray.length))];

    return transport;
}


//Selects random entertainment
function selectEntertainment(entertainArray){
    let entertainment = entertainArray[Math.floor(Math.random() * (entertainArray.length))];

    return entertainment;
}

//Sets random selections
let destination = selectDestination(destinationsArray);
let restaurant = selectRestaurant(restaurantArray);
let transportation = selectTransportation(transportTypeArray);
let entertainment = selectEntertainment(entertainmentArray);


//Provides prompt with trip details
function initialDayTrip(){
let userSatisfied = prompt(`Your trip is to ${destination} where you will eat at ${restaurant}, travel by ${transportation}, and enjoy ${entertainment}.
Are you satisfied with your trip? Yes or No.`).toLowerCase();

isUserSatisfied(userSatisfied); //invokes user satisfication check
}



//Checks user satisfication
function isUserSatisfied(userSatisfication){
    if(userSatisfication === "no"){
        let userUnsatisfiedWith = prompt("Are you unsatisfied with destination, restaurant, transportation, or entertainment?");

        userSwitch(userUnsatisfiedWith); //invokes user switch to rerandomize selection
    }
    else if(userSatisfication === "yes"){
        console.log(`Your trip is to ${destination} where you will eat at ${restaurant}, travel by ${transportation}, and enjoy ${entertainment}.`);
    }


}


function userSwitch(unsatisfiedItem){
    switch(unsatisfiedItem){
            
        case "destination":
            destination = selectDestination(destinationsArray);
            initialDayTrip();
        break;

        case "restaurant":
            restaurant = selectRestaurant(restaurantArray);
            initialDayTrip();
        break;

        case "transportation":
            transportation = selectTransportation(transportTypeArray);
            initialDayTrip();
        break;

        case "entertainment":
            entertainment = selectEntertainment(entertainmentArray);
            initialDayTrip();
        break;

        default:
            let userSelection = prompt("Must select destination, restaurant, transportation, or entertainment.");
            userSwitch(userSelection);
    }
}

initialDayTrip();
