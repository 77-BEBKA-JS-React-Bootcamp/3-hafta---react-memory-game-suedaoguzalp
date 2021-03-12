import React, { Component} from 'react'
import Card from '../Card/Card';
import './CardGame.css'
import { shuffle } from 'lodash';

import cryingEmoji from '/Users/suedaoguzalp/memory-game/src/img/cryingEmoji.png';
import moneyEmoji from '/Users/suedaoguzalp/memory-game/src/img/moneyEmoji.png';
import nerdEmoji from '/Users/suedaoguzalp/memory-game/src/img/nerdEmoji.png';
import relievedEmoji from '/Users/suedaoguzalp/memory-game/src/img/relievedEmoji.png';
import tongueOutEmoji from '/Users/suedaoguzalp/memory-game/src/img/tongueOutEmoji.png';
import heartEyesEmoji from '/Users/suedaoguzalp/memory-game/src/img/heartEyesEmoji.png';
import shylySmilingEmoji from '/Users/suedaoguzalp/memory-game/src/img/shylySmilingEmoji.png';
import headBandageEmoji from '/Users/suedaoguzalp/memory-game/src/img/headBandageEmoji.png';


class CardGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [
                { name: 'cryingEmoji', open: false, id: 1, image: cryingEmoji, isCompleted: false },
                { name: 'moneyEmoji', open: false, id: 2, image: moneyEmoji, isCompleted: false },
                { name: 'nerdEmoji', open: false, id: 3, image: nerdEmoji, isCompleted: false },
                { name: 'relievedEmoji', open: false, id: 4, image: relievedEmoji, isCompleted: false },
                { name: 'tongueOutEmoji', open: false, id: 5, image: tongueOutEmoji, isCompleted: false },
                { name: 'heartEyesEmoji', open: false, id: 6, image: heartEyesEmoji, isCompleted: false},
                { name: 'shylySmilingEmoji', open: false, id: 7, image: shylySmilingEmoji, isCompleted: false},
                { name: 'headBandageEmoji', open: false, id: 8, image: headBandageEmoji, isCompleted: false },
                { name: 'cryingEmoji', open: false, id: 9, image: cryingEmoji, isCompleted: false },
                { name: 'moneyEmoji', open: false, id: 10, image: moneyEmoji, isCompleted: false },
                { name: 'nerdEmoji', open: false, id: 11, image: nerdEmoji, isCompleted: false },
                { name: 'relievedEmoji', open: false, id: 12, image: relievedEmoji, isCompleted: false },
                { name: 'tongueOutEmoji', open: false, id: 13, image: tongueOutEmoji, isCompleted: false },
                { name: 'heartEyesEmoji', open: false, id: 14, image: heartEyesEmoji, isCompleted: false},
                { name: 'shylySmilingEmoji', open: false, id: 15, image: shylySmilingEmoji, isCompleted: false},
                { name: 'headBandageEmoji', open: false, id: 16, image: headBandageEmoji, isCompleted: false },
            
            ],
            shuffledCards: [],
            matchedCards: [],
            flippedCards: [],
        }

}
componentDidMount() {
    this.setState({ shuffledCards: shuffle(this.state.cards) })
}
onClickHandler = (cardEmoji, index) => {
    if (this.state.flippedCards.length === 2) {
        setTimeout(() => {
            this.check();
        }, 1500);
    } else {
        let flippedCards = this.state.flippedCards;
        let shuffledCards = this.state.shuffledCards;
        shuffledCards[index].open = true;
        flippedCards.push(cardEmoji);
        this.setState({
            flippedCards,
            shuffledCards
        })
        if (this.state.flippedCards.length === 2) {
            setTimeout(() => {
                this.check();
            }, 1500);
        }
    }
}
check() {
    let shuffledCards = this.state.shuffledCards;
    let matchedCards = this.state.matchedCards;

    if (this.state.flippedCards[0].name === this.state.flippedCards[1].name) {
        shuffledCards.find(item => item.id === this.state.flippedCards[0].id).isCompleted = true;
        shuffledCards.find(item => item.id === this.state.flippedCards[1].id).isCompleted = true;
        matchedCards.push(this.state.flippedCards[0].id, this.state.flippedCards[1].id)
    } else {
        shuffledCards.find(item => item.id === this.state.flippedCards[0].id).open = false;
        shuffledCards.find(item => item.id === this.state.flippedCards[1].id).open = false;  
    }

    this.setState({
        flippedCards: [],
        matchedCards: matchedCards
    })

}

render() {
    
    return (
       
            
            <>
            <div className="card-container">
                {this.state.shuffledCards.map((cardEmoji, index) =>
                    <Card
                        key={index}
                        onClickHandler={() => this.state.flippedCards.length === 2 ?
                            null :
                            this.onClickHandler(cardEmoji, index)}
                            cardEmoji={cardEmoji} />
                )}
            </div>
            </>
       
    )
}
}
export default CardGame;