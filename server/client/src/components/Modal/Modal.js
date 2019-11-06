import React from "react";
import "../Modal/modal.css";

class Modal extends React.Component {

    render() {

        return (
            <div
                className={`modal fade BettingModal ${this.props.showModal ? 'show' : ''}`}
                style={{
                    display: `${this.props.showModal ? 'block' : 'none'}`,
                }}
                id="BettingModal" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="camera-box">
                                <img alt="" src="/img/yellow-logo.svg" />
                                <h5 className="modal-title" id="ModalLabel">Place your Bet!</h5>
                            </div>
                        </div>
                        <div className="modal-body col-sm-12">
                            <div className="row">
                                <div className="col-sm-6">
                                    <label className="my-1 mr-2" for="inlineFormCustomSelectPref">Choose Team:</label>
                                    <select className="custom-select" id="inlineFormCustomSelectPref">
                                        <option selected>Select Match</option>
                                        <option value="1">{this.props.teamName1}</option>
                                        <option value="2">{this.props.teamName2}</option>
                                    </select>
                                </div>

                                <div className="input-group col-sm-6">
                                    <label>Type In Your Wager Below:</label>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">$</span>
                                    </div>
                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                </div>
                            </div>

                            <div className="row pt-4">
                                <div className="col-sm-6">
                                    {/* <p className="text-center mt-2">
                                        Good Luck Gamer!
                                    </p> */}
                                </div>

                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className='col-sm-6'>
                                            <button className="btn modal-button"
                                                onClick={this.props.toggle}>Place Bet</button>
                                        </div>

                                        <div className='col-sm-6'>
                                            <button className="btn modal-button" style={{ background: '#CFB53B', borderWidth: '2px', borderColor: '#CFB53B', color: 'white', width: 
                                            '100%', padding: '5px 0' }}
                                                onClick={this.props.toggle}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;
