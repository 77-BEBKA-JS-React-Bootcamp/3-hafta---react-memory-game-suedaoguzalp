import React, {Component} from 'react';

import question2 from '/Users/suedaoguzalp/memory-game/src/img/question2.png';
import './Card.css';

class Card extends Component {
    render(){
        const { cardEmoji, onClickHandler } = this.props;
        return (
            <div className="card">
                {<img onClick={onClickHandler} className={cardEmoji.open ? 'card-open' : 'card-closed'} src={cardEmoji.open ? cardEmoji.image : question2} alt={cardEmoji.name} />}
            </div>
        )
    }
}

export default Card;