import React, { useState } from 'react';
import '../App.css';

const Card = (props) => {
    const [mouseOver, setMouseOver] = useState(false)
    const onClick = () => {
        props.onClick(props.name)
        if(props.special) props.special(true)
    }
    return (
        <div 
            onClick={onClick}
            style={mouseOver ? { transform: 'scale(1.5)' } : {} } 
            className='Card'
            key={props.id}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            >
            <h3>{props.name}</h3>
            { mouseOver ? <div style={{fontSize: '10px'}}>{props.description}</div> : null}
        </div>
    )
}

export default Card