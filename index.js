const board = document.getElementById("board")

const tiles = Array.from(board.querySelectorAll("div"))

const target = "TODAY"

var boardIndex = 0
var colIndex = 0
var gameOver = false
var curGuess = ""
var curTiles = []

document.addEventListener('keydown', (event)=> {  
     
    if (boardIndex < tiles.length) {
        if (event.key.length === 1 && colIndex < 5) {
            tiles[boardIndex].innerHTML = event.key.toUpperCase()
            curTiles.push(tiles[boardIndex])
            boardIndex++
            colIndex++
            curGuess = curGuess + event.key
            
        }
        if (event.key == "Enter" && colIndex == 5) {
            colIndex = 0
            compareGuess(curGuess, curTiles)
            
            curGuess = ""
            curTiles = []
        }
        if (event.key == "Backspace") {
            tiles[boardIndex - 1].innerHTML = ""
            if (boardIndex > 0) {
                boardIndex--
            }
            if (colIndex > 0) {
                colIndex--
            }
            if (curButtons.length > 0) {
                curButtons.pop()
            }
        }

    }


});

function compareGuess(guess, arrayOfTiles) {
    if (guess.toUpperCase() === target) {
        arrayOfTiles.forEach((element) => {
          element.style.backgroundColor = "#588c4c";
          element.style.border = "#588c4c solid"

        });
        gameOver = true;
    }
    else {
        // iterate through the tiles inner html and if it is the same as target make it green, if its in target make it yellow
        arrayOfTiles.forEach((currentTile, i) => {
            if (currentTile.innerHTML == target[i]) {
                element.style.backgroundColor = "#588c4c";
                element.style.border = "#588c4c solid"
            }


        });
    }

}





