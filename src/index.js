import "./style.css";
import pageLoad from "./views/pageLoad";
import { addProjectForm, addTaskForm } from "./views/forms";
import { projectFormOpenEventListener, projectFormCloseEventListener, projectFormAddProjectEventListener, taskFormOpenEventListener } from "./eventListeners";

pageLoad();
addProjectForm();
addTaskForm();
projectFormOpenEventListener();
projectFormCloseEventListener();
projectFormAddProjectEventListener();
taskFormOpenEventListener();