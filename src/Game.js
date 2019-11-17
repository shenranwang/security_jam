import { TurnOrder } from "boardgame.io/dist/cjs/reducer-346fc670";
import cards from './cards'

const deliverCard = () => {
    const index = Math.floor(Math.random() * cards.length)
    const card = Object.assign({}, cards[index])
    card.id = Math.floor(Math.random() * 1297831)
    return card
}

const initializeHand = () => {
    let b = []
    for (var i=0; i < 3; i++){
        b.push(deliverCard())
    }
    return b
}


const Game = {
    name: 'Defensio',
    setup: () => {
        return {
            player: {
                health: 30.0,
                shield: 1.0,
                modifiers: [],
                hand: initializeHand()
            },
            computer: {
                health: 30.0,
                shield: 1.0,
                modifiers: [],
                hand: initializeHand()
            },
            turn: 'player',
            opponent: 'computer',
            mode: 'new'
        }
    },
    moves: {
        clickCard: (G, ctx, effect) => {
            effect(G)
            const turn = G.turn
            turn === 'player' ? G.turn = 'computer' : G.turn = 'player'
            G.opponent = turn
            const player = G[G.turn]
            player.shield = 1.0
            for(let mod of player.modifiers) {
                mod.apply(player) 
                mod.duration--
            }
            player.modifiers = player.modifiers.filter(f => f.duration)
/*             const index = Math.floor(Math.random() * G.computer.cards.length)
            console.log(G.mode)
            G.computer.cards[index][G.mode].effect(G)
            events.endTurn()
            const turn2 = G.turn
            turn2 === 'player' ? G.turn = 'computer' : G.turn = 'player'
            G.opponent = turn2
            const player2 = G[G.turn]
            player2.shield = 1.0
            for(let mod of player2.modifiers) {
                player2[mod.attr] += mod.value 
                mod.duration--
            }
            player2.modifiers = player2.modifiers.filter(f => f.duration) */
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
        order: TurnOrder.DEFAULT,
        moveLimit: 1
    }
};

export default Game