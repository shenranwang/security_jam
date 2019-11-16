import { Client } from 'boardgame.io/react';
import Game from './Game';
import GameBoard from './components/Board'

const App = Client({ game: Game, board: GameBoard, debug: true });

export default App;
