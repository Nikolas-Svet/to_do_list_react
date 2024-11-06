// src/components/TodoList.js
import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TodoItem from './TodoItem';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from '../utils/storage';

function TodoList() {
  const [tasks, setTasks] = useState(getTasksFromLocalStorage);

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const moveTask = (fromIndex, toIndex) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(fromIndex, 1);
    updatedTasks.splice(toIndex, 0, movedTask);
    setTasks(updatedTasks);
  };

  return (
    <main className="to_do_list">
      <TaskForm addTask={addTask} />
      {tasks.length === 0 ? (
        <div className="no_tasks">No tasks</div>
      ) : (
        <ul className="to_do_list__body">
          {tasks.map((task, index) => (
            <TodoItem
              key={task.id}
              index={index}
              task={task}
              removeTask={removeTask}
              updateTask={updateTask}
              moveTask={moveTask}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default TodoList;
