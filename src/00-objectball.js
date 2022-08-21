function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
const game = gameObject();

function numPointsScored(name) {
  for (const gameKey in game) {
    //gameKey is home/away
    const teamObj = game[gameKey];
    const playerObj = teamObj.players;
    for (const playerKey in playerObj) {
      if (playerKey === name) {
        return playerObj[playerKey].points;
      }
    }
  }
}
function shoeSize(name) {
  for (const gameKey in game) {
    //gameKey is home/away
    const teamObj = game[gameKey];
    const playerObj = teamObj.players;
    for (const playerKey in playerObj) {
      if (playerKey === name) {
        return playerObj[playerKey].shoe;
      }
    }
  }
}
function teamColors(team) {
  for (const gameKey in game) {
    const teamObj = game[gameKey];
    if (teamObj.teamName === team) {
      return teamObj.colors;
    }
  }
}
function teamNames() {
  const newArr = [];
  for (const gameKey in game) {
    newArr.push(game[gameKey].teamName);
  }
  return newArr;
}
function playerNumbers(team) {
  const newArr = [];
  for (const gameKey in game) {
    if (game[gameKey].teamName === team) {
      for (const teamNumber in game[gameKey].players) {
        newArr.push(game[gameKey].players[teamNumber].number);
      }
    }
  }
  return newArr;
}
function playerStats(name) {
  for (const gameKey in game) {
    for (const myPlayer in game[gameKey].players)
      if (myPlayer === name) {
        return game[gameKey].players[myPlayer];
      }
  }
}
function bigShoeRebounds() {
  let biggestShoe = 0;
  let rebound;
  for (const gameKey in game) {
    for (const myPlayer in game[gameKey].players) {
      let currentShoe = game[gameKey].players[myPlayer].shoe;
      if (currentShoe > biggestShoe) {
        biggestShoe = currentShoe;
        rebound = game[gameKey].players[myPlayer].rebounds;
      }
    }
  }
  return rebound;
}
function mostPointsScored() {
  let myPoints = 0;
  let currentPoints;
  for (const gameKey in game) {
    for (const myPlayer in game[gameKey].players) {
      currentPoints = game[gameKey].players[myPlayer].points;
      if (currentPoints > myPoints) {
        myPoints = currentPoints;
      }
    }
  }
  return myPoints;
}

function winningTeam() {
  let home = 0;
  let away = 0;
  for (const myPlayer in game.home.players) {
    home += game.home.players[myPlayer].points;
  }
  for (const myPlayer in game.away.players) {
    away += game.away.players[myPlayer].points;
  }
  if (home > away) {
    return game.home.teamName;
  } else {
    return game.away.teamName;
  }
}
function playerWithLongestName() {
  let longestPlayerName = "";
  for (const gameKey in game) {
    const currentName = game[gameKey].players;
    for (const myPlayer in currentName) {
      if (myPlayer.length > longestPlayerName.length)
        longestPlayerName = myPlayer;
    }
  }
  return longestPlayerName;
}
function doesLongNameStealATon() {
  const longestPlayerName = playerWithLongestName();
  let mySteals = 0;
  let highestSteals = "";
  for (const gameKey in game) {
    for (const myPlayer in game[gameKey].players) {
      if (game[gameKey].players[myPlayer].steals > mySteals) {
        mySteals = game[gameKey].players[myPlayer].steals;
        highestSteals = myPlayer;
      }
    }
  }
  if (highestSteals === longestPlayerName) {
    return true;
  } else {
    return false;
  }
}
