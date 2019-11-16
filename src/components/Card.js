import React from 'react';

const Card = () => {
    const cardStyle = {
        border: '3px solid #555',
        width: '66px',
        height: '100px',
        lineHeight: '50px',
        textAlign: 'center',
    }
    return (
        <td style={cardStyle} key={this.props.id} onClick={this.props.onClick}>
            {this.props.G.cells[this.props.id]}
        </td>
    )
}

export default Card