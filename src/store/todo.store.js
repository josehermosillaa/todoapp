import { Todo } from "../todos/models/todo.model";
//quiero lucir del estado global de mi aplicacion

const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
}
const state = {
    todo: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    fiter: Filters.All,
}

const initStore = () => {
    console.log(state)
    console.log('InitStore')
}

export default {
    initStore,
}