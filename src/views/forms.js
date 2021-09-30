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

export function addTaskForm() {
    const taskForm = createElement("div", "", "task-form");
    taskForm.className = "bg-blue-100 col-start-4 col-span-6 absolute right-20 top-12 p-5 hidden";
    taskForm.innerHTML = `
    <form>
      <h1 class=" text-center">Add task</h1>
      
      <label for="task-name">Name: </label><br>
      <input type="text" name="task-name" placeholder="Enter task title" required><br>
      
      <label for="task-desc">Description: </label><br>
      <textarea name="task-desc" placeholder="Optional: enter description"></textarea><br>
      
      <label for="task-priority">Priority: </label>
      <select name="task-priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      
    </form>
    
    `;
    const content = document.getElementById("content");
    content.appendChild(taskForm);
}