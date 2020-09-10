import React from 'react';
import classes from './Intro.css';


const intro = () => (

    <div className={classes.IntroDiv}>
        <div className={classes.IntroTitleDiv}>
            <p>Hi, my name is</p>
            <h2 className={classes.IntroName}>Jake Taylor.</h2>
            <h3 className={classes.IntroSubText}>I'm a Software Developer.</h3>

            <div className={classes.Socials}>
                <div className={classes.SpacerExt}></div>
                <a href="https://github.com/jaketaylor41" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                <div className={classes.Spacer}></div>
                <a href="https://www.linkedin.com/in/jacob-taylor41/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                <div className={classes.Spacer}></div>
                <a href="https://www.instagram.com/jake.taylor41/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram-square"></i></a>
                <div className={classes.SpacerExt}></div>
            </div>
        <div className={classes.ContactBtnDiv}>
            <button className={classes.ContactBtn}>Contact Me</button>
        </div>
        </div>
    </div>


);

export default intro;