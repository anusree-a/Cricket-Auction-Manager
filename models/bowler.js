import Player from './player.js';

class Bowler extends Player {
    constructor(id, name, age, role, basePrice, wickets) {
        super(id, name, age, role, basePrice);
        this.wickets = wickets;
        
    }
}
export default Bowler;