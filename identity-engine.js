function checkIdentities(
user,
identities
){

let unlocked =
user.unlockedIdentities || [];

identities.forEach(identity=>{

if(
!identity.requiredCards
)
return;

const completed =
identity.requiredCards.every(
cardId=>
user.earnedCards.includes(cardId)
);

if(
completed &&
!unlocked.includes(identity.id)
){
unlocked.push(identity.id);
}

});

return unlocked;

}