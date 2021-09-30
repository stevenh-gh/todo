export default class Project {
    static deserialize(serialize) {
        const obj = JSON.parse(serialize);
        const proj = new Project(obj.title);
        proj.tasks = obj.tasks;
        proj.date = new Date(obj.date);
        return proj;
    }
    constructor(title) {
        this.title = title;
        this.tasks = [];
        this.date = new Date();
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