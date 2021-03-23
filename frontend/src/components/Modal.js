import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main rounded-lg flex flex-col justify-center p-4">
        {children}
        <div className="w-full flex justify-center">
          <button
            type="button"
            className="text-center mx-auto p-2 text-gray-700 underline"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
