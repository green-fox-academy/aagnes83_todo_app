'use strict'

import minimist from 'minimist';

import { Todo } from "./toDo.js"

const args = minimist(process.argv);

let myTodo = new Todo();

function todo() {

    if (args != true) {
        console.log("");
        console.log('Nem támogatott argumentum!');
        myTodo.printUserManual();;
    } else if (args.l === true) {
        myTodo.listTasks();
    } else if (args.hasOwnProperty('a')) {
        myTodo.addNewTasks(args.a);
    } else if (args.hasOwnProperty('r')) {
        myTodo.removeTasks(args.r);
    } else if (args.c === true) {
        //Complete a task
    } else {
        myTodo.printUserManual();
    }
}

todo();

console.log(args);
