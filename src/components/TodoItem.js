import React, {useState} from 'react';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';
import infoIcon from '../icons/info.svg';
import editIcon from '../icons/edit.svg';
import shareIcon from '../icons/share.svg';

function TodoItem({task, index, removeTask, updateTask, moveTask}) {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    const togglePanel = () => {
        setIsPanelOpen(!isPanelOpen);
    };

    const handleDelete = () => {
        setShowDeleteModal(true);
    };

    const handleEdit = () => {
        setShowEditModal(true);
    };
    const handleDragStart = (e) => {
        e.dataTransfer.setData('taskIndex', index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        const fromIndex = parseInt(e.dataTransfer.getData('taskIndex'), 10);
        moveTask(fromIndex, index);
    };

    return (
        <>
            <li
                draggable
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="task-item"
            >
                <div onClick={togglePanel}>
                    <p>{task.title}</p>
                    <p>{task.about}</p>
                </div>
                <span className="cancel" onClick={handleDelete}></span>


                {showDeleteModal && (
                    <DeleteModal
                        onConfirm={() => {
                            removeTask(task.id);
                            setShowDeleteModal(false);
                        }}
                        onCancel={() => setShowDeleteModal(false)}
                    />
                )}

                {showEditModal && (
                    <EditModal
                        task={task}
                        updateTask={updateTask}
                        onClose={() => setShowEditModal(false)}
                    />
                )}
            </li>
            {isPanelOpen && (
                <div className="panel_task">
                    <div className="panel_task__content">
                        <button className="edit_task_btn" onClick={handleEdit}>
                            <img src={editIcon} alt="Edit"/>
                        </button>
                        <button className="share_task_btn">
                            <img src={shareIcon} alt="Share"/>
                        </button>
                        <button>
                            <img src={infoIcon} alt="Info"/>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default TodoItem;
