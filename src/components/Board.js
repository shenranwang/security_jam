import React, { useState, useEffect } from 'react';
import Hand from './Hand';
import cards from '../cards';

const GameBoard = (props) => {

  const [chosenCard, setChosenCard] = useState(null)
  const [hand, setHand] = useState(props.G.player.hand)

  useEffect(() => {
    setHand(props.G.player.hand)
  }, [props.G.player.hand])

  const switchTurn = (effect) => {
    if(effect) effect(props.G)
    props.events.endTurn()
    const turn = props.G.turn
    turn === 'player' ? props.G.turn = 'computer' : props.G.turn = 'player'
    props.G.opponent = turn
    const player = props.G[props.G.turn]
    player.shield = 1.0
    for(let mod of player.modifiers) {
        mod.apply(player) 
        mod.duration--
    }
    player.modifiers = player.modifiers.filter(f => f.duration)
    const index = Math.floor(Math.random() * props.G.computer.cards.length)
    console.log(props.G.mode)
    props.G.computer.cards[index][props.G.mode].effect(props.G)
    props.events.endTurn()
    const turn2 = props.G.turn
    turn2 === 'player' ? props.G.turn = 'computer' : props.G.turn = 'player'
    props.G.opponent = turn2
    const player2 = props.G[props.G.turn]
    player2.shield = 1.0
    for(let mod of player.modifiers) {
        player2[mod.attr] += mod.value 
        mod.duration--
    }
    player2.modifiers = player2.modifiers.filter(f => f.duration)
}


const consumeCard = () => {
    props.G.player.hand = props.G.player.hand.filter(z => z.id !== chosenCard)
    setHand(props.G.player.hand)
}

  return (
    <div>
      <div className='view'>
        <div className='board' onClick={consumeCard}>
          <img src='\images\hearthstoneboard.jpg' style={{width:"100vw"}}></img>
        </div>
          <div className='bottomBar'>
            <img className='healthJug' src="/images/health4.png"></img>

            <Hand mode={props.G.mode} onClick={(id) => setChosenCard(id)} className='hand' hand={hand}/>
          </div>

        </div>
         
    </div>
  )

}

export default GameBoard