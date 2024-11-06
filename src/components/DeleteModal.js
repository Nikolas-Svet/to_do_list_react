import React from 'react';

function DeleteModal({ onConfirm, onCancel }) {
  return (
    <div className="window">
      <div className="window__wrap" onClick={onCancel}></div>
      <div className="window__delete">
        <p>Delete this task?</p>
        <div className="default_button_for_window">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
