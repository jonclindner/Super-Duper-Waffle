//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// .split() takes strings and turns them into an ordered array. 

//https://stackoverflow.com/questions/13272406/convert-string-with-commas-to-array
//Another source to turn stings into arrays.

//https://stackoverflow.com/questions/27135846/how-to-print-a-value-in-console-log-base-on-id-of-an-element  How to access just the ID in an element.

//Renders the "playerOne" color to the selected plate and can be used to only select elements that have certain classes.
// from: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

//https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

//https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click 
// Used "<button onClick="window.location.reload();">Refresh Page</button>" in HTML to reset page

//https://stackoverflow.com/questions/15860683/onclick-event-in-a-for-loop
//used to insert an onclick event handler into a for loop




const plates = document.querySelectorAll('.plate')
let currentPlayer = (Math.round(Math.random()))
const displayPlayer = () => {
    if (currentPlayer === 0) {
        document.getElementById(`p1`).innerHTML = 'Player One Goes First!'
    }
    if (currentPlayer === 1) {
        document.getElementById(`p2`).innerHTML = 'Player Two Goes First!'
    }
}
const playGame = () => {
for (let i = 0; i < plates.length; i++) {
    plates[i].onclick = () => {
        // plates[i].addEventListener('click', () => {
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
                alert("That table is full.")
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
                alert("That table is full.")
                playGame()
            }
            
        }
        }
// )
}
}
displayPlayer()
playGame()

const checkWin = () => {

    if (document.getElementById(`0,0`).classList.contains('playerOne') && document.getElementById(`0,1`).classList.contains('playerOne') &&
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
    // ********* ALL VERTICAL COMBINATIONS ABOVE
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
    alert ("player one wins!")
    }
    else if (document.getElementById(`0,0`).classList.contains('playerTwo') && document.getElementById(`0,1`).classList.contains('playerTwo') &&
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
    alert ("player two wins!")
    }
}

const changeClass = () => {
    document.body.classList.toggle('darkMode')
  }
  
  btn.addEventListener('click', changeClass)