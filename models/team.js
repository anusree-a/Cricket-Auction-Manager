class Team {
    constructor(teamId, teamName) {
        this.teamId = teamId;
        this.teamName = teamName;
        this.players = [];
    }

    addPlayer(player) {
        this.players.push(player)
    }

    displayTeam() {
    console.log(`Team ID: ${this.teamId}`);
    console.log(`Team Name: ${this.teamName}`);
    console.log("Players:");

    this.players.forEach(player => {
        console.log(player.displayPlayer());
    });
    }

    totalAmount() {
        let total = this.players.reduce((acc, val) => acc = acc + val.soldPrice , 0);
        return total;
    }


}
export default Team;