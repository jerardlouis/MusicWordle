import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'
import { BOWERY} from '../constants/bowery'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  /*
  const epochMs = 1641013200000
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  //var newIndex = index % BOWERY.length
  */
  /*
  return {
    solution: BOWERY[newIndex].toUpperCase(),
    solutionIndex: newIndex,
  }
  */
 
 return {
   solution: BOWERY[3].toUpperCase(),
   solutionIndex: 3
 }
 
}

export const { solution, solutionIndex } = getWordOfDay()
