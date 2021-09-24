import { createElement } from "./pageLoad";

export function addProjectForm() {
    const projectForm = createElement("div");
    projectForm.className = "col-start-4 col-span-6 bg-blue-100 fixed left-64 top-20 mt-2"
    projectForm.innerHTML = `
		<form>
    <h1>Add project</h1>
		
    <label for="project"><b>Project name: </b></label>
    <input type="text" placeholder="Enter project name" name="project-name" required>
		
    <button type="submit">Add</button>
    <button type="button" onclick="closeForm()">Close</button>
		</form>
		`;

    const content = document.getElementById("content");
    content.appendChild(projectForm);
}