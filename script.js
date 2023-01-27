

const plates = document.querySelectorAll('.plate')

let currentPlayer = (Math.round(Math.random()))

const displayPlayer = () => {
    if (currentPlayer === 0) {
        document.getElementById(`p1`).innerText = 'Waffles Go First!'
    }
    if (currentPlayer === 1) {
        document.getElementById(`p1`).innerText = 'Eggs Go First!'
    }
}
const playGame = () => {
    for (let i = 0; i < plates.length; i++) {
        plates[i].onclick = () => {
            document.getElementById(`p1`).innerHTML = '&#129479; &#127859; &#129479; &#127859; &#129479; &#127859; &#129479; &#127859;'
            if (currentPlayer === 0) {
                let playerSelection = plates[i].id.split(",") // splits coordinate string 
                let x = parseInt(playerSelection[1]) //*** Player-selected x coordinate as an integer ***
                let y = parseInt(playerSelection[0]) //*** Player-selected y coordinate as an integer ***
                let belowSelectionY = playerSelection[0] - 1
                let belowSelection =  [playerSelection[1] , belowSelectionY].join(',')
            
                if (!document.getElementById(`0,${x}`).classList.contains('alreadyPlayed')) {
                    document.getElementById(`0,${x}`).classList.add('playerOne')
                    document.getElementById(`0,${x}`).classList.add('alreadyPlayed')
                    currentPlayer = 1
                    checkWin()
                    playGame()
                }
                else if (!document.getElementById(`1,${x}`).classList.contains('alreadyPlayed')){
                    document.getElementById(`1,${x}`).classList.add('playerOne')
                    document.getElementById(`1,${x}`).classList.add('alreadyPlayed')
                    currentPlayer = 1
                    checkWin()
                    playGame()
                }
                else if (!document.getElementById(`2,${x}`).classList.contains('alreadyPlayed')){
                    document.getElementById(`2,${x}`).classList.add('playerOne')
                    document.getElementById(`2,${x}`).classList.add('alreadyPlayed')
                    currentPlayer = 1
                    checkWin()
                    playGame()
                }
                else if (!document.getElementById(`3,${x}`).classList.contains('alreadyPlayed')){
                    document.getElementById(`3,${x}`).classList.add('playerOne')
                    document.getElementById(`3,${x}`).classList.add('alreadyPlayed')
                    currentPlayer = 1
                    checkWin()
                    playGame()
                }
                else if (!document.getElementById(`3,${x}`).classList.contains('alreadyPlayed')){
                    document.getElementById(`3,${x}`).classList.add('playerOne')
                    document.getElementById(`3,${x}`).classList.add('alreadyPlayed')
                    currentPlayer = 1
                    checkWin()
                    playGame()
                }
                else if (!document.getElementById(`4,${x}`).classList.contains('alreadyPlayed')){
                    document.getElementById(`4,${x}`).classList.add('playerOne')
                    document.getElementById(`4,${x}`).classList.add('alreadyPlayed')
                    currentPlayer = 1
                    checkWin()
                    playGame()
                }
                else if (!document.getElementById(`5,${x}`).classList.contains('alreadyPlayed')){
                    document.getElementById(`5,${x}`).classList.add('playerOne')
                    document.getElementById(`5,${x}`).classList.add('alreadyPlayed')
                    currentPlayer = 1
                    checkWin()
                    playGame()
                }
                else {
                    document.getElementById(`p1`).innerText = "That table is full."
                }
    
            }
            else if (currentPlayer === 1) {
                
                let playerSelection = plates[i].id.split(",") // splits coordinate string 
                let x = parseInt(playerSelection[1]) //*** Player-selected x coordinate as an integer ***
                let y = parseInt(playerSelection[0]) //*** Player-selected y coordinate as an integer ***
                let belowSelectionY = playerSelection[0] - 1
                let belowSelection =  [playerSelection[1] , belowSelectionY].join(',')
            
                
                if (!document.getElementById(`0,${x}`).classList.contains('alreadyPlayed')) {
                    document.getElementById(`0,${x}`).classList.add('playerTwo')
                    document.getElementById(`0,${x}`).classList.add('alreadyPlayed')
                    currentPlayer = 0
                    checkWin()
                    playGame()
                }
                else if (!document.getElementById(`1,${x}`).classList.contains('alreadyPlayed')){
                    document.getElementById(`1,${x}`).classList.add('playerTwo')
                    document.getElementById(`1,${x}`).classList.add('alreadyPlayed')
                    currentPlayer = 0
                    checkWin()
                    playGame()
                }
                else if (!document.getElementById(`2,${x}`).classList.contains('alreadyPlayed')){
                    document.getElementById(`2,${x}`).classList.add('playerTwo')
                    document.getElementById(`2,${x}`).classList.add('alreadyPlayed')
                    currentPlayer = 0
                    checkWin()
                    playGame()
                }
                else if (!document.getElementById(`3,${x}`).classList.contains('alreadyPlayed')){
                    document.getElementById(`3,${x}`).classList.add('playerTwo')
                    document.getElementById(`3,${x}`).classList.add('alreadyPlayed')
                    currentPlayer = 0
                    checkWin()
                    playGame()
                }
                else if (!document.getElementById(`3,${x}`).classList.contains('alreadyPlayed')){
                    document.getElementById(`3,${x}`).classList.add('playerTwo')
                    document.getElementById(`3,${x}`).classList.add('alreadyPlayed')
                    currentPlayer = 0
                    checkWin()
                    playGame()
                }
                else if (!document.getElementById(`4,${x}`).classList.contains('alreadyPlayed')){
                    document.getElementById(`4,${x}`).classList.add('playerTwo')
                    document.getElementById(`4,${x}`).classList.add('alreadyPlayed')
                    currentPlayer = 0
                    checkWin()
                    playGame()
                }
                else if (!document.getElementById(`5,${x}`).classList.contains('alreadyPlayed')){
                    document.getElementById(`5,${x}`).classList.add('playerTwo')
                    document.getElementById(`5,${x}`).classList.add('alreadyPlayed')
                    currentPlayer = 0
                    checkWin()
                    playGame()
                }
                else {
                    document.getElementById(`p1`).innerText = "That table is full."
                    playGame()
                }
                
            }
            }
}
}
displayPlayer()
playGame()

