import React from 'react';
import Deck from './Deck';
import cards from '../cards';

const GameBoard = (props) => {

    const onClick = (name) => {
        if(cards.find(c => c.name == name)) {
            props.events.endTurn()
        }
    }
    return (
        <div>
            <Deck onClick={onClick} style={{ marginTop: '200px' }} cards = {cards}/>
        </div>
    )
  
}

export default GameBoard