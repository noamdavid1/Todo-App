var todo = {
    id: 't101',
    txt: 'Fix that thing',
    isDone: false,
    }   

function onInit(){
    renderTodos()
}

function renderTodos(){
    const todos =getTodosForDisplay();
    const srtHTMLs = todos.map(todo => 
        `<ul class="alltodos">
            <li class="todo-item ${todo.isDone ? 'done' : ''}"onclick="onToggleTodo('${todo.id}')">
                ${todo.txt}
                <button onclick="onRemoveTodo('${todo.id}', event)">X</button>
            </li>
        </ul>`)
    const el= document.querySelector('.todos-container').innerHTML = srtHTMLs.join('')   
    
    getTotalCount()
    getActiveCount() 
}

function onAddTodo(){
    const elinput = document.getElementById('todo-input');
    const todotxt = elinput.value.trim();
    
    if(!todotxt){
        alert('Please enter a task')
        return
    } 
    addTodo(todotxt)
    elinput.value =''
    renderTodos()

    
}

function onRemoveTodo(todoId,event){
    event.stopPropagation()
    removeTodo(todoId)
    renderTodos()
}

function onToggleTodo(todoId){
    var toggletodo = getTodoById(todoId)

    if(!toggletodo){
        alert('this task is not exsist')
        return
    }

    toggleTodo(toggletodo)
    renderTodos()
}

function onSetFilter(filterBy){
    setFilter(filterBy)
    renderTodos()

}