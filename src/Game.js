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
    endIf: (G, ctx) => {
        if (G.player.health <= 0.0) {
            alert('player loses')
            return {winner: ctx.currentPlayer}
        }
        if (G.computer.health <= 0.0) {
            alert('computer loses')
            return {winner: ctx.currentPlayer}
        }
    },
    turn: {
        order: TurnOrder.DEFAULT
    }
};

export default Game