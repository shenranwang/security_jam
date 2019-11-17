import React from 'react';
import Hand from './Hand';
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
        mod.apply(player) 
        mod.duration--
    }
    player.modifiers = player.modifiers.filter(f => f.duration)
}

  return (
    <div>
      <div className='view'>
        <div className='board'>
          <img src='\images\hearthstoneboard.jpg' style={{width:"100vw"}}></img>
        </div>
          <div className='bottomBar'>
            <img className='healthJug' src="/images/health4.png"></img>

            <Hand mode={props.G.mode} onClick={switchTurn} className='hand' cards = {cards}/>
          </div>

        </div>
         
    </div>
  )

}

export default GameBoard