import Task from "./task";

export default class Project {
    static deserialize(serialize) {
        const obj = JSON.parse(serialize);
        const proj = new Project(obj.title);
        obj.tasks.forEach(task => {
            proj.tasks.push(task);
        });
        proj.date = new Date(obj.date);
        // console.log(proj);
        return proj;
    }
    constructor(title) {
        this.title = title;
        this.tasks = [];
        this.date = new Date();
    }
    addTask(task) {
        this.tasks.push(task);
        localStorage.removeItem(this.title);
        localStorage.setItem(this.title, this.serialize());
    }
    deleteTask(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        localStorage.removeItem(this.title);
        localStorage.setItem(this.title, this.serialize());
    }
    replaceTask(task, newtask) {
        const index = this.tasks.indexOf(task);
        this.tasks[index] = newtask;
        localStorage.removeItem(this.title);
        localStorage.setItem(this.title, this.serialize());
    }
    serialize() {
        return JSON.stringify(this);
    }
}


class Projects {
    constructor() {
        this.list = new Map();
    }
    add(project) {
        this.list.set(project.title, project);
        localStorage.setItem(project.title, project.serialize());
    }
    delete(project) {
        this.list.delete(project.title);
        localStorage.removeItem(project.title);
    }
    last() {
        return Array.from(this.list)[this.list.size - 1][1];
    }
}

export const projects = new Projects();