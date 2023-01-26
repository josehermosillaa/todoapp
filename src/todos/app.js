import html from './app.html?raw'

/**
 * 
 * @param {*} elementId 
 */

export const App = (elementId) => {
    //cuando la funcion App() se llama
    (() => {
        const app = document.createElement('id');
        app.innerHTML = html
        document.querySelector(elementId).append(app);
    })()
}