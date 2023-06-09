class Card {
    /**
     * 
     * @param {*} attributes : dictionnary of attributes : key : name of the attributes and value : value of the attributes
     */
    // attributes : shape, color, number, outline, filling
    constructor(attributes){
        this.attributes=attributes;
    }

    /**
     * 
     * @returns all attributes of a card
     */
    getAttributes(){//working✅
        let att=[];
        Object.entries(this.attributes).forEach(function([key, value]) {
            att.push(value);
         });
         return att;
    }

    /**
     * 
     * @param {*} card card to be compared with the current obj
     * @returns boolean
     */
    equals(card){//working✅
        let bool=true;
        Object.entries(this.attributes).forEach(function([key, value]) {
            if(card.attributes[key]!=value){
                bool=false;
            }
         });
        return bool;
    }  
}