import React, { useState, useEffect } from 'react';
import Card from './Card';

const Deck = (props) => {
    const [activeCards, setActiveCards] = useState([])

    useEffect(() => {
        setActiveCards(props.cards)
    }, [])
    const [nextCard, setNextCard] = useState(0)

    return (
        <div className='Deck' style={props.style}>
            {activeCards.map((card, i) => (
                <Card key={i} name={card.name} description={card.description} special={card.special}/>
            ))}
        </div>
    )
}

export default Deck