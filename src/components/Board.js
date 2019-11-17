import React, { useState, useEffect } from 'react';
import Hand from './Hand';
import cards from '../cards';

const GameBoard = (props) => {

  const [chosenCard, setChosenCard] = useState(null)
  const [hand, setHand] = useState(props.G.player.hand)

  useEffect(() => {
    setHand(props.G.player.hand)
  }, [props.G.player.hand])

const consumeCard = () => {
  const effect = props.G.player.hand.find(z => z.id === chosenCard)[props.G.mode].effect
  props.G.player.hand = props.G.player.hand.filter(z => z.id !== chosenCard)
  setHand(props.G.player.hand)
  props.moves.clickCard(effect)
  props.events.endTurn()
}

  return (
    <div>
      <div className='view'>
        <div className='board' onClick={consumeCard}>
          <img src='\images\hearthstoneboard.jpg' style={{width:"100vw"}}></img>
        </div>
          <div className='bottomBar'>
            <img className='healthJug' src="/images/health1.png"></img>

            <Hand mode={props.G.mode} onClick={(id) => setChosenCard(id)} className='hand' hand={hand}/>
          </div>

        </div>
         
    </div>
  )

}

export default GameBoard