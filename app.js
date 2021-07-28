//Day Trip Generator


//Selections arrays
let destinationsArray = ["Myrtle Beach", "State House", "Charleston", "Six Flags"];
let restaurantArray = ["McDonald's", "Chilli's", "Wendy's", "KFC"];
let transportTypeArray = ["Bus", "Train", "Car"];
let entertainmentArray = ["Movie", "Swimming", "Bowling"];



//selects a random destination
function selectDestination(destArray){ 
    let destination = destArray[Math.floor(Math.random() * (destArray.length))];

    console.log(destination); //for testing
}


//Selects a random restaurant
function selectRestaurant(restArray){ 
    let restaurant = restArray[Math.floor(Math.random() * (restArray.length))];

    console.log(restaurant); //for testing
}


//Selects mode of transportation randomly
function selectTransportation(transportArray){
    let transport = transportArray[Math.floor(Math.random()* (transportArray.length))];

    console.log(transport); //for testing
}


//Selects random entertainment
function selectEntertainment(entertainArray){
    let entertainment = entertainArray[Math.floor(Math.random() * (entertainArray.length))];

    console.log(entertainment);
}


selectDestination(destinationsArray);
selectRestaurant(restaurantArray);
selectTransportation(transportTypeArray);
selectEntertainment(entertainmentArray);