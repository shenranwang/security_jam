import { TurnOrder } from "boardgame.io/dist/cjs/reducer-346fc670";
import cards from './cards'

const Game = {
    name: 'Defensio',
    setup: () => {
        return {
            player: {
                health: 30.0,
                shield: 1.0,
                modifiers: [],
                cards
            },
            computer: {
                health: 30.0,
                shield: 1.0,
                modifiers: [],
                cards
            },
            turn: 'player',
            opponent: 'computer',
            mode: 'new'
        }
    },
    turn: {
        order: TurnOrder.DEFAULT
    }
};

export default Game