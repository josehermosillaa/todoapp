import { v4 as uuid } from 'uuid';

export class Todo {
    /**
     * 
     * @param {String} description 
     */
    constructor(description) {
        this.id = 1;
        this.description = description;
        this.done = false;
        this.createdAt = new Date();
    }
}