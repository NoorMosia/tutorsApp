import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                modal: !prevState.modal
            };
        })
        // this.setState(state => ({
        //     ...state,
        //     modal: !this.state.modal
        // }));
    }

    render() {
        return (
            <MDBContainer>
                <MDBBtn color={this.props.color} onClick={this.toggle}>{this.props.title}</MDBBtn>
                <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                    <MDBModalHeader toggle={this.toggle}>{this.props.title}</MDBModalHeader>
                    <MDBModalBody>
                        {this.props.children}
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default ModalPage;