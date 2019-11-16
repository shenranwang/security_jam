import React from 'react';
import Deck from './Deck';
import cards from '../cards';

const GameBoard = (props) => {

    const switchTurn = (effect) => {
        if(effect) effect(props.G)
        props.events.endTurn()
        const turn = props.G.turn
        turn === 'player' ? props.G.turn = 'computer' : props.G.turn = 'player'
        props.G.opponent = turn
        const player = props.G[props.G.turn]
        player.shield = 1.0
        for(let mod of player.modifiers) {
            player[mod.attr] += mod.value 
            mod.duration--
        }
        player.modifiers = player.modifiers.filter(f => f.duration)
    }
    return (
        <div>
            <Deck mode={props.G.mode} onClick={switchTurn} style={{ marginTop: '200px' }} cards = {cards}/>
        </div>
    )
  
}

export default GameBoard