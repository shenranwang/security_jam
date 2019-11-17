import React, { useState } from 'react';
import '../App.css';






const Card = (props) => {
    const [mouseOver, setMouseOver] = useState(false)
    const onClick = () => {
        props.onClick(props.id)
    }
    return (
        <div className='cardWrapper'>
            
            <div 
                onClick={onClick}
                style={mouseOver ? { 
                    transform: 'translateY(-100px) scaleY(1.5) scaleX(1.5)',
                    zIndex: "3"
                } : {} } 
                className='card'
                key={props.id}
                onMouseEnter={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(false)}
                >
                
                <img src={`/images/${props.name}_${props.mode}.jpg`} className='cardImage' />
                

                <div className='content'>
                    <div className='imageBorder'></div>
                    <div className='text'>
                        <div className='header'>{props.name}</div>
                        { mouseOver ? 
                            <div>
                                <div className='description'>{props.description}</div> 
                                <div>{props.effects}</div>
                            </div>
                        : null}
                    </div>
                </div>
               
            </div>
        </div>
       
    )
}

export default Card