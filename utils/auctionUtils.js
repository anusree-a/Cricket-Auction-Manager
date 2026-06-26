class AuctionUtils {
    static validateAge(players) {
        return players.filter(val => val.age > 18);
    }

    static nameToUpperCase(players) {
    return players.map(player => {
        player.name = player.name.toUpperCase();
        return player;
    })
    }

    static auction(players, team1, team2) {
        for(let i=0; i < players.length; i++){
           
            if( i < 5 ) {
                players[i].markSold(players[i].soldPrice);
                players[i].teamName = team1.teamName;
                team1.addPlayer(players[i]);
                
               

            }
            
            else {
                
                players[i].markSold(players[i].soldPrice);
                players[i].teamName = team2.teamName;
                team2.addPlayer(players[i]);

            }
            

        } 
        
    }

    static auctionResult(team1, team2) {
        console.log("Auction Result: ");
        console.log("Team A: ");
        for(let i=0; i<team1.players.length; i++){
            console.log(`
                ID: ${team1.players[i].id}
                Name: ${team1.players[i].name}
                Role: ${team1.players[i].role}
                Sold price: ${team1.players[i].soldPrice}
                Sold to: ${team1.players[i].teamName}`);
        }
        console.log("Team B: ");
        for(let i=0; i<team2.players.length; i++){
            console.log(`
                ID: ${team2.players[i].id}
                Name: ${team2.players[i].name}
                Role: ${team2.players[i].role}
                Sold price: ${team2.players[i].soldPrice}
                Sold to: ${team2.players[i].teamName}`);
        }

    }

}
export default AuctionUtils;