export default class Project {
    static deserialize(serialize) {
        const obj = JSON.parse(serialize);
        const proj = new Project(obj.title);
        proj.tasks = obj.tasks;
        return proj;
    }
    constructor(title) {
        this.title = title;
        this.tasks = [];
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
    last() {
        return Array.from(this.list)[this.list.size - 1][1];
    }
}

export const projects = new Projects();