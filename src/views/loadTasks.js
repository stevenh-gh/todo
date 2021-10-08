import { removeAllChildren } from "../eventListeners";
import { projects } from "../project";
import { editTaskForm } from "./forms";
import { createElement } from "./pageLoad";

export default function loadTasks(project) {
    const taskSpace = document.getElementById("task-space");
    project.tasks.forEach(task => {
        const taskDiv = createElement("div", "col-start-4 col-span-6 rounded-md p-4 border border-gray-300 shadow-lg transform hover:scale-105 group", task.title);
        // taskDiv.innerHTML = `
        // 			<label for="" class="flex justify-between group-hover:cursor-pointer">
        //                 <input type="checkbox" class="transform scale-150 self-center">
        //                 <span class="text-3xl">${task.title}</span>
        //                 <span class="text-3xl">${task.dueDate}</span>
        //             </label>
        //             `;

        const label = createElement("div", "flex justify-between group-hover:cursor-pointer");
        const input = createElement("input", "transform scale-150 self-center");
        input.setAttribute("type", "checkbox");
        const span1 = createElement("span", "text-3xl");
        span1.innerText = task.title;
        const span2 = createElement("span", "text-3xl");
        span2.innerText = task.dueDate;
        label.appendChild(input);
        label.appendChild(span1);
        label.appendChild(span2);
        taskDiv.appendChild(label);

        const deleteBtn = createElement("i", "fa fa-minus-circle text-red-500 hidden group-hover:block group-hover:cursor-pointer");
        deleteBtn.addEventListener("click", () => {
            project.deleteTask(task);
            removeAllChildren(taskSpace);
            loadTasks(project);
        });

        taskDiv.appendChild(deleteBtn);
        taskDiv.addEventListener("click", () => {
            editTaskForm(task, project);
        });

        taskSpace.appendChild(taskDiv);
    });
}

export function appendTask(task) {
    const taskSpace = document.getElementById("task-space");
    const taskDiv = createElement("div", "col-start-4 col-span-6 rounded-md p-4 border border-gray-300 shadow-lg transform hover:scale-105 group", task.title);
    // taskDiv.innerHTML = `
    //     			<label for="" class="flex justify-between group-hover:cursor-pointer">
    //                     <input type="checkbox" class="transform scale-150 self-center">
    //                     <span class="text-3xl">${task.title}</span>
    //                     <span class="text-3xl">${task.dueDate}</span>
    //                 </label>
    //                 `;

    const label = createElement("div", "flex justify-between group-hover:cursor-pointer");
    const input = createElement("input", "transform scale-150 self-center");
    input.setAttribute("type", "checkbox");
    const span1 = createElement("span", "text-3xl");
    span1.innerText = task.title;
    const span2 = createElement("span", "text-3xl");
    span2.innerText = task.dueDate;
    label.appendChild(input);
    label.appendChild(span1);
    label.appendChild(span2);
    taskDiv.appendChild(label);

    const deleteBtn = createElement("i", "fa fa-minus-circle text-red-500 hidden group-hover:block group-hover:cursor-pointer");
    const project = projects.list.get(taskSpace.parentElement.children[0].childNodes[1].textContent);
    deleteBtn.addEventListener("click", () => {
        project.deleteTask(task);
        removeAllChildren(taskSpace);
        loadTasks(project);
    });

    taskDiv.appendChild(deleteBtn);
    taskDiv.addEventListener("click", () => {
        editTaskForm(task, project);
    });

    taskSpace.appendChild(taskDiv);
}