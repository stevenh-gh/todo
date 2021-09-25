import "./style.css";
import pageLoad from "./views/pageLoad";
import { addProjectForm } from "./views/forms";
import { projectFormOpenEventListener, projectFormCloseEventListener } from "./eventListeners";

pageLoad();
addProjectForm();
projectFormOpenEventListener();
projectFormCloseEventListener();