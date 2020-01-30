import React, { Component } from 'react';
import UploadCrop from '../components/UploadCrop';

class FaceMorph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalOpen: true });
    }

    closeModal() {
        this.setState({ modalOpen: false });
    }

    render() {
        return (
            <div>
                This is the face morph page
                <button onClick={this.openModal}>Upload image</button>
                <UploadCrop isOpen={this.state.modalOpen} closeModal={this.closeModal} />
            </div>
        );
    }
}

export default FaceMorph;
