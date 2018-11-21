
switch(playerHand) {
     case (playerHand > 21):
        //card values = 0;
        break;

    case (playerHand <= 8):
        hitCard();
        break;
    case (playerHand === 9):                                        //double down 9-11
        if (dealerUpcard >= 7 || dealerUpcard === 2){
            hitCard();
        }
        else {
            stay();
        }     
        break;
    
    case (playerHand === 10):
        if (dealerUpcard <= 9){
        hitCard();
        }
        else {
            stay();
        }
        break;
    
    case (playerHand === 11):
        stay();
        break;
    
    case (playerHand === 12):
        if (dealerUpcard >= 7 || dealerUpcard <= 3){
            hitCard();
        }
        else {
            stay();
        }
        break;
   
   
    case (playerHand >= 13 && playerHand < 17):
        if (dealerUpcard <= 6){
            stay();
        }    
        else {
            hitCard();
        }
        break;
    
    hitCard();
        break;
    case (playerHand === 17):
        stay();
        break;
   
}