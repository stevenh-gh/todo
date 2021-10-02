import "./style.css";
import pageLoad from "./views/pageLoad";
import { addProjectForm, addTaskForm } from "./views/forms";
import { projectFormOpenEventListener, projectFormCloseEventListener, projectFormAddProjectEventListener, taskFormOpenEventListener, taskFormCloseEventListener, taskFormAddTaskEventListener } from "./eventListeners";

pageLoad();
addProjectForm();
addTaskForm();
projectFormOpenEventListener();
projectFormCloseEventListener();
projectFormAddProjectEventListener();
taskFormOpenEventListener();
taskFormCloseEventListener();
taskFormAddTaskEventListener();