import React, { Component } from 'react';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Aux from '../../hoc/Aux';
import Skills from '../../components/Skills/Skills';

class Home extends Component {



    render () {

        return (
            <Aux>
                <About />
                <Projects />
                <Skills />
            </Aux>

        );
    }

}

export default Home;