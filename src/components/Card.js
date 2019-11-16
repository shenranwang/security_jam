import React from 'react';
import '../App.css';

const Card = (props) => {
    return (
        <div onClick={() => props.special ? props.special(true) : {}} className='Card' key={props.id}>
            <h3>{props.name}</h3>
            <div>{props.description}</div>
        </div>
    )
}

export default Card