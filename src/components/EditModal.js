import React, { useState } from 'react';

function EditModal({ task, updateTask, onClose }) {
  const [title, setTitle] = useState(task.title);
  const [about, setAbout] = useState(task.about);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && about.trim()) {
      updateTask({ ...task, title, about });
      onClose();
    } else {
      alert('Одно или оба поля пусты!');
    }
  };

  return (
    <div className="window">
      <div className="window__wrap" onClick={onClose}></div>
      <div className="window__edit">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="text"
              name="edit_title"
              placeholder="&nbsp;"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Title...</label>
          </div>
          <div className="input">
            <textarea
              name="edit_about"
              placeholder="&nbsp;"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
            <label>About...</label>
          </div>
          <div className="default_button_for_window">
            <button type="submit" className="edit_confirm_btn">
              Yes
            </button>
            <button type="button" className="edit_cancel_btn" onClick={onClose}>
              No
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
