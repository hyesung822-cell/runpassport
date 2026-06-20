function checkCards(user){

const newlyUnlocked = [];

let earnedCards =
user.earnedCards || [];

const totalDistance =
user.distance || 0;

const totalRuns =
user.runs || 0;

const cardRules = [

{
id:"distance_001",
condition: totalDistance >= 5
},

{
id:"distance_002",
condition: totalDistance >= 10
},

{
id:"distance_007",
condition: totalDistance >= 100
},

{
id:"distance_010",
condition: totalDistance >= 1000
},

{
id:"habit_001",
condition: totalRuns >= 1
},

{
id:"habit_003",
condition: totalRuns >= 3
},

{
id:"habit_004",
condition: totalRuns >= 10
},

{
id:"habit_006",
condition: totalRuns >= 30
}

];

cardRules.forEach(card=>{

if(
card.condition &&
!earnedCards.includes(card.id)
){

earnedCards.push(card.id);

newlyUnlocked.push(card.id);

}

});

return {
earnedCards,
newlyUnlocked
};

}