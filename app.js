import Player from './models/player.js';
import Batsman from './models/batsMan.js';
import Bowler from './models/bowler.js';
import AllRounder from './models/allRounder.js';
import Team from './models/team.js';
import AuctionUtils from './utils/auctionUtils.js';
import playerData from './testData.json' with { type: 'json' };


let team1 = new Team("1", "A");
let team2 = new Team("2", "B");

let players = [];
for(let player of playerData) {
    if(player.role == "Batsman"){
        let batsman = new Batsman(
            player.id,
            player.name,
            player.age,
            player.role,
            player.basePrice,
            player.runs          
        );
        batsman.soldPrice = player.soldPrice;
        batsman.isSold = player.isSold;
        players.push(batsman)

    }
    else if (player.role == "Bowler"){
        let bowler = new Bowler(
            player.id,
            player.name,
            player.age,
            player.role,
            player.basePrice,
            player.wickets
        );
        bowler.soldPrice = player.soldPrice;
        bowler.isSold = player.isSold;
        players.push(bowler);
    }
    else if (player.role == "AllRounder"){
        let allRounder = new AllRounder(
            player.id,
            player.name,
            player.age,
            player.role,
            player.basePrice,
            player.runs,
            player.wickets
        );
        allRounder.soldPrice = player.soldPrice;
        allRounder.isSold = player.isSold;
        players.push(allRounder);
    }

}

players = AuctionUtils.validateAge(players);
players = AuctionUtils.nameToUpperCase(players);
AuctionUtils.auction(players, team1, team2);
AuctionUtils.auctionResult(team1, team2);

console.log(`Total amount of team A is: ${team1.totalAmount()}`);

console.log(`Total amount of team B is: ${team2.totalAmount()}`);

//Display all players
// for(let player of players) {
//     console.log(player.displayPlayer());
// }