import { Game } from "boardgame.io/dist/cjs/reducer-346fc670";

const cards = [
    {
        name: 'Spam',
        new: {
            description: 'Filling your enemy’s mail with unnecessary messages',
            effects: 'Small amount of damage',
            effect: G => G[G.opponent].health -= 3.0 / G[G.opponent].shield
        },
        old: {
            description: 'Disturb the minds of your enemy with propaganda leaflets',
            effects: 'Damage from morale loss',
            effect: G => G[G.opponent].health -= 3.0 / G[G.opponent].shield
        }
    },
    {
        name: 'Security patch',
        new: {
            description: 'Improve your system defences by fixing security errors',
            effects: '',
            effect: G => G[G.turn].modifiers.push({
                duration: 2,
                attr: 'shield',
                value: 1
            })
        },
        old: {
            description: 'Fix holes in your city walls',
            effects: '',
            effect: () => {}
        }
    },
    {
        name: '',
        new: {
            description: '',
            effects: '',
            effect: () => {}
        },
        old: {
            description: '',
            effects: '',
            effect: () => {}
        }
    }
]

export default cards