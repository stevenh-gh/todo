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
        this.list.set(projectName, new Project(projectName));
    }
    last() {
        return Array.from(this.list)[this.list.size - 1][1];
    }
}

export const projects = new Projects();