import Project, { projects } from "./project";
import { appendProjectToList } from "./views/projectList";

export function projectFormOpenEventListener() {
    const btn = document.getElementById("open-project-form");
    btn.addEventListener("click", () => {
        console.log("clicked");
        const form = document.getElementById("project-form");
        form.classList.remove("hidden");
        form.classList.add("block");
    });
}

export function projectFormCloseEventListener() {
    const btn = document.getElementById("project-form-close");
    btn.addEventListener("click", () => {
        btn.parentElement.classList.remove("block");
        btn.parentElement.classList.add("hidden");
    });
}

export function projectFormAddProjectEventListener() {
    const btn = document.getElementById("project-form-add");
    btn.addEventListener("click", e => {
        const form = document.getElementById("project-form");
        const fd = new FormData(form);
        const projectName = fd.get("project-name");
        if (projects.list.has(projectName)) {
            btn.setCustomValidity("Project name is already in use.")
        } else if (projectName) {
            e.preventDefault();
            projects.add(new Project(projectName));
            appendProjectToList(projects.last());
            form.reset();
        }
    })
}

export function taskFormOpenEventListener() {
    const btn = document.getElementById("add-task-form");
    btn.addEventListener("click", () => {
        console.log("hi");
        const form = document.getElementById("task-form");
        form.classList.remove("hidden");
        form.classList.add("block");
    });
}

export function taskFormCloseEventListener() {
    const btn = document.getElementById("task-btn-close");
    btn.addEventListener("click", () => {
        const form = document.getElementById("task-form");
        form.classList.remove("block");
        form.classList.add("hidden");
    });
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export function toggleProjectPage(project) {
    const projectName = document.getElementById("project-name");
    const taskSpace = document.getElementById("task-space");
    removeAllChildren(taskSpace);
    projectName.innerText = project.title;
}