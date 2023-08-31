import React from "react";
import classes from "./About.css";
import me from "../../assets/images/Me.png";
import { Container, Row, Col } from "react-bootstrap";
import Aux from "../../hoc/Aux";

const About = (props) => (
  <Aux>
    <section ref={props.ref} id="about" className={classes.AboutMeSection}>
      <Container fluid style={{ maxWidth: "1440px" }}>
        <h3>&#9672; About Me</h3>
        <Row xs={1} sm={1} md={2}>
          <Col>
            <div className={classes.AboutContentDiv}>
              <div className={classes.AboutMeTextDiv}>
                <p>
                  {" "}
                  Hey everyone, I'm Jake, a front-end software developer with a
                  keen eye for detail and a passion for crafting intuitive user
                  experiences.
                </p>
                <p>
                  My journey in the tech world is an exciting blend of academic
                  exploration and hands-on experience. After graduating from
                  Grand Canyon University in 2017 with a degree in Psychology, I
                  quickly pivoted to the world of software development.
                </p>
                <p>
                  In 2018, I enrolled in GCU's Java Bootcamp which was a
                  semester long bootcamp centered around full-Stack development,
                  working with technologies such as Java, JavaScript, HTML/CSS,
                  Thymeleaf, jQuery, Spring, Bootstrap and other modern web
                  development concepts such as OOP, MVC, and REST. In July 2020,
                  I proudly obtained my degree in Computer Programming from GCU,
                  further cementing my commitment to this dynamic field.
                </p>
                <p>
                  With a background that blends cognitive science with
                  programming, I bring a unique perspective to the development
                  table, ensuring that every project is not only technically
                  sound but also user-centric. I'm always eager to tackle new
                  challenges and collaborate with others to bring visions to
                  life.
                </p>
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

export default About;
