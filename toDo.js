import fs from 'fs';

export class Todo {
    constructor(tasks) {
        this.tasks = tasks;
    }

    getTasksList() {
        try {
            if (!fs.existsSync('./tasks.txt')) throw Error('File not exists');
            this.tasksList = (fs.readFileSync('./tasks.txt', 'utf-8').split('\n'));
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

    addNewTasks(newTasks) {
        try {
            if (!fs.existsSync('./tasks.txt')) throw Error('Unable to write file');
            if (newTasks === '' || newTasks === true) {
                console.log('Nem lehetséges új feladat hozzáadása: nincs megadva feladat!');
            } else {
                fs.appendFileSync('./tasks.txt', '\n' + newTasks);
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    removeTasks(taskIndex) {
        this.getTasksList();
        try {
            if (!fs.existsSync('./tasks.txt')) throw Error('File not exists');
            if (taskIndex === '' || taskIndex === true) {
                console.log('Nem lehetséges az eltávolítás: nem adott meg indexet!');
            } if (taskIndex > this.tasksList.length) {
                console.log('Nem lehetséges az eltávolítás: túlindexelési probléma adódott!');
                // } if (taskIndex != "number") {
                //    console.log('Nem lehetséges az eltávolítás: a megadott index nem szám!');
            } else {
                this.tasksList.splice(taskIndex - 1, 1);
                fs.writeFileSync('./tasks.txt', this.tasksList.join("\n"));
            }
        } catch (err) {
            console.log(err.message);
        }
    }

    printInstructions() {
        console.log(
            'Parancssori Todo applikáció' + '\n=============================' + '\n' + '\nParancssori argumentumok:' + '\n-l   Kilistázza a feladatokat' + '\n-a   Új feladatot ad hozzá' + '\n-r   Eltávolít egy feladatot' + '\n-c   Teljesít egy feladatot')
    };
}