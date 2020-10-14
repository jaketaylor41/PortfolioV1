import React, { Component } from 'react';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Aux from '../../hoc/Aux';
import Skills from '../../components/Skills/Skills';
import Modal from '../../components/UI/Modal/Modal';
import Preview from '../../components/Projects/Preview/Preview';

class Home extends Component {

    state = {
        viewModal: false,
        projectOneClicked: false,
        projectTwoClicked: false,
        projectThreeClicked: false,
        playDemo: false,
        videoKeys: [
            {
                keyOne: 'tGO47nhipRc',
                keyTwo: 'mnFgoazzgFY',
                keyThree: '9Xfv7B7geOo'
            }
        ]
    };


    showModalOneHandler = () => {
        this.setState({viewModal: true});
        this.setState({playDemo: true});
        this.setState({projectOneClicked: true});
    }

    showModalTwoHandler = () => {
        this.setState({viewModal: true});
        this.setState({playDemo: true});
        this.setState({projectTwoClicked: true});
    }

    showModalThreeHandler = () => {
        this.setState({viewModal: true});
        this.setState({playDemo: true});
        this.setState({projectThreeClicked: true});
    }

    closeModalHandler = () => {
        this.setState({viewModal: false});
        this.setState({playDemo: false});
        this.setState({projectOneClicked: false});
        this.setState({projectTwoClicked: false});
        this.setState({projectThreeClicked: false});
    }


    render () {

        let video = null;

        if (this.state.projectOneClicked) {
            video = <Preview videoKey={this.state.videoKeys[0].keyOne} />
        }

        if (this.state.projectTwoClicked) {
            video = <Preview videoKey={this.state.videoKeys[0].keyTwo} />
        }

        if (this.state.projectThreeClicked) {
            video = <Preview videoKey={this.state.videoKeys[0].keyThree} />
        }

        return (
            <Aux>
                <Modal show={this.state.viewModal} modalClosed={this.closeModalHandler}>
                    {this.state.playDemo && video}
                </Modal>
                <About />
                <Projects
                    projectOneClicked={this.showModalOneHandler}
                    projectTwoClicked={this.showModalTwoHandler}
                    projectThreeClicked={this.showModalThreeHandler}
                />
                <Skills />
            </Aux>

        );
    }

}

export default Home;