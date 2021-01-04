"use strict";

import minimist from "minimist";

import { Todo } from "./toDo.js";

const args = minimist(process.argv);

let myTodo = new Todo();

function todo() {
  if (typeof args._[2] === "string" || typeof args._[2] === "number") {
    console.log("");
    console.log("Nem támogatott argumentum!");
    myTodo.printUserManual();
  } else if (args.l === true) {
    myTodo.listTasks();
  } else if (args.hasOwnProperty("a")) {
    myTodo.addNewTasks(args.a);
  } else if (args.hasOwnProperty("r")) {
    myTodo.removeTasks(args.r);
  } else if (args.hasOwnProperty("c")) {
    myTodo.getTaskCompleted(args.c);
  } else {
    myTodo.printUserManual();
  }
}

todo();
