import { createElement } from "./pageLoad";

export function addProjectForm() {
    const projectForm = createElement("div");
    projectForm.className = "col-start-4 col-span-6 bg-blue-100 fixed left-60 top-20 mt-2 ml-2"
    projectForm.innerHTML = `
		<form class="p-5 space-y-3 hidden" id="project-form">
    <h1 class="text-center text-xl">Add project</h1>
		
    <label for="project-name">Project name: </label><br>
    <input type="text" placeholder="Enter project name" name="project-name" required><br>
		
    <button type="submit" class="bg-green-400 text-center w-full text-white font-bold" id="project-form-add">Add</button><br>
    <button type="button" class="bg-red-500 text-center w-full text-white font-bold" id="project-form-close">Close</button>
		</form>
		`;

    const content = document.getElementById("content");
    content.appendChild(projectForm);
}