export default class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }
}


class Projects {
    constructor() {
        this.list = new Map();
    }
    add(projectName) {
        const p = new Project(projectName);
        this.list.set(projectName, p);
        localStorage.setItem(projectName, JSON.stringify(p));
    }
    last() {
        return Array.from(this.list)[this.list.size - 1][1];
    }
}

export const projects = new Projects();