import { toggleProjectPage } from "../eventListeners";
import { createElement } from "./pageLoad";

export function appendProjectToList(project) {
    const ul = document.getElementById("project-list");
    const projectEle = createElement("li");
    projectEle.classList.add("group", "relative");

    const container = createElement("div", "inline-flex");
    const title = createElement("p");
    title.innerText = project.title;
    const deleteBtn = createElement("i", "fas fa-minus-circle text-red-500 self-center absolute right-0 text-xl hidden group-hover:block");

    container.appendChild(title);
    container.appendChild(deleteBtn);
    projectEle.appendChild(container);

    projectEle.addEventListener("click", () => {
        toggleProjectPage(project);
    })
    ul.appendChild(projectEle);
}