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
        name: 'Security',
        new: {
            description: 'Improve your system defences by fixing security errors',
            effects: 'Double your shield for 2 rounds',
            effect: G => G[G.turn].modifiers.push({
                duration: 2,
                apply: (player) => player.shield *= 2
            })
        },
        old: {
            description: 'Fix holes in your city walls',
            effects: '',
            effect: () => {}
        }
    },
    {
        name: 'Trojan Horse',
        new: {
            description: 'Harmful software that disguises itself as normal file or program. A Trojan can cause major damage',
            effects: 'Target takes increased damage',
            effect: G => {
                G[G.opponent].health -= 8 / G[G.opponent].shield
                G[G.opponent].modifiers.push({
                    duration: 2,
                    apply: player => player.shield *= 0.7
                })
            }
        },
        old: {
            description: 'An attack disguised as a gift',
            effects: 'Target takes increased damage',
            effect: G => {
                G[G.opponent].health -= 8 / G[G.opponent].shield
                G[G.opponent].modifiers.push({
                    duration: 2,
                    apply: player => player.shield *= 0.7
                })
            }
        }
    },
    {
        name: 'Worm',
        new:{
            description: 'Worm is a harmful program that is able to self-replicate and spread independently. Worms harm the infected computer by slowing connection to Internet. They can also steal data and delete files.',
            effects: 'Decreases target`s shield for three turns',
            effect: G => {
                G[G.opponent].modifiers.push({
                    duration: 5,
                    apply: player => player.shield *= 0.9
                })
            }
        },
        old:{
            description: 'The attacker encourages criminal organizations to infiltrate his enemy’s kingdom causing loss of resources and damage.',
            effects: 'Decreases target`s shield for three turns',
            effect: G => {
                G[G.opponent].modifiers.push({
                    duration: 3,
                    apply: player => player.shield *= 0.9
                })
            }

        }
    },
    {
        name: 'Virus',
        new:{
            description: 'Virus is a harmful program that is capable of copying itself and spreading to other computers.',
            effects: 'Decreases the infected computer’s HP. (Damage increases gradually) until the Virus is removed.',
            effects: G => {
                G[G.opponent].modifiers.push({
                    duration: 4,
                    apply: player => player.health -= 2
                })
            }
        },
        old:{
            description: 'Use biological means to weaken your opponent.',
            effects: 'Decreases the infected computer’s HP. (Damage increases gradually) until the Virus is removed.',
            effects: G => {
                G[G.opponent].modifiers.push({
                    duration: 2,
                    apply: player => player.health -= 2
                })
            }
        }
    },
    {      
        name: 'Infiltration',
        new: {
            description: 'Install a rootkit to your enemy computer',
            effects: 'Destroy a random card from the opponent\'s hand',
            effect: G => {
                const opponent = G[G.opponent]
                const r = Math.floor(Math.random() * opponent.cards.length)
                opponent.cards = opponent.cards.filter((card, i) => i != r)
            } 
        },
        old: {
            description: 'Corrupt the enemy mayor to lower the enemy morale',
            effects: 'Weakens the opponent\'s shield by 30% for 3 turns',
            effect: G => G[G.opponent].modifiers.push({
                duration: 3,
                apply: player => player.shield *= 0.7
            })
        }
    },
    {
        name: 'Brute force',
        new: {
            description: 'Try all possible combinations of enemy\'s passwords. ...Or at least a lot of them.',
            effects: 'Depending on the enemy\'s shield, a chance to steal 2 cards from the enemy',
            effect: G => {
                const r = Math.random() * G[G.opponent].shield
            }
        },
        old: {
            description: 'Launch a large scale attack on the enemy',
            effects: 'Take 5 health and lower shield by 30% for 2 rounds',
            effect: G => console.log('myötistä')
        }
    }
]

export default cards