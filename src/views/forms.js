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
    <form class="space-y-3">
      <h1 class=" text-center">Add task</h1>
      
      <label for="task-name">Name: </label><br>
      <input type="text" name="task-name" placeholder="Enter task title" required><br>
      
      <label for="task-desc">Description: </label><br>
      <textarea name="task-desc" placeholder="Enter description" required></textarea><br>

      <label for="task-due">Due: </label>
      <input type="date" name="task-due" required><br>
      
      <label for="task-priority">Priority: </label>
      <select name="task-priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button type="submit" class="bg-green-400 text-center w-full text-white font-bold" id="task-btn-add">Add</button><br>
      <button type="button" class="bg-red-500 text-center w-full text-white font-bold" id="task-btn-close">Close</button>
      
    </form>
    `;
    const content = document.getElementById("content");
    content.appendChild(taskForm);
}

export function editTaskForm(task) {
    const taskForm = createElement("div", "", "edit-task-form");
    taskForm.className = "bg-blue-100 col-start-4 col-span-6 absolute right-20 top-12 p-5 block";

    const form = createElement("form", "space-y-3");

    const header = createElement("h1", "text-center");
    header.innerText = "Edit task";
    form.appendChild(header);

    const labelName = createElement("label");
    labelName.setAttribute("for", "task-name")
    labelName.innerText = "Name: "
    form.appendChild(labelName);
    form.appendChild(createElement("br"));

    const inputName = createElement("input", "", "task-name");
    inputName.setAttribute("value", task.title);
    inputName.setAttribute("type", "text");
    inputName.setAttribute("placeholder", "Enter task title");
    inputName.setAttribute("required", "");
    form.appendChild(inputName);

    form.appendChild(createElement("br"));
    const labelDesc = createElement("label");
    labelDesc.setAttribute("for", "task-desc");
    labelDesc.innerText = "Description: "
    form.appendChild(labelDesc);
    form.appendChild(createElement("br"));


    const inputDesc = createElement("textarea", "", "task-desc");
    inputDesc.setAttribute("placeholder", "Enter description");
    inputDesc.innerText = task.description;
    form.appendChild(inputDesc);
    form.appendChild(createElement("br"));

    const labelDue = createElement("label");
    labelDue.setAttribute("for", "task-due");
    labelDue.innerText = "Due: ";
    form.appendChild(labelDue);

    const inputDue = createElement("input", "", "task-due");
    inputDue.setAttribute("value", task.dueDate);
    inputDue.setAttribute("type", "date");
    inputDue.setAttribute("rqeuired", "");
    form.appendChild(inputDue);
    form.appendChild(createElement("br"));

    const labelPriority = createElement("label");
    labelPriority.setAttribute("for", "task-priority");
    labelPriority.innerText = "Priority: ";
    form.appendChild(labelPriority);

    const inputPriority = createElement("select", "", "task-priority");
    const optionLow = createElement("option");
    const optionMed = createElement("option");
    const optionHigh = createElement("option");
    optionLow.setAttribute("value", "low");
    optionMed.setAttribute("value", "medium");
    optionHigh.setAttribute("value", "high");
    optionLow.innerText = "Low";
    optionMed.innerText = "Medium";
    optionHigh.innerText = "High";

    switch (task.priority) {
        case "low":
            optionLow.setAttribute("selected", "");
        case "medium":
            optionMed.setAttribute("selected", "");
        case "high":
            optionHigh.setAttribute("selected", "");
    }
    inputPriority.appendChild(optionLow);
    inputPriority.appendChild(optionMed);
    inputPriority.appendChild(optionHigh);
    form.appendChild(inputPriority)

    const submitBtn = createElement("button", "bg-green-400 text-center w-full text-white font-bold", "edit-task-btn-add");
    const closeBtn = createElement("button", "bg-red-500 text-center w-full text-white font-bold", "edit-task-btn-close");
    submitBtn.setAttribute("type", "submit");
    closeBtn.setAttribute("type", "button");
    submitBtn.innerText = "Submit edit";
    closeBtn.innerText = "Close";
    form.appendChild(submitBtn);
    form.appendChild(closeBtn);

    taskForm.appendChild(form);
    const content = document.getElementById("content");
    content.appendChild(taskForm);
}