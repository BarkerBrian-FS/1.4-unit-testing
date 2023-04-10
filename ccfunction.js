
function obscureCard(card) {
    if (card.length >= 12 & card.length <= 16){
        let secureCc = [];
        for(let i = 0; i < card.length; i++){
        if(i < card.length-4){
            secureCc.push("*");
        }else{
            secureCc.push(card[i]);
        }
        }
        return secureCc.join("");
    }
    else{
        console.log= "invalid input plese try again"
    }
  }