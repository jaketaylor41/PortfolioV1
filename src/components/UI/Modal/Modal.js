import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate (nextProps) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    


    render () {

        return (

            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-5%)',
                        opacity: this.props.show ? '1' : '0',
                        visibility: this.props.show ? 'visible' : 'hidden'
                    }}>
                    {this.props.children}
                </div>
            </Aux>

        );

    }




}


export default Modal;