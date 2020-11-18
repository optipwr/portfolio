import React from 'react';

import classes from './Card.css';

const baseUrl = 'http://localhost:3002';

const Card = (props) => {
    return (
        <div className={classes.Card} onClick={props.clicked} >
            <img src={ baseUrl + props.image } alt={props.title} />
            <div>{props.title}</div>
            <div>{props.body}</div>
        </div>
    );
};

export default Card;