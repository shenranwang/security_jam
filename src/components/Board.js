import React, { useState, useEffect } from 'react';
import Hand from './Hand';
import cards from '../cards';

const GameBoard = (props) => {

    const [chosenCard, setChosenCard] = useState(null)
    const [hand, setHand] = useState(props.G.player.hand)

    const consumeCard = () => {
        if(chosenCard) {
            const card = props.G.player.hand.find(z => z.id === chosenCard)
            if(card) {
                const effect = card[props.G.mode].effect
                props.moves.clickCard(effect)
                props.G.player.hand = props.G.player.hand.filter(z => z.id !== chosenCard)
                setHand(props.G.player.hand)
                props.events.endTurn()
                setChosenCard(null) 
            }
        }
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