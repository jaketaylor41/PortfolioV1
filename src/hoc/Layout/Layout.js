import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';
import Aux from '../../hoc/Aux';
import Intro from '../../components/Intro/Intro';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {

    state = {
        show: true,
        scrollPos: 0,
        showSideDrawer: false
    }

    componentDidMount () {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { scrollPos } = this.state;
        this.setState({
          scrollPos: document.body.getBoundingClientRect().top,
          show: document.body.getBoundingClientRect().top > scrollPos
        });
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render () {

        let toolbarClass = [];
        if (this.state.show) {
            toolbarClass.push(classes.Toolbar);
        }

        if (!this.state.show) {
            toolbarClass.push(classes.Hidden);
        }

        return (
        <Aux>
            <Toolbar toolbarClass={toolbarClass.join(' ')} hamburgerIconClicked={this.sideDrawerToggleHandler} />
            <SideDrawer
                open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}
            />

            <Intro />
            
            <main>
                {this.props.children}
            </main>

            <Footer />
        </Aux>

        );
    }


}
export default Layout;