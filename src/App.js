import './App.css'

import {Routes, Route} from 'react-router-dom'

import GamigHomeScreen from './components/GamingHomeScreen'
import RPSgameHomePage from './components/RPSgameHomePage'
import RPSgame from './components/RPSgame'
import EmojiRules from './components/EmojiRules'
import EmojiGame from './components/EmojiGame'
import EmojiGameResult from './components/EmojiGameResultView'
import CardFlipHomePage from './components/CardFlipHomePage'
import CardFlipGame from './components/CardFlipGame'
import MemoryMatrixHome from './components/MemoryMatrixHome'
import MemoryGameBoard from './components/MemoryMatrixGameBoard'

const App = () => (
  <Routes>
    <Route exact path="/" element={<GamigHomeScreen/>} />
    <Route exact path="/rpsGame" element={<RPSgameHomePage/>} />
    <Route exact path="/playRpsgame" element={<RPSgame/>} />
    <Route exact path="/emojiGame" element={<EmojiRules/>} />
    <Route exact path="/playEmojiGame" element={<EmojiGame/>} />
    <Route exact path="/emojiResult" element={<EmojiGameResult/>} />
    <Route exact path="/cardFlipGame" element={<CardFlipHomePage/>} />
    <Route exact path="/playCardflipGame" element={<CardFlipGame/>} />
    <Route exact path="/memoryMatrixGame" element={<MemoryMatrixHome/>} />
    <Route exact path="/playMemoryMatrixgame" element={<MemoryGameBoard/>} />
  </Routes>
)

export default App
