class Deck{
    constructor(nbAttributes=4){
        this.allCards=this.createCards(nbAttributes);// All the cards in the game
        this.remainingCards=this.allCards;// cards in the stack
        this.outputCards=[];// 12 cards lay on the table 
        this.setMade=[];// array with all the set already mades (array of set)
        //this.createDeck();
    }
    createDeck(){
        for (let i=0; i<12; i++){
            const rand = this.getRandCard();
            this.outputCards.push(this.remainingCards[rand]);
            this.remainingCards.splice(rand,1);
        }
    }
    getRandCard(){
        const random = Math.floor(Math.random() * this.remainingCards.length);
        return random;
    }
    /**
     * 
     * @param {*} nbAttributes : attributes of the card, by default = 4 
     * @returns all cards: 81 in case of 4 attributes and 1224
     */
    createCards(nbAttributes){
        const tabColor = ['red','purple','green','blue','orange'];
        const tabNumber = [1,2,3,4,5];
        const tabShape = ['diamond','oval','wave','star','circle'];
        const tabFilling = ['empty','stripped','full','pointed','squared'];
        const tabOutline = ['full','dotted ','aa','bb','cc'];
        let tabOfAllCards=[];
        for (let c=0; c<nbAttributes-1; c++){
            for (let n=0; n<nbAttributes-1; n++){
                for (let s=0; s<nbAttributes-1; s++){
                    for (let f=0; f<nbAttributes-1; f++){
                        if(nbAttributes==4){
                            tabOfAllCards.push(new Card(tabColor[c],tabNumber[n],tabShape[s],tabFilling[f]));
                        }
                        else{
                            for(let o=0;o<nbAttributes-1;o++){
                                tabOfAllCards.push(new Card5(tabColor[c],tabNumber[n],tabShape[s],tabFilling[f],tabOutline[o]));
                            }
                        }
                    }
                }
            }
        }
        return tabOfAllCards;
    }
    checkSet(selectedCards){
        if(true){//isSet(selectedCards)){
            selectedCards.forEach(e => {
                this.removeFromRemainingCards(e);
            });
        }
    }
    removeFromRemainingCards(selectedCards){//better check of card type more opti
        let set=[];
        for(let i=0; i<this.allCards.length;i++){
            let e = this.allCards[i]
            if(e.equals(selectedCards)){
                set.push(e);
                this.allCards.splice(i,1);
                console.log("card remove : "+e.color,e.number,e.filling,e.shape);
            }
        }
        if(set.length!=1){
            throw new UnFoundCardException(selectedCards);
        }
        else{
            this.setMade.push(set);
        }
    }
}