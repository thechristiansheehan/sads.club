import React, { useState } from "react";
import ReactModal from "react-modal";
import "./modal.css";

ReactModal.setAppElement("#root");

export default function Modal({ trigger, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Trigger */}
      <div
        onClick={() => setIsOpen(true)}
        style={{ display: "inline-block", cursor: "pointer", userSelect: "none" }}
      >
        {trigger}
      </div>

      {/* Modal */}
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Reusable Modal"
        overlayClassName="ReactModal__Overlay"
        className="ReactModal__Content"
      >
        {/* Close button */}
        <button onClick={() => setIsOpen(false)} className="modal-close">
          ×
        </button>

        {children}
      </ReactModal>
    </div>
  );
}