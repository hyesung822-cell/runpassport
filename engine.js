function checkCards(user){

let earnedCards =
user.earnedCards || [];

const totalDistance =
user.distance || 0;

const totalRuns =
user.runs || 0;

/*
거리 카드
*/

if(
totalDistance >= 5 &&
!earnedCards.includes("distance_001")
){
earnedCards.push("distance_001");
}

if(
totalDistance >= 10 &&
!earnedCards.includes("distance_002")
){
earnedCards.push("distance_002");
}

if(
totalDistance >= 100 &&
!earnedCards.includes("distance_007")
){
earnedCards.push("distance_007");
}

if(
totalDistance >= 1000 &&
!earnedCards.includes("distance_010")
){
earnedCards.push("distance_010");
}

/*
습관 카드
*/

if(
totalRuns >= 1 &&
!earnedCards.includes("habit_001")
){
earnedCards.push("habit_001");
}

if(
totalRuns >= 3 &&
!earnedCards.includes("habit_003")
){
earnedCards.push("habit_003");
}

if(
totalRuns >= 10 &&
!earnedCards.includes("habit_004")
){
earnedCards.push("habit_004");
}

if(
totalRuns >= 30 &&
!earnedCards.includes("habit_006")
){
earnedCards.push("habit_006");
}

return earnedCards;

}