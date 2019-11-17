import { TurnOrder } from "boardgame.io/dist/cjs/reducer-346fc670";
import cards from './cards'

const deliverCard = () => {
    const a = []
    const index = Math.floor(Math.random() * cards.length)
    const card = Object.assign({}, cards[index])
    card.id = Math.floor(Math.random() * 1297831)
    a.push(card)
    return a
}


const Game = {
    name: 'Defensio',
    setup: () => {
        return {
            player: {
                health: 30.0,
                shield: 1.0,
                modifiers: [],
                hand: deliverCard()
            },
            computer: {
                health: 30.0,
                shield: 1.0,
                modifiers: [],
                hand: deliverCard()
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