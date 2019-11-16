import React, { useState, useEffect } from 'react';
import Card from './Card';

const Deck = (props) => {
    const [activeCards, setActiveCards] = useState([])

    useEffect(() => {
        setActiveCards(props.cards)
    }, [])
    const [nextCard, setNextCard] = useState(0)

    /*const addCards = () => {
        setActiveCards(activeCards.concat(props.cards.slice(nextCard, nextCard + 2)))
        setNextCard(nextCard + 3)
    }*/

    return (
        <div className='Deck' style={props.style}>
            {activeCards.map((card, i) => (
                <Card key={i} name={card.name} description={card.description} special={card.special}/>
            ))}
        </div>
    )
}

export default Deck