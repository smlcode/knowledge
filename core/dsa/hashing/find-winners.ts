//Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// Output: [[1,2,10],[4,5,7,8]]

// Return a list answer of size 2 where:

// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.

function findWinners(matches: number[][]): number[][] {

    const answer: number[][] = [[],[]];
    const playerLossesMap: Map<number, number> = new Map();

    //Populate the player record map.
    for(let i = 0; i < matches.length; i++) {
        //check winner and loser and update map.
        const winner: number = matches[i][0];
        const loser: number = matches[i][1];

        if(!playerLossesMap.has(winner)) {
            playerLossesMap.set(winner, 0);
        }

        if(playerLossesMap.has(loser)) {
            const loss = playerLossesMap.get(loser) + 1;
            playerLossesMap.set(loser, loss);
        } else {
            playerLossesMap.set(loser, 1);
        }
    }

    //Check the player record map for the criteria.
    //Populate the answer
    playerLossesMap.forEach((losses, player) => {
        if(losses === 0) {
            answer[0].push(player);
        } else if(losses === 1) {
            answer[1].push(player);
        }
    });

    answer.forEach(playerList => {
        playerList.sort((a, b) => a - b);
    });

    return answer;
};