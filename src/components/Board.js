import React, { useState, useEffect } from 'react';
import Hand from './Hand';
import cards from '../cards';

const GameBoard = (props) => {

    const [chosenCard, setChosenCard] = useState(null)
    const [hand, setHand] = useState(props.G.player.hand)

    const consumeCard = () => {
        if(chosenCard) {
          console.log(props.G.player.hand)
          const card = props.G.player.hand.find(z => z.id === chosenCard)
          if(card) {
            const effect = card[props.G.mode].effect
            props.moves.clickCard(effect)
            const b = props.G.player.hand.filter(z => z.id !== chosenCard)
            props.G.player.hand = b
            setHand(props.G.player.hand)
            props.events.endTurn()
            setChosenCard(null)
            computerMove()
          }
        }
    }

    const computerMove = () => {
      console.log(props.G.computer.hand.length)
      const id = Math.floor(Math.random() * props.G.computer.hand.length)
      const card = props.G.computer.hand[id]
      if (card) {
        console.log(card)
        const effect = card[props.G.mode].effect
        props.moves.clickCard(effect)
        props.events.endTurn()
      }
    }

    return (
        <div>
            <div className='view'>
                <img src='\images\OpponentNew.svg' style={{position:"absolute", zIndex:"2"}}></img>
                <img src='\images\LeftMountains.svg' style={{position: 'absolute', left:"0px", zIndex:"1"}}></img>
                <img src='\images\RightCity.svg' style={{position: 'absolute', zIndex:'1'}}></img>
                <div className='board' onClick={consumeCard}>
                    <img src='\images\BackgroundNew.png' style={{width:"100vw"}}></img>
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
