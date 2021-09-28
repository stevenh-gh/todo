import "./style.css";
import pageLoad from "./views/pageLoad";
import { addProjectForm, addTaskForm } from "./views/forms";
import { projectFormOpenEventListener, projectFormCloseEventListener, projectFormAddProjectEventListener } from "./eventListeners";

pageLoad();
addProjectForm();
addTaskForm();
projectFormOpenEventListener();
projectFormCloseEventListener();
projectFormAddProjectEventListener();