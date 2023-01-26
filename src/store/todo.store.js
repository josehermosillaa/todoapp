import { Todo } from "../todos/models/todo.model";
//quiero lucir del estado global de mi aplicacion

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
}
const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra de la realidad'),
        new Todo('Piedra de la realidad'),
    ],
    filter: Filters.All,
}

const initStore = () => {
    console.log(state)
    console.log('InitStore')
}

const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        //filter reresa un nuevo arreglo
        case Filters.Completed:
            return state.todos.filter(todo => todo.done)
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done)
        default:
            throw new Error(`Option ${filter} is not valid `)
    }
}
/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');
    state.todos.push(new Todo(description));
}
/**
 * 
 * @param {String} todoId 
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        //si tengo 1000 todos tendria que  barrer todos los todos, debe haber una forma mas eficiente
        return todo
    })
}

const deleteTodo = (todoID) => {
    state.todos = state.todos.filter(todo => todo.id !== todoID);

}
const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);


}
/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    //validacion de que exista en las 3 opciones permitidas, si no no lo dejo cambiar de filtros, objects.keys.include
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;

}
export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}