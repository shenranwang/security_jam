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
        player[mod.attr] += mod.value 
        mod.duration--
    }
    player.modifiers = player.modifiers.filter(f => f.duration)
    const index = Math.floor(Math.random() * Math.floor(props.G.computer.cards.length))
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

  return (
    <div>
      <div className='view'>
        <div className='helper'>
          <img src='/images/llama.png' style={{width:"250px", right:"0px"}}></img>
        </div>


        <div className='board'>
          <img src='\images\hearthstoneboard.jpg' style={{width:"100vw"}}></img>
          <div className='enemy'>
              <img src='\images\opponent-old.png' style={{width:"200px"}}></img>
          </div>
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