const checkWin = () => {
    if (
    document.getElementById(`0,0`).classList.contains('playerOne') && document.getElementById(`0,1`).classList.contains('playerOne') &&
    document.getElementById(`0,2`).classList.contains('playerOne') && document.getElementById(`0,3`).classList.contains('playerOne') 
    || 
    document.getElementById(`0,1`).classList.contains('playerOne') && document.getElementById(`0,2`).classList.contains('playerOne') &&
    document.getElementById(`0,3`).classList.contains('playerOne') && document.getElementById(`0,4`).classList.contains('playerOne') 
    || 
    document.getElementById(`0,2`).classList.contains('playerOne') && document.getElementById(`0,3`).classList.contains('playerOne') &&
    document.getElementById(`0,4`).classList.contains('playerOne') && document.getElementById(`0,5`).classList.contains('playerOne') 
    || 
    document.getElementById(`0,3`).classList.contains('playerOne') && document.getElementById(`0,4`).classList.contains('playerOne') &&
    document.getElementById(`0,5`).classList.contains('playerOne') && document.getElementById(`0,6`).classList.contains('playerOne') 
    ||
    document.getElementById(`1,0`).classList.contains('playerOne') && document.getElementById(`1,1`).classList.contains('playerOne') &&
    document.getElementById(`1,2`).classList.contains('playerOne') && document.getElementById(`1,3`).classList.contains('playerOne') 
    || 
    document.getElementById(`1,1`).classList.contains('playerOne') && document.getElementById(`1,2`).classList.contains('playerOne') &&
    document.getElementById(`1,3`).classList.contains('playerOne') && document.getElementById(`1,4`).classList.contains('playerOne') 
    || 
    document.getElementById(`1,2`).classList.contains('playerOne') && document.getElementById(`1,3`).classList.contains('playerOne') &&
    document.getElementById(`1,4`).classList.contains('playerOne') && document.getElementById(`1,5`).classList.contains('playerOne') 
    || 
    document.getElementById(`1,3`).classList.contains('playerOne') && document.getElementById(`1,4`).classList.contains('playerOne') &&
    document.getElementById(`1,5`).classList.contains('playerOne') && document.getElementById(`1,6`).classList.contains('playerOne') 
    || 
    document.getElementById(`2,0`).classList.contains('playerOne') && document.getElementById(`2,1`).classList.contains('playerOne') &&
    document.getElementById(`2,2`).classList.contains('playerOne') && document.getElementById(`2,3`).classList.contains('playerOne') 
    || 
    document.getElementById(`2,1`).classList.contains('playerOne') && document.getElementById(`2,2`).classList.contains('playerOne') &&
    document.getElementById(`2,3`).classList.contains('playerOne') && document.getElementById(`2,4`).classList.contains('playerOne') 
    || 
    document.getElementById(`2,2`).classList.contains('playerOne') && document.getElementById(`2,3`).classList.contains('playerOne') &&
    document.getElementById(`2,4`).classList.contains('playerOne') && document.getElementById(`2,5`).classList.contains('playerOne') 
    || 
    document.getElementById(`2,3`).classList.contains('playerOne') && document.getElementById(`2,4`).classList.contains('playerOne') &&
    document.getElementById(`2,5`).classList.contains('playerOne') && document.getElementById(`2,6`).classList.contains('playerOne') 
    || 
    document.getElementById(`3,0`).classList.contains('playerOne') && document.getElementById(`3,1`).classList.contains('playerOne') &&
    document.getElementById(`3,2`).classList.contains('playerOne') && document.getElementById(`3,3`).classList.contains('playerOne') 
    || 
    document.getElementById(`3,1`).classList.contains('playerOne') && document.getElementById(`3,2`).classList.contains('playerOne') &&
    document.getElementById(`3,3`).classList.contains('playerOne') && document.getElementById(`3,4`).classList.contains('playerOne') 
    || 
    document.getElementById(`3,2`).classList.contains('playerOne') && document.getElementById(`3,3`).classList.contains('playerOne') &&
    document.getElementById(`3,4`).classList.contains('playerOne') && document.getElementById(`3,5`).classList.contains('playerOne') 
    || 
    document.getElementById(`3,3`).classList.contains('playerOne') && document.getElementById(`3,4`).classList.contains('playerOne') &&
    document.getElementById(`3,5`).classList.contains('playerOne') && document.getElementById(`3,6`).classList.contains('playerOne') 
    || 
    document.getElementById(`4,0`).classList.contains('playerOne') && document.getElementById(`4,1`).classList.contains('playerOne') &&
    document.getElementById(`4,2`).classList.contains('playerOne') && document.getElementById(`4,3`).classList.contains('playerOne') 
    || 
    document.getElementById(`4,1`).classList.contains('playerOne') && document.getElementById(`4,2`).classList.contains('playerOne') &&
    document.getElementById(`4,3`).classList.contains('playerOne') && document.getElementById(`4,4`).classList.contains('playerOne') 
    || 
    document.getElementById(`4,2`).classList.contains('playerOne') && document.getElementById(`4,3`).classList.contains('playerOne') &&
    document.getElementById(`4,4`).classList.contains('playerOne') && document.getElementById(`4,5`).classList.contains('playerOne') 
    || 
    document.getElementById(`4,3`).classList.contains('playerOne') && document.getElementById(`4,4`).classList.contains('playerOne') &&
    document.getElementById(`4,5`).classList.contains('playerOne') && document.getElementById(`4,6`).classList.contains('playerOne') 
    || 
    document.getElementById(`5,0`).classList.contains('playerOne') && document.getElementById(`5,1`).classList.contains('playerOne') &&
    document.getElementById(`5,2`).classList.contains('playerOne') && document.getElementById(`5,3`).classList.contains('playerOne') 
    || 
    document.getElementById(`5,1`).classList.contains('playerOne') && document.getElementById(`5,2`).classList.contains('playerOne') &&
    document.getElementById(`5,3`).classList.contains('playerOne') && document.getElementById(`5,4`).classList.contains('playerOne') 
    || 
    document.getElementById(`5,2`).classList.contains('playerOne') && document.getElementById(`5,3`).classList.contains('playerOne') &&
    document.getElementById(`5,4`).classList.contains('playerOne') && document.getElementById(`5,5`).classList.contains('playerOne') 
    || 
    document.getElementById(`5,3`).classList.contains('playerOne') && document.getElementById(`5,4`).classList.contains('playerOne') &&
    document.getElementById(`5,5`).classList.contains('playerOne') && document.getElementById(`5,6`).classList.contains('playerOne')
    // ******* ALL HORIZONTAL POSSIBILITIES ABOVE ************
    || 
    document.getElementById(`0,0`).classList.contains('playerOne') && document.getElementById(`1,0`).classList.contains('playerOne') &&
    document.getElementById(`2,0`).classList.contains('playerOne') && document.getElementById(`3,0`).classList.contains('playerOne') 
    || 
    document.getElementById(`1,0`).classList.contains('playerOne') && document.getElementById(`2,0`).classList.contains('playerOne') &&
    document.getElementById(`3,0`).classList.contains('playerOne') && document.getElementById(`4,0`).classList.contains('playerOne') 
    || 
    document.getElementById(`2,0`).classList.contains('playerOne') && document.getElementById(`3,0`).classList.contains('playerOne') &&
    document.getElementById(`4,0`).classList.contains('playerOne') && document.getElementById(`5,0`).classList.contains('playerOne')
    || 
    document.getElementById(`0,1`).classList.contains('playerOne') && document.getElementById(`1,1`).classList.contains('playerOne') &&
    document.getElementById(`2,1`).classList.contains('playerOne') && document.getElementById(`3,1`).classList.contains('playerOne') 
    || 
    document.getElementById(`1,1`).classList.contains('playerOne') && document.getElementById(`2,1`).classList.contains('playerOne') &&
    document.getElementById(`3,1`).classList.contains('playerOne') && document.getElementById(`4,1`).classList.contains('playerOne') 
    || 
    document.getElementById(`2,1`).classList.contains('playerOne') && document.getElementById(`3,1`).classList.contains('playerOne') &&
    document.getElementById(`4,1`).classList.contains('playerOne') && document.getElementById(`5,1`).classList.contains('playerOne')
    || 
    document.getElementById(`0,2`).classList.contains('playerOne') && document.getElementById(`1,2`).classList.contains('playerOne') &&
    document.getElementById(`2,2`).classList.contains('playerOne') && document.getElementById(`3,2`).classList.contains('playerOne') 
    || 
    document.getElementById(`1,2`).classList.contains('playerOne') && document.getElementById(`2,2`).classList.contains('playerOne') &&
    document.getElementById(`3,2`).classList.contains('playerOne') && document.getElementById(`4,2`).classList.contains('playerOne') 
    || 
    document.getElementById(`2,2`).classList.contains('playerOne') && document.getElementById(`3,2`).classList.contains('playerOne') &&
    document.getElementById(`4,2`).classList.contains('playerOne') && document.getElementById(`5,2`).classList.contains('playerOne')
    || 
    document.getElementById(`0,3`).classList.contains('playerOne') && document.getElementById(`1,3`).classList.contains('playerOne') &&
    document.getElementById(`2,3`).classList.contains('playerOne') && document.getElementById(`3,3`).classList.contains('playerOne') 
    || 
    document.getElementById(`1,3`).classList.contains('playerOne') && document.getElementById(`2,3`).classList.contains('playerOne') &&
    document.getElementById(`3,3`).classList.contains('playerOne') && document.getElementById(`4,3`).classList.contains('playerOne') 
    || 
    document.getElementById(`2,3`).classList.contains('playerOne') && document.getElementById(`3,3`).classList.contains('playerOne') &&
    document.getElementById(`4,3`).classList.contains('playerOne') && document.getElementById(`5,3`).classList.contains('playerOne')
    || 
    document.getElementById(`0,4`).classList.contains('playerOne') && document.getElementById(`1,4`).classList.contains('playerOne') &&
    document.getElementById(`2,4`).classList.contains('playerOne') && document.getElementById(`3,4`).classList.contains('playerOne') 
    || 
    document.getElementById(`1,4`).classList.contains('playerOne') && document.getElementById(`2,4`).classList.contains('playerOne') &&
    document.getElementById(`3,4`).classList.contains('playerOne') && document.getElementById(`4,4`).classList.contains('playerOne') 
    || 
    document.getElementById(`2,4`).classList.contains('playerOne') && document.getElementById(`3,4`).classList.contains('playerOne') &&
    document.getElementById(`4,4`).classList.contains('playerOne') && document.getElementById(`5,4`).classList.contains('playerOne')
    || 
    document.getElementById(`0,5`).classList.contains('playerOne') && document.getElementById(`1,5`).classList.contains('playerOne') &&
    document.getElementById(`2,5`).classList.contains('playerOne') && document.getElementById(`3,5`).classList.contains('playerOne') 
    || 
    document.getElementById(`1,5`).classList.contains('playerOne') && document.getElementById(`2,5`).classList.contains('playerOne') &&
    document.getElementById(`3,5`).classList.contains('playerOne') && document.getElementById(`4,5`).classList.contains('playerOne') 
    || 
    document.getElementById(`2,5`).classList.contains('playerOne') && document.getElementById(`3,5`).classList.contains('playerOne') &&
    document.getElementById(`4,5`).classList.contains('playerOne') && document.getElementById(`5,5`).classList.contains('playerOne')
    || 
    document.getElementById(`0,6`).classList.contains('playerOne') && document.getElementById(`1,6`).classList.contains('playerOne') &&
    document.getElementById(`2,6`).classList.contains('playerOne') && document.getElementById(`3,6`).classList.contains('playerOne') 
    || 
    document.getElementById(`1,6`).classList.contains('playerOne') && document.getElementById(`2,6`).classList.contains('playerOne') &&
    document.getElementById(`3,6`).classList.contains('playerOne') && document.getElementById(`4,6`).classList.contains('playerOne') 
    || 
    document.getElementById(`2,6`).classList.contains('playerOne') && document.getElementById(`3,6`).classList.contains('playerOne') &&
    document.getElementById(`4,6`).classList.contains('playerOne') && document.getElementById(`5,6`).classList.contains('playerOne')
    // ********* ALL VERTICAL COMBINATIONS ABOVE ***********
    || 
    document.getElementById(`0,3`).classList.contains('playerOne') && document.getElementById(`1,4`).classList.contains('playerOne') &&
    document.getElementById(`2,5`).classList.contains('playerOne') && document.getElementById(`3,6`).classList.contains('playerOne')
    || 
    document.getElementById(`0,2`).classList.contains('playerOne') && document.getElementById(`1,3`).classList.contains('playerOne') &&
    document.getElementById(`2,4`).classList.contains('playerOne') && document.getElementById(`3,5`).classList.contains('playerOne')
    || 
    document.getElementById(`1,3`).classList.contains('playerOne') && document.getElementById(`2,4`).classList.contains('playerOne') &&
    document.getElementById(`3,5`).classList.contains('playerOne') && document.getElementById(`4,6`).classList.contains('playerOne')
    || 
    document.getElementById(`0,1`).classList.contains('playerOne') && document.getElementById(`1,2`).classList.contains('playerOne') &&
    document.getElementById(`2,3`).classList.contains('playerOne') && document.getElementById(`3,4`).classList.contains('playerOne')
    || 
    document.getElementById(`1,2`).classList.contains('playerOne') && document.getElementById(`2,3`).classList.contains('playerOne') &&
    document.getElementById(`3,4`).classList.contains('playerOne') && document.getElementById(`4,5`).classList.contains('playerOne')
    || 
    document.getElementById(`2,3`).classList.contains('playerOne') && document.getElementById(`3,4`).classList.contains('playerOne') &&
    document.getElementById(`4,5`).classList.contains('playerOne') && document.getElementById(`5,6`).classList.contains('playerOne')
    || 
    document.getElementById(`0,0`).classList.contains('playerOne') && document.getElementById(`1,1`).classList.contains('playerOne') &&
    document.getElementById(`2,2`).classList.contains('playerOne') && document.getElementById(`3,3`).classList.contains('playerOne')
    || 
    document.getElementById(`1,1`).classList.contains('playerOne') && document.getElementById(`2,2`).classList.contains('playerOne') &&
    document.getElementById(`3,3`).classList.contains('playerOne') && document.getElementById(`4,4`).classList.contains('playerOne')
    || 
    document.getElementById(`2,2`).classList.contains('playerOne') && document.getElementById(`3,3`).classList.contains('playerOne') &&
    document.getElementById(`4,4`).classList.contains('playerOne') && document.getElementById(`5,5`).classList.contains('playerOne')
    || 
    document.getElementById(`1,0`).classList.contains('playerOne') && document.getElementById(`2,1`).classList.contains('playerOne') &&
    document.getElementById(`3,2`).classList.contains('playerOne') && document.getElementById(`4,3`).classList.contains('playerOne')
    || 
    document.getElementById(`2,1`).classList.contains('playerOne') && document.getElementById(`3,2`).classList.contains('playerOne') &&
    document.getElementById(`4,3`).classList.contains('playerOne') && document.getElementById(`5,4`).classList.contains('playerOne')
    || 
    document.getElementById(`2,0`).classList.contains('playerOne') && document.getElementById(`3,1`).classList.contains('playerOne') &&
    document.getElementById(`4,2`).classList.contains('playerOne') && document.getElementById(`5,3`).classList.contains('playerOne')
    // ******** ALL BL TO TR DIAGONAL COMBINATIONS **********
    || 
    document.getElementById(`0,3`).classList.contains('playerOne') && document.getElementById(`1,2`).classList.contains('playerOne') &&
    document.getElementById(`2,1`).classList.contains('playerOne') && document.getElementById(`3,0`).classList.contains('playerOne')
    || 
    document.getElementById(`0,4`).classList.contains('playerOne') && document.getElementById(`1,3`).classList.contains('playerOne') &&
    document.getElementById(`2,2`).classList.contains('playerOne') && document.getElementById(`3,1`).classList.contains('playerOne')
    || 
    document.getElementById(`1,3`).classList.contains('playerOne') && document.getElementById(`2,2`).classList.contains('playerOne') &&
    document.getElementById(`3,1`).classList.contains('playerOne') && document.getElementById(`4,0`).classList.contains('playerOne')
    || 
    document.getElementById(`0,5`).classList.contains('playerOne') && document.getElementById(`1,4`).classList.contains('playerOne') &&
    document.getElementById(`2,3`).classList.contains('playerOne') && document.getElementById(`3,2`).classList.contains('playerOne')
    || 
    document.getElementById(`1,4`).classList.contains('playerOne') && document.getElementById(`2,3`).classList.contains('playerOne') &&
    document.getElementById(`3,2`).classList.contains('playerOne') && document.getElementById(`4,1`).classList.contains('playerOne')
    || 
    document.getElementById(`2,3`).classList.contains('playerOne') && document.getElementById(`3,2`).classList.contains('playerOne') &&
    document.getElementById(`4,1`).classList.contains('playerOne') && document.getElementById(`5,0`).classList.contains('playerOne')
    || 
    document.getElementById(`0,6`).classList.contains('playerOne') && document.getElementById(`1,5`).classList.contains('playerOne') &&
    document.getElementById(`2,4`).classList.contains('playerOne') && document.getElementById(`3,3`).classList.contains('playerOne')
    || 
    document.getElementById(`1,5`).classList.contains('playerOne') && document.getElementById(`2,4`).classList.contains('playerOne') &&
    document.getElementById(`3,3`).classList.contains('playerOne') && document.getElementById(`4,2`).classList.contains('playerOne')
    || 
    document.getElementById(`2,4`).classList.contains('playerOne') && document.getElementById(`3,3`).classList.contains('playerOne') &&
    document.getElementById(`4,2`).classList.contains('playerOne') && document.getElementById(`5,1`).classList.contains('playerOne')
    || 
    document.getElementById(`1,6`).classList.contains('playerOne') && document.getElementById(`2,5`).classList.contains('playerOne') &&
    document.getElementById(`3,4`).classList.contains('playerOne') && document.getElementById(`4,3`).classList.contains('playerOne')
    || 
    document.getElementById(`2,5`).classList.contains('playerOne') && document.getElementById(`3,4`).classList.contains('playerOne') &&
    document.getElementById(`4,3`).classList.contains('playerOne') && document.getElementById(`5,2`).classList.contains('playerOne')
    || 
    document.getElementById(`2,6`).classList.contains('playerOne') && document.getElementById(`3,5`).classList.contains('playerOne') &&
    document.getElementById(`4,4`).classList.contains('playerOne') && document.getElementById(`5,3`).classList.contains('playerOne')
     // ******** ALL BR TO TL DIAGONAL COMBINATIONS **********
    ) {
        document.getElementById(`p1`).innerHTML = 'Waffles Win!'
    }
    else if (
    document.getElementById(`0,0`).classList.contains('playerTwo') && document.getElementById(`0,1`).classList.contains('playerTwo') &&
    document.getElementById(`0,2`).classList.contains('playerTwo') && document.getElementById(`0,3`).classList.contains('playerTwo') 
    || 
    document.getElementById(`0,1`).classList.contains('playerTwo') && document.getElementById(`0,2`).classList.contains('playerTwo') &&
    document.getElementById(`0,3`).classList.contains('playerTwo') && document.getElementById(`0,4`).classList.contains('playerTwo') 
    || 
    document.getElementById(`0,2`).classList.contains('playerTwo') && document.getElementById(`0,3`).classList.contains('playerTwo') &&
    document.getElementById(`0,4`).classList.contains('playerTwo') && document.getElementById(`0,5`).classList.contains('playerTwo') 
    || 
    document.getElementById(`0,3`).classList.contains('playerTwo') && document.getElementById(`0,4`).classList.contains('playerTwo') &&
    document.getElementById(`0,5`).classList.contains('playerTwo') && document.getElementById(`0,6`).classList.contains('playerTwo') 
    ||
    document.getElementById(`1,0`).classList.contains('playerTwo') && document.getElementById(`1,1`).classList.contains('playerTwo') &&
    document.getElementById(`1,2`).classList.contains('playerTwo') && document.getElementById(`1,3`).classList.contains('playerTwo') 
    || 
    document.getElementById(`1,1`).classList.contains('playerTwo') && document.getElementById(`1,2`).classList.contains('playerTwo') &&
    document.getElementById(`1,3`).classList.contains('playerTwo') && document.getElementById(`1,4`).classList.contains('playerTwo') 
    || 
    document.getElementById(`1,2`).classList.contains('playerTwo') && document.getElementById(`1,3`).classList.contains('playerTwo') &&
    document.getElementById(`1,4`).classList.contains('playerTwo') && document.getElementById(`1,5`).classList.contains('playerTwo') 
    || 
    document.getElementById(`1,3`).classList.contains('playerTwo') && document.getElementById(`1,4`).classList.contains('playerTwo') &&
    document.getElementById(`1,5`).classList.contains('playerTwo') && document.getElementById(`1,6`).classList.contains('playerTwo') 
    || 
    document.getElementById(`2,0`).classList.contains('playerTwo') && document.getElementById(`2,1`).classList.contains('playerTwo') &&
    document.getElementById(`2,2`).classList.contains('playerTwo') && document.getElementById(`2,3`).classList.contains('playerTwo') 
    || 
    document.getElementById(`2,1`).classList.contains('playerTwo') && document.getElementById(`2,2`).classList.contains('playerTwo') &&
    document.getElementById(`2,3`).classList.contains('playerTwo') && document.getElementById(`2,4`).classList.contains('playerTwo') 
    || 
    document.getElementById(`2,2`).classList.contains('playerTwo') && document.getElementById(`2,3`).classList.contains('playerTwo') &&
    document.getElementById(`2,4`).classList.contains('playerTwo') && document.getElementById(`2,5`).classList.contains('playerTwo') 
    || 
    document.getElementById(`2,3`).classList.contains('playerTwo') && document.getElementById(`2,4`).classList.contains('playerTwo') &&
    document.getElementById(`2,5`).classList.contains('playerTwo') && document.getElementById(`2,6`).classList.contains('playerTwo') 
    || 
    document.getElementById(`3,0`).classList.contains('playerTwo') && document.getElementById(`3,1`).classList.contains('playerTwo') &&
    document.getElementById(`3,2`).classList.contains('playerTwo') && document.getElementById(`3,3`).classList.contains('playerTwo') 
    || 
    document.getElementById(`3,1`).classList.contains('playerTwo') && document.getElementById(`3,2`).classList.contains('playerTwo') &&
    document.getElementById(`3,3`).classList.contains('playerTwo') && document.getElementById(`3,4`).classList.contains('playerTwo') 
    || 
    document.getElementById(`3,2`).classList.contains('playerTwo') && document.getElementById(`3,3`).classList.contains('playerTwo') &&
    document.getElementById(`3,4`).classList.contains('playerTwo') && document.getElementById(`3,5`).classList.contains('playerTwo') 
    || 
    document.getElementById(`3,3`).classList.contains('playerTwo') && document.getElementById(`3,4`).classList.contains('playerTwo') &&
    document.getElementById(`3,5`).classList.contains('playerTwo') && document.getElementById(`3,6`).classList.contains('playerTwo') 
    || 
    document.getElementById(`4,0`).classList.contains('playerTwo') && document.getElementById(`4,1`).classList.contains('playerTwo') &&
    document.getElementById(`4,2`).classList.contains('playerTwo') && document.getElementById(`4,3`).classList.contains('playerTwo') 
    || 
    document.getElementById(`4,1`).classList.contains('playerTwo') && document.getElementById(`4,2`).classList.contains('playerTwo') &&
    document.getElementById(`4,3`).classList.contains('playerTwo') && document.getElementById(`4,4`).classList.contains('playerTwo') 
    || 
    document.getElementById(`4,2`).classList.contains('playerTwo') && document.getElementById(`4,3`).classList.contains('playerTwo') &&
    document.getElementById(`4,4`).classList.contains('playerTwo') && document.getElementById(`4,5`).classList.contains('playerTwo') 
    || 
    document.getElementById(`4,3`).classList.contains('playerTwo') && document.getElementById(`4,4`).classList.contains('playerTwo') &&
    document.getElementById(`4,5`).classList.contains('playerTwo') && document.getElementById(`4,6`).classList.contains('playerTwo') 
    || 
    document.getElementById(`5,0`).classList.contains('playerTwo') && document.getElementById(`5,1`).classList.contains('playerTwo') &&
    document.getElementById(`5,2`).classList.contains('playerTwo') && document.getElementById(`5,3`).classList.contains('playerTwo') 
    || 
    document.getElementById(`5,1`).classList.contains('playerTwo') && document.getElementById(`5,2`).classList.contains('playerTwo') &&
    document.getElementById(`5,3`).classList.contains('playerTwo') && document.getElementById(`5,4`).classList.contains('playerTwo') 
    || 
    document.getElementById(`5,2`).classList.contains('playerTwo') && document.getElementById(`5,3`).classList.contains('playerTwo') &&
    document.getElementById(`5,4`).classList.contains('playerTwo') && document.getElementById(`5,5`).classList.contains('playerTwo') 
    || 
    document.getElementById(`5,3`).classList.contains('playerTwo') && document.getElementById(`5,4`).classList.contains('playerTwo') &&
    document.getElementById(`5,5`).classList.contains('playerTwo') && document.getElementById(`5,6`).classList.contains('playerTwo')
    // ******* ALL HORIZONTAL POSSIBILITIES ABOVE ************
    || 
    document.getElementById(`0,0`).classList.contains('playerTwo') && document.getElementById(`1,0`).classList.contains('playerTwo') &&
    document.getElementById(`2,0`).classList.contains('playerTwo') && document.getElementById(`3,0`).classList.contains('playerTwo') 
    || 
    document.getElementById(`1,0`).classList.contains('playerTwo') && document.getElementById(`2,0`).classList.contains('playerTwo') &&
    document.getElementById(`3,0`).classList.contains('playerTwo') && document.getElementById(`4,0`).classList.contains('playerTwo') 
    || 
    document.getElementById(`2,0`).classList.contains('playerTwo') && document.getElementById(`3,0`).classList.contains('playerTwo') &&
    document.getElementById(`4,0`).classList.contains('playerTwo') && document.getElementById(`5,0`).classList.contains('playerTwo')
    || 
    document.getElementById(`0,1`).classList.contains('playerTwo') && document.getElementById(`1,1`).classList.contains('playerTwo') &&
    document.getElementById(`2,1`).classList.contains('playerTwo') && document.getElementById(`3,1`).classList.contains('playerTwo') 
    || 
    document.getElementById(`1,1`).classList.contains('playerTwo') && document.getElementById(`2,1`).classList.contains('playerTwo') &&
    document.getElementById(`3,1`).classList.contains('playerTwo') && document.getElementById(`4,1`).classList.contains('playerTwo') 
    || 
    document.getElementById(`2,1`).classList.contains('playerTwo') && document.getElementById(`3,1`).classList.contains('playerTwo') &&
    document.getElementById(`4,1`).classList.contains('playerTwo') && document.getElementById(`5,1`).classList.contains('playerTwo')
    || 
    document.getElementById(`0,2`).classList.contains('playerTwo') && document.getElementById(`1,2`).classList.contains('playerTwo') &&
    document.getElementById(`2,2`).classList.contains('playerTwo') && document.getElementById(`3,2`).classList.contains('playerTwo') 
    || 
    document.getElementById(`1,2`).classList.contains('playerTwo') && document.getElementById(`2,2`).classList.contains('playerTwo') &&
    document.getElementById(`3,2`).classList.contains('playerTwo') && document.getElementById(`4,2`).classList.contains('playerTwo') 
    || 
    document.getElementById(`2,2`).classList.contains('playerTwo') && document.getElementById(`3,2`).classList.contains('playerTwo') &&
    document.getElementById(`4,2`).classList.contains('playerTwo') && document.getElementById(`5,2`).classList.contains('playerTwo')
    || 
    document.getElementById(`0,3`).classList.contains('playerTwo') && document.getElementById(`1,3`).classList.contains('playerTwo') &&
    document.getElementById(`2,3`).classList.contains('playerTwo') && document.getElementById(`3,3`).classList.contains('playerTwo') 
    || 
    document.getElementById(`1,3`).classList.contains('playerTwo') && document.getElementById(`2,3`).classList.contains('playerTwo') &&
    document.getElementById(`3,3`).classList.contains('playerTwo') && document.getElementById(`4,3`).classList.contains('playerTwo') 
    || 
    document.getElementById(`2,3`).classList.contains('playerTwo') && document.getElementById(`3,3`).classList.contains('playerTwo') &&
    document.getElementById(`4,3`).classList.contains('playerTwo') && document.getElementById(`5,3`).classList.contains('playerTwo')
    || 
    document.getElementById(`0,4`).classList.contains('playerTwo') && document.getElementById(`1,4`).classList.contains('playerTwo') &&
    document.getElementById(`2,4`).classList.contains('playerTwo') && document.getElementById(`3,4`).classList.contains('playerTwo') 
    || 
    document.getElementById(`1,4`).classList.contains('playerTwo') && document.getElementById(`2,4`).classList.contains('playerTwo') &&
    document.getElementById(`3,4`).classList.contains('playerTwo') && document.getElementById(`4,4`).classList.contains('playerTwo') 
    || 
    document.getElementById(`2,4`).classList.contains('playerTwo') && document.getElementById(`3,4`).classList.contains('playerTwo') &&
    document.getElementById(`4,4`).classList.contains('playerTwo') && document.getElementById(`5,4`).classList.contains('playerTwo')
    || 
    document.getElementById(`0,5`).classList.contains('playerTwo') && document.getElementById(`1,5`).classList.contains('playerTwo') &&
    document.getElementById(`2,5`).classList.contains('playerTwo') && document.getElementById(`3,5`).classList.contains('playerTwo') 
    || 
    document.getElementById(`1,5`).classList.contains('playerTwo') && document.getElementById(`2,5`).classList.contains('playerTwo') &&
    document.getElementById(`3,5`).classList.contains('playerTwo') && document.getElementById(`4,5`).classList.contains('playerTwo') 
    || 
    document.getElementById(`2,5`).classList.contains('playerTwo') && document.getElementById(`3,5`).classList.contains('playerTwo') &&
    document.getElementById(`4,5`).classList.contains('playerTwo') && document.getElementById(`5,5`).classList.contains('playerTwo')
    || 
    document.getElementById(`0,6`).classList.contains('playerTwo') && document.getElementById(`1,6`).classList.contains('playerTwo') &&
    document.getElementById(`2,6`).classList.contains('playerTwo') && document.getElementById(`3,6`).classList.contains('playerTwo') 
    || 
    document.getElementById(`1,6`).classList.contains('playerTwo') && document.getElementById(`2,6`).classList.contains('playerTwo') &&
    document.getElementById(`3,6`).classList.contains('playerTwo') && document.getElementById(`4,6`).classList.contains('playerTwo') 
    || 
    document.getElementById(`2,6`).classList.contains('playerTwo') && document.getElementById(`3,6`).classList.contains('playerTwo') &&
    document.getElementById(`4,6`).classList.contains('playerTwo') && document.getElementById(`5,6`).classList.contains('playerTwo')
    // ********* ALL VERTICAL COMBINATIONS ABOVE
    || 
    document.getElementById(`0,3`).classList.contains('playerTwo') && document.getElementById(`1,4`).classList.contains('playerTwo') &&
    document.getElementById(`2,5`).classList.contains('playerTwo') && document.getElementById(`3,6`).classList.contains('playerTwo')
    || 
    document.getElementById(`0,2`).classList.contains('playerTwo') && document.getElementById(`1,3`).classList.contains('playerTwo') &&
    document.getElementById(`2,4`).classList.contains('playerTwo') && document.getElementById(`3,5`).classList.contains('playerTwo')
    || 
    document.getElementById(`1,3`).classList.contains('playerTwo') && document.getElementById(`2,4`).classList.contains('playerTwo') &&
    document.getElementById(`3,5`).classList.contains('playerTwo') && document.getElementById(`4,6`).classList.contains('playerTwo')
    || 
    document.getElementById(`0,1`).classList.contains('playerTwo') && document.getElementById(`1,2`).classList.contains('playerTwo') &&
    document.getElementById(`2,3`).classList.contains('playerTwo') && document.getElementById(`3,4`).classList.contains('playerTwo')
    || 
    document.getElementById(`1,2`).classList.contains('playerTwo') && document.getElementById(`2,3`).classList.contains('playerTwo') &&
    document.getElementById(`3,4`).classList.contains('playerTwo') && document.getElementById(`4,5`).classList.contains('playerTwo')
    || 
    document.getElementById(`2,3`).classList.contains('playerTwo') && document.getElementById(`3,4`).classList.contains('playerTwo') &&
    document.getElementById(`4,5`).classList.contains('playerTwo') && document.getElementById(`5,6`).classList.contains('playerTwo')
    || 
    document.getElementById(`0,0`).classList.contains('playerTwo') && document.getElementById(`1,1`).classList.contains('playerTwo') &&
    document.getElementById(`2,2`).classList.contains('playerTwo') && document.getElementById(`3,3`).classList.contains('playerTwo')
    || 
    document.getElementById(`1,1`).classList.contains('playerTwo') && document.getElementById(`2,2`).classList.contains('playerTwo') &&
    document.getElementById(`3,3`).classList.contains('playerTwo') && document.getElementById(`4,4`).classList.contains('playerTwo')
    || 
    document.getElementById(`2,2`).classList.contains('playerTwo') && document.getElementById(`3,3`).classList.contains('playerTwo') &&
    document.getElementById(`4,4`).classList.contains('playerTwo') && document.getElementById(`5,5`).classList.contains('playerTwo')
    || 
    document.getElementById(`1,0`).classList.contains('playerTwo') && document.getElementById(`2,1`).classList.contains('playerTwo') &&
    document.getElementById(`3,2`).classList.contains('playerTwo') && document.getElementById(`4,3`).classList.contains('playerTwo')
    || 
    document.getElementById(`2,1`).classList.contains('playerTwo') && document.getElementById(`3,2`).classList.contains('playerTwo') &&
    document.getElementById(`4,3`).classList.contains('playerTwo') && document.getElementById(`5,4`).classList.contains('playerTwo')
    || 
    document.getElementById(`2,0`).classList.contains('playerTwo') && document.getElementById(`3,1`).classList.contains('playerTwo') &&
    document.getElementById(`4,2`).classList.contains('playerTwo') && document.getElementById(`5,3`).classList.contains('playerTwo')
    // ******** ALL BL TO TR DIAGONAL COMBINATIONS **********
    || 
    document.getElementById(`0,3`).classList.contains('playerTwo') && document.getElementById(`1,2`).classList.contains('playerTwo') &&
    document.getElementById(`2,1`).classList.contains('playerTwo') && document.getElementById(`3,0`).classList.contains('playerTwo')
    || 
    document.getElementById(`0,4`).classList.contains('playerTwo') && document.getElementById(`1,3`).classList.contains('playerTwo') &&
    document.getElementById(`2,2`).classList.contains('playerTwo') && document.getElementById(`3,1`).classList.contains('playerTwo')
    || 
    document.getElementById(`1,3`).classList.contains('playerTwo') && document.getElementById(`2,2`).classList.contains('playerTwo') &&
    document.getElementById(`3,1`).classList.contains('playerTwo') && document.getElementById(`4,0`).classList.contains('playerTwo')
    || 
    document.getElementById(`0,5`).classList.contains('playerTwo') && document.getElementById(`1,4`).classList.contains('playerTwo') &&
    document.getElementById(`2,3`).classList.contains('playerTwo') && document.getElementById(`3,2`).classList.contains('playerTwo')
    || 
    document.getElementById(`1,4`).classList.contains('playerTwo') && document.getElementById(`2,3`).classList.contains('playerTwo') &&
    document.getElementById(`3,2`).classList.contains('playerTwo') && document.getElementById(`4,1`).classList.contains('playerTwo')
    || 
    document.getElementById(`2,3`).classList.contains('playerTwo') && document.getElementById(`3,2`).classList.contains('playerTwo') &&
    document.getElementById(`4,1`).classList.contains('playerTwo') && document.getElementById(`5,0`).classList.contains('playerTwo')
    || 
    document.getElementById(`0,6`).classList.contains('playerTwo') && document.getElementById(`1,5`).classList.contains('playerTwo') &&
    document.getElementById(`2,4`).classList.contains('playerTwo') && document.getElementById(`3,3`).classList.contains('playerTwo')
    || 
    document.getElementById(`1,5`).classList.contains('playerTwo') && document.getElementById(`2,4`).classList.contains('playerTwo') &&
    document.getElementById(`3,3`).classList.contains('playerTwo') && document.getElementById(`4,2`).classList.contains('playerTwo')
    || 
    document.getElementById(`2,4`).classList.contains('playerTwo') && document.getElementById(`3,3`).classList.contains('playerTwo') &&
    document.getElementById(`4,2`).classList.contains('playerTwo') && document.getElementById(`5,1`).classList.contains('playerTwo')
    || 
    document.getElementById(`1,6`).classList.contains('playerTwo') && document.getElementById(`2,5`).classList.contains('playerTwo') &&
    document.getElementById(`3,4`).classList.contains('playerTwo') && document.getElementById(`4,3`).classList.contains('playerTwo')
    || 
    document.getElementById(`2,5`).classList.contains('playerTwo') && document.getElementById(`3,4`).classList.contains('playerTwo') &&
    document.getElementById(`4,3`).classList.contains('playerTwo') && document.getElementById(`5,2`).classList.contains('playerTwo')
    || 
    document.getElementById(`2,6`).classList.contains('playerTwo') && document.getElementById(`3,5`).classList.contains('playerTwo') &&
    document.getElementById(`4,4`).classList.contains('playerTwo') && document.getElementById(`5,3`).classList.contains('playerTwo')
     // ******** ALL BR TO TL DIAGONAL COMBINATIONS **********


    ){
        document.getElementById(`p1`).innerHTML = 'Eggs & Bacon Win!'
    }
}

const changeClass = () => {
    document.body.classList.toggle('darkMode')
    document.getElementById('gameboard').classList.toggle('darkMode')
  }
  
  darkMode.addEventListener('click', changeClass)
