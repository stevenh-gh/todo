import { toggleProjectPage } from "../eventListeners";
import { createElement } from "./pageLoad";

export function appendProjectToList(project) {
    const ul = document.getElementById("project-list");
    const projectEle = createElement("li");
    projectEle.classList.add("group", "relative");
    projectEle.innerHTML = `
    <div class="inline-flex">
        <p class="">${project.title}</p>
        <i class="fas fa-minus-circle text-red-500 self-center absolute right-0 text-xl hidden group-hover:block"></i>
    </div>
    `;
    projectEle.addEventListener("click", () => {
        toggleProjectPage(project);
    })
    ul.appendChild(projectEle);
}