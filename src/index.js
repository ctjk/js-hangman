import Hangman from './hangman'
import {getPuzzle} from './requests'

const puzzle = document.querySelector('#puzzle')
const remainingGuesses = document.querySelector('#remaining-guesses')
let game

const renderPuzzle = () => {
    puzzle.innerHTML = ''
    remainingGuesses.textContent = game.statusMessage

    game.puzzle.split('').forEach(letter => {
        const span = document.createElement('span')
        span.textContent = letter
        puzzle.appendChild(span)
    });
}

const startGame = async () => {
    const puzzle = await getPuzzle(2)
    game = new Hangman(puzzle, 5)
    renderPuzzle()
}

window.addEventListener('keypress', e => {              
    game.makeGuess(String.fromCharCode(e.charCode))
    renderPuzzle()
})

document.querySelector('#reset').addEventListener('click', startGame)  

startGame()
