import React, { useState, useEffect } from 'react';
import Hand from './Hand';
import cards from '../cards';

const GameBoard = (props) => {

    const [chosenCard, setChosenCard] = useState(null)
    const [hand, setHand] = useState(props.G.player.hand)
    const [healthImagePath, setHealthImagePath] = useState("/images/HealthNew4.png")

    const consumeCard = () => {
      console.log(hand)
        if(chosenCard) {
          console.log(props.G.player.hand)
          const card = props.G.player.hand.find(z => z.id === chosenCard)
          if(card) {
            const effect = card[props.G.mode].effect
            props.moves.clickCard(effect)
            checkHealth()
/*             const b = props.G.player.hand.filter(z => z.id !== chosenCard)
            props.G.player.hand = b
            setHand(props.G.player.hand) */
            props.events.endTurn()
            setChosenCard(null)
            computerMove()
          }
        }
    }

    const checkHealth = () => {
      if (props.G.computer.health >= 25) setHealthImagePath("/images/HealthNew4.png")
      else if (props.G.computer.health >= 17) setHealthImagePath("/images/HealthNew3.png")
      else if (props.G.computer.health >= 9) setHealthImagePath("/images/HealthNew2.png")
      else setHealthImagePath("/images/HealthNew1.png")
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
            
                <div className='board' onClick={consumeCard}>
                   <img src='\images\BackgroundNew.png' style={{width:"100vw",position:"absolute"}}></img>
                   <img className='rightCity'src='\images\OpponentNew.svg' style={{position:"absolute"}}></img>
                   <img className='leftMountains'src='\images\LeftMountains.svg' style={{position: 'absolute'}}></img>
                   <img className='rightCity' src='\images\RightCity.svg' style={{position: 'absolute'}}></img>
                </div>
                <div className='bottomBar'>
                    <img className='healthJug' src={healthImagePath}></img>

                    <Hand mode={props.G.mode} onClick={(id) => setChosenCard(id)} className='hand' hand={hand}/>
                </div>
            </div>
        </div>
    )

}

export default GameBoard
