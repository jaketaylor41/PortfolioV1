import React from 'react';
import classes from './Preview.css';


const preview = (props) => (

    <div className={classes.Preview}>
        <img src={props.imageGif} alt="Gif" />
    </div>

);

export default preview;