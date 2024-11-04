
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask() {
    const name = document.getElementById('taskName').value;
    const date = document.getElementById('taskDate').value;
    const priority = document.getElementById('taskPriority').value;
    const task = { id: Date.now(), name, date, priority, status: 'pendente' };
    
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks(); 
    document.getElementById('taskForm').reset(); 
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `${task.name} - ${task.date} - ${task.priority}`;
        taskList.appendChild(li);
    });
}

window.onload = function() {
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    displayTasks();
};


