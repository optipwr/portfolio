import React from 'react';

import classes from './InfoCard.css';

const infoCard = (props) => {
    return (
        <div className={classes.InfoCard}>
            {props.data}
        </div>
    );
};

export default infoCard;