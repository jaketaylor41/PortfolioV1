import React from "react";
import classes from "./Skills.css";
import { Container, Card, CardDeck } from "react-bootstrap";

const Skills = () => (
  <section id="skills" className={classes.SkillsSection}>
    <Container style={{ maxWidth: "1440px" }}>
      <h3>&#9672; Skills</h3>

      <CardDeck className={classes.CardDeck}>
        <Card className={classes.Card}>
          <div className={classes.IconDiv}>
            <i className="fas fa-desktop"></i>
          </div>
          <Card.Title className={classes.CardTitle}>
            Programming Languages
          </Card.Title>
          <hr />
          <Card.Body>
            <div>
              <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>CSS/SCSS</li>
                <li>HTML</li>
                <li>Java</li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card className={classes.Card}>
          <div className={classes.IconDiv}>
            <i className="fas fa-server"></i>
          </div>
          <Card.Title className={classes.CardTitle}>
            Libraries & Frameworks
          </Card.Title>
          <hr />
          <Card.Body>
            <div>
              <ul>
                <li>React</li>
                <li>React Native</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Formik</li>
                <li>Yup</li>
                <li>React Testing Library</li>
                <li>Material UI</li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        <Card className={classes.Card}>
          <div className={classes.IconDiv}>
            <i className="fas fa-database"></i>
          </div>
          <Card.Title className={classes.CardTitle}>
            Tools & Platforms
          </Card.Title>
          <hr />
          <Card.Body>
            <div>
              <ul>
                <li>MySQL</li>
                <li>Azure</li>
                <li>Google Cloud</li>
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
                <li>Azure</li>
                <li>Heroku</li>
                <li>Firebase</li>
              </ul>
            </div>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  </section>
);

export default Skills;
