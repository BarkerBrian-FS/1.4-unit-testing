
const secureCc = (card) => {
    let secureCc = [];
    if (card.length >= 12 & card.length <= 16){
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
        console.log= "invalid input please try again"
    }
  };

  module.exports = secureCc;