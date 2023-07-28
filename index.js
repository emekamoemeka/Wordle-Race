const board = document.getElementById("board")

const tiles = Array.from(board.querySelectorAll("div"))

const target = "TODAY"

var boardIndex = 0
var colIndex = 0

// need one data type to store guessed word and one to store array of tiles, which correspond to guesed word, hashmap?

var curGuess = ""
var curTiles = []

document.addEventListener('keydown', (event)=> {  
     
function correct(tile) {
    tile.backgroundColor = "#588c4c"
}
    if (boardIndex < tiles.length) {
        if (event.key.length === 1 && colIndex < 5) {
            tiles[boardIndex].innerHTML = event.key.toUpperCase()
            boardIndex++
            colIndex++
            curGuess = curGuess + event.key
            curTiles = curTiles + tiles[boardIndex]
        }
        if (event.key == "Enter" && colIndex == 5) {
            colIndex = 0
        
            if (curGuess.toUpperCase() == target) {
                console.log(curTiles)

            }
            curGuess = []
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





