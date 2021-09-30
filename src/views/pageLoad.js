import Project, { projects } from "../project";
import { appendProjectToList } from "./projectList";

export function createElement(element, className = "", id = "") {
    const ele = document.createElement(element);
    ele.className = className;
    ele.id = id;
    return ele;
}

function loadLocalStorage() {
    const temp_arr = [];
    for (var i in localStorage) {
        if (i == "length") {
            break;
        }
        const proj = Project.deserialize(localStorage[i]);
        if (typeof proj.title != "object") {
            // projects.add(proj);
            temp_arr.push(proj);
        }
    }
    temp_arr.sort((a, b) => a.date - b.date);
    temp_arr.forEach(proj => projects.add(proj));
}

function loadProjectsIntoList() {
    projects.list.forEach(item => {
        appendProjectToList(item)
    });
}

export default function pageLoad() {
    const content = document.getElementById("content");
    content.className = "container grid grid-cols-12 gap-5 m-auto";

    const nav = createElement("nav", "col-span-2 h-screen shadow-xl px-2");
    nav.innerHTML = `
		<h1 class="text-center mt-3 text-5xl">Odin List</h1>
		<div class="flex justify-between mt-3">
			<h2 class="self-center text-2xl">Projects</h2>
			<i class="fas fa-plus-circle text-3xl text-blue-500 hover:scale-150 transform" id="open-project-form"></i>
		</div>
		`;

    const projectList = createElement("ul", "list-inside list-square mt-2 space-y-1", "project-list");
    // projectList.innerHTML = `
    // <li class="">Default project</li>
    // <li class="">project...</li>
    // <li class="">project...</li>
    // <li class="">project...</li>
    // <li class="">project...</li>
    // <li class="">project...</li>
    // `;

    nav.appendChild(projectList);
    content.appendChild(nav);

    const main = createElement("main", "col-span-10 shadow-xl px-4");
    main.innerHTML = `
		<div class="flex justify-between mt-3">
			<h2 class="self-center text-3xl" id="project-name">Project name here</h2>
			<i class="fas fa-plus-circle text-7xl text-blue-500 hover:scale-150 transform" id="add-task-form"></i>
		</div>
		`;

    const taskSpace = createElement("div", "grid grid-cols-12 gap-2 space-y-3 mt-8", "task-space");
    taskSpace.innerHTML = `
		<div class="col-start-4 col-span-6 rounded-md p-4 border border-gray-300 shadow-lg">
			<label for="" class="flex justify-between">
				<input type="checkbox" class="transform scale-150 self-center">
				<span class="text-3xl">task name</span>
				<span class="text-3xl">due date</span>
			</label>
		</div>
		
		<div class="col-start-4 col-span-6 rounded-md p-4 border border-gray-300 shadow-lg">
			<label for="" class="flex justify-between">
				<input type="checkbox" class="transform scale-150 self-center">
				<span class="text-3xl">task name</span>
				<span class="text-3xl">due date</span>
			</label>
		</div>

		<div class="col-start-4 col-span-6 rounded-md p-4 border border-gray-300 shadow-lg">
			<label for="" class="flex justify-between">
				<input type="checkbox" class="transform scale-150 self-center">
				<span class="text-3xl">task name</span>
				<span class="text-3xl">due date</span>
			</label>
		</div>
		`;

    main.appendChild(taskSpace);
    content.appendChild(main);


    loadLocalStorage();
    loadProjectsIntoList();
}