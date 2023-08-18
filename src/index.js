import './style.css';
import {displayProjectTasks, displayProjects, manageAddProjectButton, list} from './interface';
    
    displayProjects(list);
    displayProjectTasks(list.getProjects()[0]); 
    manageAddProjectButton();

