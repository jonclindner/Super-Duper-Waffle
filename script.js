//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// .split() takes strings and turns them into an ordered array. 

//https://stackoverflow.com/questions/13272406/convert-string-with-commas-to-array
//Another source to turn stings into arrays.



const plates = document.querySelectorAll('.plate')
let currentPlayer = 0

const playGame = () => {
for (let i = 0; i < plates.length; i++) {
    plates[i].onclick = () => {
        if (currentPlayer === 0) {
        //Reners the "playerOne" color to the selected plate
        // from: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
            plates[i].classList.add('playerOne')
            currentPlayer = 1
            console.log(plates[i].id)
            //https://stackoverflow.com/questions/27135846/how-to-print-a-value-in-console-log-base-on-id-of-an-element  How to access just the ID in an element.
            playGame()
            
        }
        else if (currentPlayer === 1) {
            plates[i].classList.add('playerTwo')
            currentPlayer = 0 
            console.log(plates[i].id)
            playGame() 
            
        }
    }
}
}

playGame()