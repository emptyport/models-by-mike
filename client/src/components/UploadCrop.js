import React, { Component } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

class UploadCrop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Modal isOpen={this.props.isOpen}>
                <button onClick={this.props.closeModal}>Close</button>
            </Modal>
        );
    }
}

export default UploadCrop;
