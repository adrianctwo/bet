import React from "react";
import Modal from "../Modal/Modal.js";
import "./style.css";


class BetButton extends React.Component {
    state = {
        showModal: false,
        teamName1: [],
        teamName2: []
    }

    toggleModal = () => this.setState({
        showModal: !this.state.showModal,
        teamName1: this.props.teamName1,
        teamName2: this.props.teamName2
    })

    render() {
        return (
            <div
                className={`container ${this.state.showModal ? 'modal-open' : ''}`}>
                <button className="btn btn-warning"
                    onClick={
                        this.toggleModal
                    }
                >Bet Now
          </button>
                <Modal
                    toggle={this.toggleModal}
                    showModal={this.state.showModal}
                    teamName1={this.state.teamName1}
                    teamName2={this.state.teamName2}
                />
            </div>
        );
    }
}

export default BetButton;