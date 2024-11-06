import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && about.trim()) {
            const newTask = {
                id: '_' + Math.random().toString(36).substr(2, 9),
                title,
                about,
            };
            addTask(newTask);
            setTitle('');
            setAbout('');
        } else {
            alert('Одно или оба поля пусты!');
        }
    };

    const handleButtonClick = () => {
        handleSubmit({ preventDefault: () => {} });
    };

    return (
        <div className="to_do_list__title">
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <input
                        type="text"
                        name="title"
                        placeholder="&nbsp;"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Title...</label>
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="about"
                        placeholder="&nbsp;"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                    />
                    <label>About...</label>
                </div>
            </form>
            <button onClick={handleButtonClick} className="add_task">Add Task</button>
        </div>
    );
}

export default TaskForm;
