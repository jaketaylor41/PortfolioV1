import React from 'react';
import classes from './Footer.css';

const footer = () => (

    <footer className={classes.Footer}>
        <div className={classes.FooterDiv}>
            <p>Designed & Built by Jake Taylor</p>
            <a href="https://github.com/jaketaylor41/PortfolioV1" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
        </div>
    </footer>


);

export default footer;