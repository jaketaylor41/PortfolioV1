import React from 'react';
import classes from './Projects.css';
import w2w from '../../assets/images/W2Whome.png';
import sutureEase from '../../assets/images/SEwBG-1.png';
import w2wGif from '../../assets/images/W2WGif.gif';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Aux from '../../hoc/Aux';


const projects = () => (

    <Aux>
        <section id="projects" className={classes.ProjectsSection}>
            <Container fluid style={{maxWidth: '1440px'}}>
                <h3>&#9672; My Projects</h3>
                <Row className={classes.Row}>
                        <div className={classes.ColOne}>
                            <Image src={w2w} fluid />
                            <div className={classes.Overlay}></div>
                        </div>
                        <div className={classes.ColTwo}>

                            <div className={classes.ProjectInfoDiv}>
                                <a href="https://what2watch-cf980.web.app/" rel="noopener noreferrer" target="_blank">
                                    <h4>What2Watch</h4>
                                </a>
                                <p>
                                    A web app that allows users to browse movies both in theatres and releasing soon, watch trailers, and shuffle through
                                    random movies and TV shows at the click of a button. Users can also create an account to log in and save 
                                    movies or TV shows to a watch list where they can view the items overview, and manage their lists.
                                </p>

                                <div className={classes.SubInfoDiv}>
                                    <div style={{textAlign: 'center'}}>
                                        <p style={{fontWeight: '300'}}>JavaScript &#9671; React &#9671; Redux &#9671; Node.js &#9671; Firebase &#9671; TMDB API</p>
                                        <a href="https://github.com/jaketaylor41/What2WatchReact" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                                        <a a href="https://what2watch-cf980.web.app/" rel="noopener noreferrer" target="_blank"><i className="fas fa-external-link-square-alt"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </Row>

                <Row className={classes.Row}>
                        <div className={classes.ColOne}>
                            <Image src={sutureEase} fluid/>
                            <div className={classes.Overlay}></div>
                        </div>
                        <div className={classes.ColTwo}>

                            <div className={classes.ProjectInfoDiv}>
                                <a href="https://github.com/jaketaylor41/SutureEaseFinal" rel="noopener noreferrer" target="_blank">
                                    <h4>Suture Ease IOS App</h4>
                                </a>
                                    <p>
                                        An IOS app to help sales reps of Suture Ease by providing necessary information to train and 
                                        showcase the features of the devices. The app includes training videos on how to use the devices, 
                                        brochures to easily show surgeons, as well as sales aids. With the click of a button, users can also quickly
                                    </p>
                                <div className={classes.SubInfoDiv}>
                                    <div style={{textAlign: 'center'}}>
                                        <p style={{fontWeight: '300'}}>Swift &#9671; Xcode</p>
                                        <a href="https://github.com/jaketaylor41/SutureEaseFinal" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                                        <a><i className="fas fa-external-link-square-alt"></i></a>
                                    </div>
                                </div>
                            </div>


                        </div>
                </Row>
            </Container>

        </section>
    </Aux>


);


export default projects;