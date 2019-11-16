import { TurnOrder } from "boardgame.io/dist/cjs/reducer-346fc670";


const Game = {
    name: 'Defensio',
    setup: () => {
        return {
            player: {
                health: 30
            },
            computer: {
                health: 30
            }
        }
    },
    turn: {
        order: TurnOrder.DEFAULT
    }
};

export default Game