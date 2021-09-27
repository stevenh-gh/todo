import { toggleProjectPage } from "../eventListeners";
import { createElement } from "./pageLoad";

export function appendProjectToList(project) {
    const ul = document.getElementById("project-list");
    const projectEle = createElement("li");
    projectEle.innerText = project.title;
    projectEle.addEventListener("click", () => {
        toggleProjectPage(project);
    })
    ul.appendChild(projectEle);
}