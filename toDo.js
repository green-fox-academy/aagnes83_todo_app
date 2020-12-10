import fs from 'fs';

export class Todo {
    constructor(tasks) {
        this.tasks = tasks;
    }

    getTasksList() {
        try {
            if (!fs.existsSync('./tasks.txt')) throw Error('File not exists');
            this.tasksList = (fs.readFileSync('./tasks.txt', 'utf-8').toString().split('\n'));
        } catch (err) {
            console.log(err.message);
        }
    }

    listTasks() {
        try {
            if (!fs.existsSync('./tasks.txt')) throw Error('Unable to read file');
            this.getTasksList();
            if (this.tasksList.length === 0 || this.tasksList[0] === '') {
                console.log('Nincs mára tennivalód! :)');
            } else {
                this.tasksList.forEach((task, index) => console.log(`${index + 1}. ${task}`));
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    addNewTasks() {
        fs.appendFileSync('./tasks.txt', '\nnewTasks');
    }

    removeTasks() {

    }

    printInstructions() {
        console.log(
            'Parancssori Todo applikáció' + '\n=============================' + '\n' + '\nParancssori argumentumok:' + '\n-l   Kilistázza a feladatokat' + '\n-a   Új feladatot ad hozzá' + '\n-r   Eltávolít egy feladatot' + '\n-c   Teljesít egy feladatot')
    };
}