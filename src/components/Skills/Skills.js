import React from 'react';
import classes from './Skills.css'
import { Container, Card, CardDeck } from 'react-bootstrap';
import browserIcon from '../../assets/images/browserIcon.png';


const skills = () => (


    <section id="skills" className={classes.SkillsSection}>
        <Container style={{maxWidth: '1440px'}}>
            <h3>&#9672; Skills</h3>
        
            <CardDeck className={classes.CardDeck}>
                <Card className={classes.Card}>
                    <div className={classes.IconDiv}>
                        <i className="fas fa-desktop"></i>
                    </div>
                    <Card.Title className={classes.CardTitle}>Front End</Card.Title>
                    <hr />
                    <Card.Body>
                        <div>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React | Redux</li>
                            </ul>
                        </div>
                    </Card.Body>
                </Card>

                <Card className={classes.Card}>
                    <div className={classes.IconDiv}>
                        <i className="fas fa-server"></i>
                    </div>
                    <Card.Title className={classes.CardTitle}>Server</Card.Title>
                    <hr />
                    <Card.Body>
                        <div>
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>ASP.NET</li>
                            </ul>
                        </div>
                    </Card.Body>
                </Card>

                <Card className={classes.Card}>
                    <div className={classes.IconDiv}>
                        <i className="fas fa-database"></i>
                    </div>
                    <Card.Title className={classes.CardTitle}>Database</Card.Title>
                    <hr />
                    <Card.Body>
                        <div>
                            <ul>
                                <li>MySQL</li>
                                <li>Firebase</li>
                            </ul>
                        </div>
                    </Card.Body>
                </Card>

                <Card className={classes.Card}>
                    <div className={classes.IconDiv}>
                        <i className="fas fa-cloud"></i>
                    </div>
                    <Card.Title className={classes.CardTitle}>Deployment</Card.Title>
                    <hr />
                    <Card.Body>
                        <div>
                            <ul>
                                <li>AWS ECS</li>
                                <li>Azure</li>
                                <li>Heroku</li>
                                <li>Google Cloud Platform</li>
                            </ul>
                        </div>
                    </Card.Body>
                </Card>
            </CardDeck>


        </Container>
    </section>




);


export default skills;