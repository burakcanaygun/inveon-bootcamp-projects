/**
 *  The following script contains source code for an app called To-Do List.
 *  Basically, you can specify the day when adding a todo.
 *  If you don't specify a day, the app will automatically create a daily todo for you.
 *  You can also specify the degree of todo.
 *  You can complete the todo with one click.
 *  You can delete it with a double click.
 */


/**
 *
 * @type {HTMLElement}
 *  todoInput: You can fill your todo
 *  form: Using for adding todo
 *  todoList: If you add todo you can see in this list
 *  endDate: Date-picker
 *  category: Category input. It allows the user to enter a category.
 *  priority: User can define priority with input range
 *  explanation: If the user needs extra explanation, he can use it.
 *  clearBtn: Clear all todos.
 *
 */
const todoInput = document.getElementById('todo-input');
const form = document.getElementById('form');
const todoList = document.getElementById('list-group');
const endDate = document.getElementById('end-date');
const category = document.getElementById('category');
const priority = document.getElementById('priority');
const explanation = document.getElementById('explanation-input');
const clearBtn = document.getElementById('clear-all');

/**
 *  Set minimum date for calendar. It prevents the past date selection.
 */
endDate.setAttribute('min', new Date().toISOString().split('T')[0]);


/**
 * Function that get todos from local storage. If it's empty it's create for you.
 */
function getTodos () {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        todoList.appendChild(createLi(todo.todo, todo.end, todo.cat, todo.pri, todo.exp, todo.completed));
    });

}



/**
 * When a todo is created, if a day is selected from the calendar, it takes the difference between the current day and the selected date and calculates the day.
 * Otherwise it's return daily todo
 * @param {String} endDate
 * @returns {string}
 */
function countDateDifference (endDate) {
    if (!endDate) {
        return '1 day left';
    }
    const today = new Date();
    const end = new Date(endDate);
    const diff = end.getTime() - today.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days + ' days left';
}


/**
 * Adds todo to todo list.
 */
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const todo = todoInput.value;
    const end = endDate.value;
    const cat = category.value;
    const pri = priority.value;
    const exp = explanation.value;
    const completed = false;
    if (todo === '') {
        alert('Todo cannot be empty');
    } else {
        todoList.appendChild(createLi(todo, end, cat, pri, exp, completed));
    }
    addToLocalStorage(todo, end, cat, pri, exp, completed);
    clearInput();

});


/**
 * Create Li elements for user's todo.
 * @param {String} todo
 * @param {String} end
 * @param {String} cat
 * @param {String} pri
 * @param {String}exp
 * @param {Boolean} completed
 * @returns {HTMLLIElement}
 */
function createLi (todo, end, cat, pri, exp, completed) {
    const li = document.createElement('li');
    li.className = 'list-group-item swing-in-top-fwd' + (completed ? ' completed' : '');
    li.innerHTML = `
        <div class="row">
        <div class="col-md-9 text-break">
            <h5 id="todo-task">${todo}</h5>
            <p>${exp}</p>
            </div>
        <div class="col-md-3 mx-auto my-auto d-grid">
            <div class=" justify-content-around text-center text-break">
            <span id="time-left">${countDateDifference(end)}</span>
            <div class="col-md-12">
             <span id="priority-degree"><i class="fa-solid fa-circle ${pri === "0" ? "icon-green" : (pri === "1" ? "icon-yellow" : "icon-red")}"></i></span>
            <span>${cat}</span>
            </div>
            </div>
        </div>
        </div>`;
    //trigger completed or not
    if (todo && todo.completed) {
        li.classList.add('completed');

    }
    li.addEventListener('click', function () {
        li.classList.toggle('completed');
        li.classList.contains('completed') ? completed = true : completed = false;
        updateLocalStorage(todo, completed);
    });
    //double click to remove todo
    li.addEventListener('dblclick', () => {
        li.classList.add('text-blur-out');
        setTimeout(() => {
            li.remove();
            removeFromLocalStorage(todo);
        }, 1100)

    })
    return li;
}


// clear form input
function clearInput () {
    todoInput.value = '';
    endDate.value = '';
    category.value = '';
    priority.value = '0';
    explanation.value = '';
    todoInput.focus();
}


/**
 * Adding todo to local storage
 * @param {String} todo
 * @param {String} end
 * @param {String} cat
 * @param {String} pri
 * @param {String} exp
 * @param {Boolean} completed
 */
function addToLocalStorage (todo, end, cat, pri, exp, completed) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push({todo, end, cat, pri, exp, completed});
    localStorage.setItem('todos', JSON.stringify(todos));
}


/**
 * Remove selected todo from local storage
 * @param {String} todoTask
 */
function removeFromLocalStorage (todoTask) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo, index) {
        if (todo.todo === todoTask) {
            todos.splice(index, 1);
        }
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

// storage cleaner
clearBtn.addEventListener('click', function () {
    localStorage.removeItem('todos');
    location.reload();

});



/**
 *  It's updated single todo completed or not.
 * @param {String} todoTask
 * @param {Boolean} completed
 */
function updateLocalStorage (todoTask, completed) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        if (todo.todo === todoTask) {
            todo.completed = completed;
        }
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}


getTodos();
