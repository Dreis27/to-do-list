import './style.css';

import { createTask, createProject, displayProjectTasks, displayProjects, manageAddProjectButton, list} from './interface';
    
    

    console.log("Window is loaded!");
    displayProjects(list);
    displayProjectTasks(list.getProjects()[0]); 
    manageAddProjectButton();

