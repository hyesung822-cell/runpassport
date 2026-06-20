function checkCards(user){

const earned =
user.earnedCards || [];

const totalDistance =
user.distance || 0;

if(
totalDistance >= 5 &&
!earned.includes("distance_001")
){
earned.push("distance_001");
}

if(
totalDistance >= 10 &&
!earned.includes("distance_002")
){
earned.push("distance_002");
}

if(
totalDistance >= 100 &&
!earned.includes("distance_007")
){
earned.push("distance_007");
}

if(
totalDistance >= 1000 &&
!earned.includes("distance_010")
){
earned.push("distance_010");
}

return earned;

}
