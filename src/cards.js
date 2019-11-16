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
        name: 'Trojan Horse',
        new: {
            description: 'Harmful software that disguises itself as normal file or program. A Trojan can cause major damage',
            effects: 'Target takes increased damage',
            effect: G => {
                G[G.opponent].health -= 8 / G[G.opponent].shield
                G[G.opponent].modifiers.push({
                duration: 2,
                attr: 'shield',
                value: -0.3
            })}
            
        },
        old: {
            description: 'An attack disguised as a gift',
            effects: 'Target takes increased damage',
            effect: G => {
                G[G.opponent].health -= 8 / G[G.opponent].shield
                G[G.opponent].modifiers.push({
                duration: 2,
                attr: 'shield',
                value: -0.15
            })}
        }
    },
    {
        name: 'Worm',
        new:{
            description: 'Worm is a harmful program that is able to self-replicate and spread independently. Worms harm the infected computer by slowing connection to Internet. They can also steal data and delete files.',
            effects: 'Decreases target`s shield for three turns',
            effect: G => {
                G[G.opponent].modifiers.push({
                    duration: 3,
                    attr: 'shield',
                    value: -0.45
                })
            }
        },
        old:{
            description: 'The attacker encourages criminal organizations to infiltrate his enemy’s kingdom causing loss of resources and damage.',
            effects: 'Decreases target`s shield for three turns',
            effect: G => {
                G[G.opponent].modifiers.push({
                    duration: 3,
                    attr: 'shield',
                    value: -0.45
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
                    duration: 2,
                    attr: 'health',
                    value: -2
                })
            }
        },
        old:{
            description: 'Use biological means to weaken your opponent.',
            effects: 'Decreases the infected computer’s HP. (Damage increases gradually) until the Virus is removed.',
            effects: G => {
                G[G.opponent].modifiers.push({
                    duration: 2,
                    attr: 'health',
                    value: -2
                })
            }
            
        }
    }


]

export default cards