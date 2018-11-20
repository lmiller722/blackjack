function hitCard();
function stay();

var playerHand;
var dealerUpcard;

switch(playerHand) {
     case (playerHand === 21):
        console.log('Blackjack!');
        break;
    default:
        console.log("Bust!");
        break;
    case (playerHand <= 8):
        hitCard();
        break;
    case (playerHand === 9 && dealerUpcard >= 7):
        hitCard();
        break;
    case (playerHand === 9 && dealerUpcard <= 2):
        hitCard();
        break;
    case (playerHand === 10 || playerHand === 11):
        hitCard();
        break;
    case (playerHand === 12 && dealerUpcard <= 6 && dealerUpcard >= 4):
        stay();
        break;
    case (playerHand === 12):
        stay();
        break;
    case (playerHand >= 13 && playerHand < 17 && dealerUpcard <= 6):
        stay();
        break;
    case (playerHand >= 13 && playerHand < 17 && dealerUpcard > 6):
        hitCard();
        break;
    case (playerHand === 17):
        stay();
        break;
   
}