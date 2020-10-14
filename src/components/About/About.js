import React from 'react';
import classes from './About.css';
import me from '../../assets/images/Me.png';
import { Container, Row, Col } from 'react-bootstrap';
import Aux from '../../hoc/Aux';


const about = (props) => (

    <Aux>
        <section ref={props.ref}  id="about" className={classes.AboutMeSection}>
            <Container fluid style={{maxWidth: '1440px'}}> 
            <h3>&#9672; About Me</h3>
                <Row xs={1} sm={1} md={2}>
                    <Col>
                        <div className={classes.AboutContentDiv}>
                            <div className={classes.AboutMeTextDiv}>
                                <p> Hey everyone, my name is Jake and I'm a software developer based in Phoenix, AZ.</p>
                                <p>
                                    I love creating both mobile and web applications, and always strive to create products that provide an excellent user experience.
                                    After graduating from Grand Canyon University in 2017 with a degree in Psychology, I decided to switch career paths and begin my 
                                    journey into the world of software.
                                </p>
                                <p>
                                    In 2018, I enrolled in GCU's Java Bootcamp which was a semester long bootcamp centered around Full Stack Development working with
                                    technologies such as Java, JavaScript, HTML/CSS, Thymeleaf, jQuery, Spring, Bootstrap and other modern web development concepts such as OOP, MVC, and REST.
                                    After completing the bootcamp, I began my Bachelors in Computer Programming at GCU and graduated in July of 2020.
                                </p>
                                <p>
                                    In my free time I enjoy taking online courses on various languages and frameworks. Here are some of the most recent technologies I've been working with:
                                </p>
                                <ul className={classes.SkillsList}>
                                    <li className={classes.AboutSkill}>JavaScript (ES6+)</li>
                                    <li className={classes.AboutSkill}>React</li>
                                    <li className={classes.AboutSkill}>Node.js</li>
                                    <li className={classes.AboutSkill}>Redux</li>
                                    <li className={classes.AboutSkill}>Hooks</li>
                                    <li className={classes.AboutSkill}>HTML & CSS</li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className={classes.ImgDiv}>
                            <img className={classes.Me} src={me} alt="Me" />
                        </div>
                    </Col>

                </Row>
            </Container>
            
        </section>
    </Aux>



);

export default about;