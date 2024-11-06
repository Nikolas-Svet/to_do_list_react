export function saveTasksToLocalStorage(tasks) {
    console.log("Saving tasks:", tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function getTasksFromLocalStorage() {
    const tasks = localStorage.getItem('tasks');
    console.log("Loading tasks:", tasks ? JSON.parse(tasks) : []);
    return tasks ? JSON.parse(tasks) : [];
}

export function generateUniqueId() {
    return '_' + Math.random().toString(36).substring(2, 9);
}
