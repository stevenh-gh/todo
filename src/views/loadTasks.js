import { createElement } from "./pageLoad";

export default function loadTasks(project) {
    const taskSpace = document.getElementById("task-space");
    project.tasks.forEach(task => {
        const taskDiv = createElement("div", "col-start-4 col-span-6 rounded-md p-4 border border-gray-300 shadow-lg", task.title);
        taskDiv.innerHTML = `
        			<label for="" class="flex justify-between">
                        <input type="checkbox" class="transform scale-150 self-center">
                        <span class="text-3xl">${task.title}</span>
                        <span class="text-3xl">${task.dueDate}</span>
                    </label>
                    `;
        taskSpace.appendChild(taskDiv);
    });
}

export function appendTask(task) {
    const taskSpace = document.getElementById("task-space");
    const taskDiv = createElement("div", "col-start-4 col-span-6 rounded-md p-4 border border-gray-300 shadow-lg", task.title);
    taskDiv.innerHTML = `
        			<label for="" class="flex justify-between">
                        <input type="checkbox" class="transform scale-150 self-center">
                        <span class="text-3xl">${task.title}</span>
                        <span class="text-3xl">${task.dueDate}</span>
                    </label>
                    `;
    taskSpace.appendChild(taskDiv);
}