class AuctionUtils {
    static validateAge(players) {
        for(let player of players) {
            if(player.age < 18) {
                console.log(`Player ${player.name} is not eligible for auction as his age is ${player.age}`);
            }
        }
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
                let multiplier = Math.floor(Math.random() * 3) + 5;   
                let soldPrice = players[i].basePrice * multiplier;     //Calculate sold price
                players[i].markSold(soldPrice);   
                players[i].teamName = team1.teamName;   //Assign team name to player
                team1.addPlayer(players[i]); 
                
               

            }
            
            else {
                let multiplier = Math.floor(Math.random() * 3) + 5;
                let soldPrice = players[i].basePrice * multiplier;
                players[i].markSold(soldPrice);
                players[i].teamName = team2.teamName;
                team2.addPlayer(players[i]);

            }
            

        } 
        
    }

    static auctionResult(team1, team2) {
        console.log("Auction Result: ");
        console.log("Team A: ");
        for (let i = 0; i < team1.players.length; i++) {

        let player = team1.players[i];

        if (player.role === "Batsman") {

            console.log(`
            ID: ${player.id}
            Name: ${player.name}
            Role: ${player.role}
            Runs: ${player.runs}
            Base Price: ${player.basePrice}
            Sold Price: ${player.soldPrice}
            Sold To Team: ${player.teamName}
            `);
        }

        else if (player.role === "Bowler") {

            console.log(`
            ID: ${player.id}
            Name: ${player.name}
            Role: ${player.role}
            Wickets: ${player.wickets}
            Base Price: ${player.basePrice}
            Sold Price: ${player.soldPrice}
            Sold To Team: ${player.teamName}
            `);
        }

        else if (player.role === "AllRounder") {

            console.log(`
            ID: ${player.id}
            Name: ${player.name}
            Role: ${player.role}
            Runs: ${player.runs}
            Wickets: ${player.wickets}
            Base Price: ${player.basePrice}
            Sold Price: ${player.soldPrice}
            Sold To Team: ${player.teamName}
            `);
        }
        }



        console.log("Team B: ");
        for (let i = 0; i < team2.players.length; i++) {

        let player = team2.players[i];

        if (player.role === "Batsman") {

            console.log(`
            ID: ${player.id}
            Name: ${player.name}
            Role: ${player.role}
            Runs: ${player.runs}
            Base Price: ${player.basePrice}
            Sold Price: ${player.soldPrice}
            Sold To Team: ${player.teamName}
            `);
        }

        else if (player.role === "Bowler") {

            console.log(`
            ID: ${player.id}
            Name: ${player.name}
            Role: ${player.role}
            Wickets: ${player.wickets}
            Base Price: ${player.basePrice}
            Sold Price: ${player.soldPrice}
            Sold To Team: ${player.teamName}
            `);
        }

        else if (player.role === "AllRounder") {

            console.log(`
            ID: ${player.id}
            Name: ${player.name}
            Role: ${player.role}
            Runs: ${player.runs}
            Wickets: ${player.wickets}
            Base Price: ${player.basePrice}
            Sold Price: ${player.soldPrice}
            Sold To Team: ${player.teamName}
            `);
        }
        }
    }

}


export default AuctionUtils;