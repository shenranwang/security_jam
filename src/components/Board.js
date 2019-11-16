import React from 'react';
import Hand from './Hand';
import cards from '../cards';

const GameBoard = (props) => {

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

            <Hand className='hand' cards = {cards}/>
          </div>

        </div>
         
    </div>
  )
  
}

export default GameBoard