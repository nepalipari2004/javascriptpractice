const WarriorsGames = [
    {
      awayTeam: {
        team: 'Golden State',
        points: 119,
        isWinner: true
      },
      homeTeam: {
        team: 'Houston',
        points: 106,
        isWinner: false
      }
    },
    {
      awayTeam: {
        team: 'Golden State',
        points: 105,
        isWinner: false
      },
      homeTeam: {
        team: 'Houston',
        points: 121, 
        isWinner: true
      }
    },
      {
      awayTeam: {
        team: 'Boston',
        points: 90,
        isWinner: false
      },
      homeTeam: {
        team: 'Golden State',
        points: 100,
        isWinner: true
      }
    },
  ];


// const ulParent = document.createElement('ul');
//   for (let game of WarriorsGames){
// const { homeTeam, awayTeam} = game;
// const gameLi = document.createElement('li');

// const {
//     team: hTeam,
//     points: hPoints
// } = homeTeam;

// const {
//     team: aTeam,
//     points: aPoints
// } = awayTeam;

// const teamNames = `${aTeam} @ ${hTeam}`;

// let scoreLine;

// if (aPoints > hPoints){
//     scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
// }
// else {
//     scoreLine = `${aPoints} - <b>${hPoints}</b>`
// }

// const warriors = hTeam === 'Golden State' ? homeTeam : awayTeam;
// gameLi.classList.add(warriors.isWinner? 'win' : 'loss')

// gameLi.innerHTML = `${teamNames} ${scoreLine}`
// console.log(scoreLine);
// ulParent.appendChild(gameLi);
//   }

//   document.body.prepend(ulParent);




// Refactored:

const makeChart = (games, targetTeam) => {
    const ulParent = document.createElement('ul');
  for (let game of games){
    const gameLi = document.createElement('li');
    gameLi.innerHTML = getScoreLine(game);
    gameLi.classList.add(isWinner(game,targetTeam)? 'win' : 'loss');
    ulParent.appendChild(gameLi);
  }
  return ulParent;
};



const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
    const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return target.isWinner;
}


const getScoreLine = ({homeTeam, awayTeam}) => {
    const {team: hTeam, points: hPoints} = homeTeam;
    const {team: aTeam, points: aPoints} = awayTeam;
    const teamNames = `${aTeam} @ ${hTeam}`;

    let scoreLine;
    if (aPoints > hPoints){
        scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
    }
    else {
        scoreLine = `${aPoints} - <b>${hPoints}</b>`
    }
    return `${teamNames} ${scoreLine}`; 
}


const gsSection = document.querySelector('#gs');
const houstonSection = document.querySelector('#hr')
const gsChart = makeChart(WarriorsGames, 'Golden State');
const hrChart = makeChart(WarriorsGames, 'Houston');
gsSection.appendChild(gsChart);
houstonSection.appendChild(hrChart);






