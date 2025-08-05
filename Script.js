// Get DOM elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const darkModeToggle = document.getElementById('darkModeToggle');

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render all tasks
const renderTasks = () => {
  taskList.innerHTML = ''; // Clear existing tasks

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item';
    if (task.completed) li.classList.add('completed');

    const span = document.createElement('span');
    span.textContent = task.text;
    span.className = 'task-text';

    const actions = document.createElement('div');
    actions.className = 'task-actions';

    // Complete/Toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = task.completed ? '↩️' : '✅';
    toggleBtn.title = 'Toggle Complete';
    toggleBtn.onclick = () => toggleTask(index);

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.title = 'Edit Task';
    editBtn.onclick = () => editTask(index);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.title = 'Delete Task';
    deleteBtn.onclick = () => deleteTask(index);

    actions.append(toggleBtn, editBtn, deleteBtn);
    li.append(span, actions);
    taskList.appendChild(li);
  });

  // Save to localStorage
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

// Add a new task
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = taskInput.value.trim();
  if (text === '') return;

  tasks.push({ text, completed: false });
  taskInput.value = '';
  renderTasks();
});

// Toggle task completion
const toggleTask = (index) => {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
};

// Edit task
const editTask = (index) => {
  const newText = prompt('Edit task:', tasks[index].text);
  if (newText !== null && newText.trim() !== '') {
    tasks[index].text = newText.trim();
    renderTasks();
  }
};

// Delete task
const deleteTask = (index) => {
  if (confirm('Delete this task?')) {
    tasks.splice(index, 1);
    renderTasks();
  }
};

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});

// Load dark mode setting
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark');
}

// Initial render
renderTasks();
