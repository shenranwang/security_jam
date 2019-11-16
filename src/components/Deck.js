import React from 'react';
import Card from './Card';

const Deck = ({cards}) => {
    const [activeCards, setActiveCards] = useState([])
    const deckStyle = {
        border: '3px solid #555',
        width: '66px',
        height: '100px',
        lineHeight: '50px',
        textAlign: 'center',
    }
    return ( 
        <td style={deckStyle} key={this.props.id} onClick={this.props.onClick}>
            {this.props.G.cells[this.props.id]}
        </td>
    )
}

export default Deck