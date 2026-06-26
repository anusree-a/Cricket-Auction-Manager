import Player from "./player.js";

class AllRounder extends Player {
      constructor(id, name, age, role, basePrice, runs, wickets) {
        super(id, name, age, role, basePrice);
        this.runs = runs;
        this.wickets = wickets;
        
    }
}
export default AllRounder;