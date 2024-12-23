var gTodo

var gFilterBy = {
    isDone: null
}

_createTodos()

function getTodosForDisplay(){
    const todos = gTodo.filter(todo =>{
        if(gFilterBy.isDone == null){
            return true;
        }
        if(gFilterBy.isDone == true){
            return todo.isDone;
        }
        return !todo.isDone
    })
    return todos
}

function getTodoById(todoId){
    const todo = gTodo.find(todo=> todo.id == todoId)
    return todo

}

function addTodo(todotxt){
    const newtodo = _createTodo(todotxt)
    gTodo.push(newtodo)
    saveToStorage('todoDB',gTodo)
    return newtodo
}

function removeTodo(todoId){
    const idx= gTodo.findIndex(todo=> todo.id == todoId)
    gTodo.splice(idx,1)
    saveToStorage('todoDB',gTodo)
}

function toggleTodo(toggletodo){
    toggletodo.isDone= !toggletodo.isDone
    saveToStorage('todoDB',gTodo)
}

function _createTodo(todotxt){
    return {
        id:makeId(),
        txt: todotxt,
        isDone: false
    }
}

function _createTodos(){
    var todos = loadFromStorage('todoDB')
    if(!todos || todos.length == 0){
        todos= [
            _createTodo('Fix that thing'),
            _createTodo('clean the house')
        ] 
    }
    gTodo=todos
    saveToStorage('todoDB',todos)
}

function setFilter(filterBy){
    if(filterBy.isDone !== undefined) gFilterBy.isDone = filterBy.isDone
}

function getTotalCount(){
    var totalTodos = gTodo.length
    document.querySelector('.todos-counter #total span').innerText = totalTodos
}

function getActiveCount(){
    var activeTodos = gTodo.filter(todo=> todo.isDone == false)
    var active = activeTodos.length
    document.querySelector('.todos-counter #active span').innerText = active

}