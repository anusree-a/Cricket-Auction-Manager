class Player {
    constructor(id, name, age, role, basePrice) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.role = role;
        this.basePrice = basePrice;
        this.soldPrice = 0;
        this.isSold = false;
    }
    displayPlayer() {
       return `
       id: ${this.id}
       name: ${this.name}
       age: ${this.age}
       role: ${this.role}
       basePrice: ${this.basePrice}
       soldPrice: ${this.soldPrice}
       isSold: ${this.isSold}`

    }
    markSold(soldPrice) {
        if(soldPrice >= this.basePrice){
            this.soldPrice = soldPrice;
            this.isSold = true;
        }
        else {
            console.log("Selling price cannot be less than baseprice");
        }
    }
}
export default Player;
