document.addEventListener('DOMContentLoaded', function() {
    const taskList = document.getElementById('tasks');
    const showModalBtn = document.getElementById('addEventButton');
    const modal = document.getElementById('taskModal');
    const closeModalBtn = document.getElementById('closeButton');
    const submitTask = document.getElementById('submitTask');
    const cancelTask = document.getElementById('cancelTask');
    const newTaskInput = document.getElementById('modalTaskInput');

    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => addTaskToList(task.text, task.completed));

    showModalBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    submitTask.addEventListener('click', function() {
       const  taskText = newTaskInput.value.trim();
       if (taskText) {
        addTaskToList(taskText);
        newTaskInput.value = '';
        modal.style.display = 'none';
       }
    });

    cancelTask.addEventListener('click', function() {
        newTaskInput.value = '';
        modal.style.display = 'none';
    });

    function addTaskToList(text, completed = false) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'task-checkbox';
        checkbox.checked = completed;
        checkbox.addEventListener('change', function() {
            li.classList.toggle('completed', checkbox.checked);
            saveTasks();
        });

        const span = document.createElement('span');
        span.textContent = text;
        span.className = 'task-text';

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function () {
            li.remove();
            saveTasks();
        });

        if (completed) li.classList.add('completed');

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#tasks li').forEach(li => {
            const text = li.querySelector('span').textContent;
            const completed = li.querySelector('input').checked;
            tasks.push({ text, completed });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
})