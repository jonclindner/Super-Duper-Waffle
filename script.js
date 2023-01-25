//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// .split() takes strings and turns them into an ordered array. 

//https://stackoverflow.com/questions/13272406/convert-string-with-commas-to-array
//Another source to turn stings into arrays.

//https://stackoverflow.com/questions/27135846/how-to-print-a-value-in-console-log-base-on-id-of-an-element  How to access just the ID in an element.

//Renders the "playerOne" color to the selected plate
// from: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

const plates = document.querySelectorAll('.plate')
let currentPlayer = 0

const playGame = () => {
for (let i = 0; i < plates.length; i++) {
    plates[i].onclick = () => {
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
                playGame()
            }
            else if (!document.getElementById(`1,${x}`).classList.contains('alreadyPlayed')){
                document.getElementById(`1,${x}`).classList.add('playerOne')
                document.getElementById(`1,${x}`).classList.add('alreadyPlayed')
                currentPlayer = 1
                playGame()
            }
            else if (!document.getElementById(`2,${x}`).classList.contains('alreadyPlayed')){
                document.getElementById(`2,${x}`).classList.add('playerOne')
                document.getElementById(`2,${x}`).classList.add('alreadyPlayed')
                currentPlayer = 1
                playGame()
            }
            else if (!document.getElementById(`3,${x}`).classList.contains('alreadyPlayed')){
                document.getElementById(`3,${x}`).classList.add('playerOne')
                document.getElementById(`3,${x}`).classList.add('alreadyPlayed')
                currentPlayer = 1
                playGame()
            }
            else if (!document.getElementById(`3,${x}`).classList.contains('alreadyPlayed')){
                document.getElementById(`3,${x}`).classList.add('playerOne')
                document.getElementById(`3,${x}`).classList.add('alreadyPlayed')
                currentPlayer = 1
                playGame()
            }
            else if (!document.getElementById(`4,${x}`).classList.contains('alreadyPlayed')){
                document.getElementById(`4,${x}`).classList.add('playerOne')
                document.getElementById(`4,${x}`).classList.add('alreadyPlayed')
                currentPlayer = 1
                playGame()
            }
            else if (!document.getElementById(`5,${x}`).classList.contains('alreadyPlayed')){
                document.getElementById(`5,${x}`).classList.add('playerOne')
                document.getElementById(`5,${x}`).classList.add('alreadyPlayed')
                currentPlayer = 1
                playGame()
            }
            else {
                alert("That table is full.")
            }


            
            //     if (document.getElementById(`${x},0`).classList.conatains('alreadyPlayed')) {
            //     document.getElementById(`${x},0`).classList.add('playerOne')
            //     currentPlayer = 1
            // }
            // else {
            //     console.log("IT WAS ELSE")
            //     document.getElementById(`${x},0`).classList.add('playerOne')
            //     currentPlayer = 1
            // }
            


                // plates[i].classList.add('playerOne')
                // // document.getElementById(`0,${y}`).classList.add('playerOne')
                // // document.getElementById('0,0').classList.add('alreadyPlayed')
                // currentPlayer = 1
                // // console.log(document.getElementById(`${x},0`))
                // console.log(document.getElementById(`${x},0`))
            
           
            // }

            // console.log("playerSelection " + playerSelection)
            // console.log("belowSelection " + belowSelection)
            // console.log(document.getElementById(belowSelection))
            
            // plates[i].classList.add('playerOne')
            // currentPlayer = 1 **** moved to y === x statements
            // console.log(plates[i])
            // console.log("plates[i].id " + plates[i].id)
            // console.log("plates[i].class " + plates[i].className)
            // console.log(x)
            // console.log(y)
            // console.log(`document.getElementById("plates[i].id") ` + document.getElementById("plates[i].id"))
            
            
            
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
                playGame()
            }
            else if (!document.getElementById(`1,${x}`).classList.contains('alreadyPlayed')){
                document.getElementById(`1,${x}`).classList.add('playerTwo')
                document.getElementById(`1,${x}`).classList.add('alreadyPlayed')
                currentPlayer = 0
                playGame()
            }
            else if (!document.getElementById(`2,${x}`).classList.contains('alreadyPlayed')){
                document.getElementById(`2,${x}`).classList.add('playerTwo')
                document.getElementById(`2,${x}`).classList.add('alreadyPlayed')
                currentPlayer = 0
                playGame()
            }
            else if (!document.getElementById(`3,${x}`).classList.contains('alreadyPlayed')){
                document.getElementById(`3,${x}`).classList.add('playerTwo')
                document.getElementById(`3,${x}`).classList.add('alreadyPlayed')
                currentPlayer = 0
                playGame()
            }
            else if (!document.getElementById(`3,${x}`).classList.contains('alreadyPlayed')){
                document.getElementById(`3,${x}`).classList.add('playerTwo')
                document.getElementById(`3,${x}`).classList.add('alreadyPlayed')
                currentPlayer = 0
                playGame()
            }
            else if (!document.getElementById(`4,${x}`).classList.contains('alreadyPlayed')){
                document.getElementById(`4,${x}`).classList.add('playerTwo')
                document.getElementById(`4,${x}`).classList.add('alreadyPlayed')
                currentPlayer = 0
                playGame()
            }
            else if (!document.getElementById(`5,${x}`).classList.contains('alreadyPlayed')){
                document.getElementById(`5,${x}`).classList.add('playerTwo')
                document.getElementById(`5,${x}`).classList.add('alreadyPlayed')
                currentPlayer = 0
                playGame()
            }
            else {
                alert("That table is full.")
                playGame()
            }
            
        }
    }
}
}

playGame()

