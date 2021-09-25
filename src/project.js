export default class Project {
    constructor(title) {
        this.title = title;
        this.tasks = [];
    }
}

// export const projects = [new Project("default project")];
export const projects = new Map();