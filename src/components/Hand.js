import React, { useState, useEffect } from 'react';
import Card from './Card';


const Hand = (props) => {
    //const [activeCards, setActiveCards] = useState([])
/*
    useEffect(() => {
        setActiveCards(props.hand)
    }, [])
    */

    

    return (
        <div className='hand' style={props.style}>
            {props.hand.map((card, i) => (
                <Card
                    onClick={props.onClick} 
                    mode = {props.mode}
                    key={i} 
                    name={card.name} 
                    description={card[props.mode].description} 
                    effect={card[props.mode].effect}
                    id={card.id}/>
            ))}
        </div>
    )
}

export default Hand