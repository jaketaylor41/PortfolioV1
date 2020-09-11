import React, { Component } from 'react';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Aux from '../../hoc/Aux';
import Skills from '../../components/Skills/Skills';
import Modal from '../../components/UI/Modal/Modal';
import Preview from '../../components/Projects/Preview/Preview';
import w2wGif from '../../assets/images/W2WGif.gif';
import browserIcon from '../../assets/images/browserIcon.png';

class Home extends Component {

    state = {
        viewModal: false,
        projectOneClicked: false,
        projectTwoClicked: false,
        gifs: [
            {
                gifOne: w2wGif,
                gifTwo: browserIcon
            }
        ]
    };


    showModalOneHandler = () => {
        this.setState({viewModal: true});
        this.setState({projectOneClicked: true});
    }

    showModalTwoHandler = () => {
        this.setState({viewModal: true});
        this.setState({projectTwoClicked: true});
    }

    closeModalHandler = () => {
        this.setState({viewModal: false});
        this.setState({projectOneClicked: false});
        this.setState({projectTwoClicked: false});
    }


    render () {

        let gif = null;

        if (this.state.projectOneClicked) {
            gif = <Preview imageGif={this.state.gifs[0].gifOne} />
        }

        if (this.state.projectTwoClicked) {
            gif = <Preview imageGif={this.state.gifs[0].gifTwo} />
        }

        return (
            <Aux>
                <Modal show={this.state.viewModal} modalClosed={this.closeModalHandler}>
                    {gif}
                </Modal>
                <About />
                <Projects
                    projectOneClicked={this.showModalOneHandler}
                    projectTwoClicked={this.showModalTwoHandler}
                />
                <Skills />
            </Aux>

        );
    }

}

export default Home;