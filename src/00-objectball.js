function gameObject(){
    const game = {
        "home":{
            "teamName":`Brooklyn Nets`,
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson" : {
                    "number" : 0,
                    "shoe" : 16,
                    "points" : 22,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 3,
                    "blocks" : 1,
                    "slamDunks" : 1,
                },
                "Reggie Evans" : {
                    "number" : 30,
                    "shoe" : 14,
                    "points" : 12,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 12,
                    "blocks" : 12,
                    "slamDunks" : 7,
                },
                "Brook Lopez" : {
                    "number" : 11,
                    "shoe" : 17,
                    "points" : 17,
                    "rebounds" : 19,
                    "assists" : 10,
                    "steals" : 3,
                    "blocks" : 1,
                    "slamDunks" : 15,
                },
                "Mason Plumlee" : {
                    "number" : 1,
                    "shoe" : 19,
                    "points" : 26,
                    "rebounds" : 12,
                    "assists" : 6,
                    "steals" : 3,
                    "blocks" : 8,
                    "slamDunks" : 5,
                },
                "Jason Terry" : {
                    "number" : 31,
                    "shoe" : 15,
                    "points" : 19,
                    "rebounds" : 2,
                    "assists" : 2,
                    "steals" : 4,
                    "blocks" : 11,
                    "slamDunks" : 1,
                },
            },

        },
        "away":{
            "teamName":`Charlotte Hornets`,
            "colors": ['Turquoise', 'Purple'],
            "players": {
                "Jeff Adrien" : {
                    "number" : 4,
                    "shoe" : 18,
                    "points" : 10,
                    "rebounds" : 1,
                    "assists" : 1,
                    "steals" : 2,
                    "blocks" : 7,
                    "slamDunks" : 2,
                },
                "Bismak Biyombo" : {
                    "number" : 0,
                    "shoe" : 16,
                    "points" : 12,
                    "rebounds" : 4,
                    "assists" : 7,
                    "steals" : 7,
                    "blocks" : 15,
                    "slamDunks" : 10,
                },
                "DeSagna Diop" : {
                    "number" : 2,
                    "shoe" : 14,
                    "points" : 24,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 4,
                    "blocks" : 5,
                    "slamDunks" : 5,
                },
                "Ben Gordon" : {
                    "number" : 8,
                    "shoe" : 15,
                    "points" : 33,
                    "rebounds" : 3,
                    "assists" : 2,
                    "steals" : 1,
                    "blocks" : 1,
                    "slamDunks" : 0,
                },
                "Brendan Haywood" : {
                    "number" : 33,
                    "shoe" : 15,
                    "points" : 6,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 22,
                    "blocks" : 5,
                    "slamDunks" : 12,
                },
            },
        },
    }
    return game;
}

const game = gameObject();

// function deepIterator(target){
//     if(typeof target === 'object'){
//         for(const key in target){
//             deepIterator(target[key]);
//         }
//     }
//     else {
//         //does something with each key
//     }
// }

function numPointsScored (playerName){
    if (game['home']['players'][playerName]){
        return game['home']['players'][playerName]['points']
    }
    else if (game['away']['players'][playerName]){
        return game['away']['players'][playerName]['points']
    }
    else {
        console.log(`${playerName} is not in game`)
        return undefined
    }
}

function shoeSize (playerName){
    if (game['home']['players'][playerName]){
        return game['home']['players'][playerName]['shoe']
    }
    else if (game['away']['players'][playerName]){
        return game['away']['players'][playerName]['shoe']
    }
    else {
        console.log(`${playerName} is not in game`)
        return undefined
    }
}

function teamColors (team){
    if (game['home']['teamName'] === team) {
        return game['home']['colors'];
    }
    else if (game['away']['teamName'] === team) {
        return game['away']['colors'];
    }
    else {
        console.log(`${team} is not in game`)
        return undefined
    }
}

function teamNames () {
    const teams = [];
    teams.push(game['home']['teamName']);
    teams.push(game['away']['teamName']);
    return teams;
}

function playerNumbers (team) {
    const jerseyNumbers = [];
    let location = '';
    if (game['home']['teamName']=== team){
        location = 'home';
    }
    else if (game['away']['teamName']=== team){
        location = 'away';
    }
    else {
        console.log(`${team} is not in game`)
        return undefined
    }

    for (const key in game[location]['players']) {
        jerseyNumbers.push(game[location]['players'][key]['number']);
    }


    return jerseyNumbers;
}

function playerStats(playerName) {
    let location = '';
    if (game['home']['players'][playerName]){
        location = 'home';
    }
    else if (game['away']['players'][playerName]){
        location = 'away';
    }
    else {
        console.log(`${playerName} is not in game`)
        return undefined
    }

    return game[location]['players'][playerName];
}

function bigShoeRebounds(){
    let biggestShoe = 0;
    let biggestPlayer = '';
    let location = '';

    for(const key in game['home']['players']) {
        if (game['home']['players'][key]['shoe'] > biggestShoe){
            biggestShoe = game['home']['players'][key]['shoe'];
            biggestPlayer = key;
            location = 'home';
        }
    }
    for(const key in game['away']['players']) {
        if (game['away']['players'][key]['shoe'] > biggestShoe){
            biggestShoe = game['away']['players'][key]['shoe'];
            biggestPlayer = key;
            location = 'away';
        }
    }

    // console.log(biggestPlayer);
    return game[location]['players'][biggestPlayer]['rebounds']

}

function winningTeam() {
    let homePoints = 0;
    let awayPoints = 0;

    for(const key in game['home']['players']) {
        console.log(`Player Points:${game['home']['players'][key]['points']} Team Total: ${homePoints}`)
        homePoints += game['home']['players'][key]['points'];
    }
    for(const key in game['away']['players']) {
        console.log(`Player Points:${game['away']['players'][key]['points']} Team Total: ${homePoints}`)
        awayPoints += game['away']['players'][key]['points'];
    }

    if (homePoints > awayPoints) {
        // console.log(`homePoints: ${homePoints}, awayPoints: ${awayPoints}`)
        return game['home']['teamName'];
    }
    else if (homePoints < awayPoints) {
        return game['away']['teamName'];
    }
    else if (homePoints === awayPoints) {
        return 'Tie game!'
    }
    else {
        console.error('wut');
        return undefined
    }
}

console.log(winningTeam());
// console.log(bigShoeRebounds());
// console.log(playerStats('Ben Gn'));
// console.log(playerNumbers('Charlotte Hornets'));
// console.log(teamColors('Charlotte Hornets'));
// console.dir(gameObject(), {depth:null})
// console.table(gameObject())