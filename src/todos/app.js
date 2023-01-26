import html from './app.html?raw'
import todoStore from '../store/todo.store'
import { renderTodos } from './use-cases';

const ElementIDs = {
    TodoList: '.todo-list',
}

/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList, todos);
    }
    //cuando la funcion App() se llama

    (() => {
        const app = document.createElement('id');
        app.innerHTML = html
        document.querySelector(elementId).append(app);
        displayTodos();
    })()
}