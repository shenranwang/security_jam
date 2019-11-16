import React from 'react';
import Deck from './Deck';

const GameBoard = (props) => {

  playerDeck = <Deck />
  computerDeck = <Deck />

  const onClick = (id) => {
    if (isActive(id)) {
      props.moves.clickCell(id);
      props.events.endTurn();
    }
  }

  const isActive = (id) => {
    if (!props.isActive) return false;
    if (props.G.cells[id] !== null) return false;
    return true;
  }
  
  return (
    null
  )
  
}

export default GameBoard