import './style.css';
import {checkTodayThisWeek, displayProjectTasks, displayProjects, manageAddProjectButton} from './interface';
import "./storage";
import { saveList } from './storage';
    displayProjects();
    displayProjectTasks('Home'); 
    manageAddProjectButton();
    checkTodayThisWeek();

