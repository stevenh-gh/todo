import { createElement } from "./pageLoad";

export function appendProjectToList(project) {
    const ul = document.getElementById("project-list");
    const projectEle = createElement("li");
    projectEle.innerText = project.title;
    ul.appendChild(projectEle);
}