import React from 'react';

const ActionModal = ({ title, message, closeModal, successAction, modalData, successActionBtnName }) => {
    return (
        <div>
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData)}
                            htmlFor="my-modal"
                            className="btn bg-green-500 text-white">
                            {successActionBtnName}
                        </label>
                        <label onClick={closeModal} htmlFor="my-modal" className="btn btn-outline">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActionModal;