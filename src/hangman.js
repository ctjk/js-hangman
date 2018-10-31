'use strict' 

class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }

    get puzzle() {
        let result = ''
        this.word.forEach(letter => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                result += letter
            } else {
                result += '*'
            }
        });
        return result
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
    
        if (!this.status === 'playing') {
            return
        }
        
        if (isUnique) {
            this.guessedLetters.push(guess)
        }
        if (isUnique && !this.word.includes(guess)) {
            this.remainingGuesses--
        }
    }

    get statusMessage() {
        let message = ''
        if (this.puzzle.includes('*')) {
            if (this.remainingGuesses === 0) {
                this.status = 'failed'
                message = `Nice try! The word was "${this.word.join('')}".`
            } else {
                this.status = 'playing'
                message = `Guesses left: ${this.remainingGuesses}`
            }
        } else {
            this.status = 'finished'
            message = 'Great work! You guessed the word.'
        }
        return message
    }
    
}

export {Hangman as default}