import React, { useState, useEffect } from 'react';
import Card from './Card';

const Deck = (props) => {
    const [activeCards, setActiveCards] = useState([])

    useEffect(() => {
        setActiveCards(props.cards)
    }, [])

    return (
        <div className='Deck' style={props.style}>
            {activeCards.map((card, i) => (
                <Card
                    onClick={props.onClick} 
                    key={i} 
                    name={card.name} 
                    description={card[props.mode].description} 
                    effect={card[props.mode].effect}/>
            ))}
        </div>
    )
}

export default Deck