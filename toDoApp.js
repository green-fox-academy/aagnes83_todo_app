'use strict'

import minimist from 'minimist';

import { Todo } from "./toDo.js"

const args = minimist(process.argv);

let myTodo = new Todo();

function todo() {

    if (args.l === true) {
        myTodo.listTasks();
    } else if (args.a === true) {
        myTodo.addNewTasks();
    } else if (args.r === true) {
        myTodo.removeTasks();
    } else if (args.c === true) {
        //Complete a task
    } else {
        myTodo.printInstructions();
    }
}

todo();


console.log(args);

