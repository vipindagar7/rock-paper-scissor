let computerWin = 0;
let userWin = 0;
let matchDraw = 0;
const getName = localStorage.getItem('userName');
// display name of user 
const disName = () => {
    document.getElementById('userName').innerHTML = getName;
}
disName();

// saving user's namme in local storage
const saveName = async () => {
    let userName = prompt('Enter You name: ');
    await localStorage.setItem('userName', userName);
    document.getElementById('userName').innerHTML = userName;
}

// chechking user's name is already in local storage or not
if (getName == 'null' || getName == '' || getName == null) {
    saveName();
    document.getElementById('userName').innerHTML = getName;
}


// updating user's namme in local storage
const updateName = () => {
    let userName = prompt('Enter You name: ');
    localStorage.setItem('userName', userName);

    document.getElementById('userName').innerHTML = userName;
}


// determining results of matches
function match(userInput, computerChoice) {
    let name = localStorage.getItem('userName');
    if (userInput == computerChoice) {
        matchDraw += 1;
        let matchTie = 'Match tie'
        return matchTie
    }
    else if (userInput === 'rock' && computerChoice === 'scissor' || userInput === 'paper' && computerChoice === 'rock' || userInput === 'scissor' && computerChoice === 'paper') {
        userWin += 1;
        let userWon = `${name} Won`
        return userWon

    }
    else {
        computerWin += 1;
        let computerWon = 'Computer Won'
        return computerWon
    }
}


// playing matches and updating scores
function playMatch(userInput) {
    const choice = ['rock', 'paper', 'scissor']
    const random = Math.floor(Math.random() * choice.length);
    const computerChoice = choice[random]
    let winner = document.getElementById('winner')
    winner.innerHTML = (match(userInput, computerChoice))
    console.log('user input is ', userInput)
    document.getElementById('totalMatches').innerHTML = (computerWin + userWin + matchDraw)
    document.getElementById('userWins').innerHTML = userWin
    document.getElementById('computerWins').innerHTML = computerWin
    document.getElementById('tieMatches').innerHTML = matchDraw
}

