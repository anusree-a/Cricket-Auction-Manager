import Player from './player.js';

class Batsman extends Player {
    constructor(id, name, age, role, basePrice, runs) {
        super(id, name, age, role, basePrice);
        this.runs = runs;
        
    }
}
export default Batsman;