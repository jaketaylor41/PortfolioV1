import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';
import Aux from '../../hoc/Aux';
import Intro from '../../components/Intro/Intro';
import Footer from '../../components/Footer/Footer';
import cx from "classnames";

class Layout extends Component {

    state = {
        show: true,
        prevScrollPos: window.pageYOffset,
        showSideDrawer: false
    }

    componentDidMount () {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount () {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { prevScrollPos } = this.state;
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;

        this.setState({
            prevScrollPos: currentScrollPos,
            show: visible
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

        // let toolbarClass = [];
        // if (this.state.show) {
        //     toolbarClass.push(classes.Toolbar);
        // }

        // if (!this.state.show) {
        //     toolbarClass.push(classes.Hidden);
        // }

        let className = cx(classes.Toolbar, {
            [classes.Hidden]: !this.state.show,
          });

        return (
        <Aux>
            <Toolbar toolbarClass={className} hamburgerIconClicked={this.sideDrawerToggleHandler} />
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