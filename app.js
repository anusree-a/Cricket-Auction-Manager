import Player from './models/player.js';
import Batsman from './models/batsMan.js';
import Bowler from './models/bowler.js';
import AllRounder from './models/allRounder.js';
import Team from './models/team.js';
import AuctionUtils from './utils/auctionUtils.js';
import playerData from './testData.json' with { type: 'json' };

//create team objects
let team1 = new Team("1", "A");  
let team2 = new Team("2", "B");

let players = [];
for(let player of playerData) {    //Read data from json and create player object in each iteration and push it to players array
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

players = AuctionUtils.validateAge(players);    //Validate age of players and remove players whose age less than 18
players = AuctionUtils.nameToUpperCase(players);  //convert name of players to upper case


AuctionUtils.auction(players, team1, team2);   //Performs auction and assign to 2 teams
AuctionUtils.auctionResult(team1, team2);     //Display auction result

console.log(`Total amount of team A is: ${team1.totalAmount()}`);

console.log(`Total amount of team B is: ${team2.totalAmount()}`);

//Display all players
// for(let player of players) {
//     console.log(player.displayPlayer());
// }

// team1.displayTeam();