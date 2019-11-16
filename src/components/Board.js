import React from 'react';
import Deck from './Deck';
import cards from '../cards';

const GameBoard = (props) => {

  return (
    <div>
        <Deck cards = {cards}/>
        <Deck style={{ marginTop: '200px' }} cards = {cards}/>
    </div>
  )
  
}

export default GameBoard