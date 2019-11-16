import React, { useState } from 'react';
import '../App.css';






const Card = (props) => {
    const [mouseOver, setMouseOver] = useState(false)
    return (
        <div className='cardWrapper'>
            
            <div 
                onClick={() => props.special ? props.special(true) : {}}
                style={mouseOver ? { 
                    transform: 'translateY(-100px) scaleY(1.5) scaleX(1.5)',
                    zIndex: "3"
                } : {} } 
                className='card'
                key={props.id}
                onMouseEnter={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(false)}
                >
                
                <img src={`/images/${props.name}.png`} className='cardImage' />
                

                <div className='content'>
                    <div className='imageBorder'></div>
                    <div className='text'>
                        <div className='header'>{props.name}</div>
                        { mouseOver ? <div className='description'>{props.description}</div> : null}
                    </div>
                </div>
               
            </div>
        </div>
       
    )
}

export default Card