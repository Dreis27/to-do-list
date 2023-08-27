import { ListItem } from "./list-item";
import { Project } from "./project";
import { List, DoneList } from "./list";

function saveList(data) {
    localStorage.setItem('myData', JSON.stringify(data));
}

function getToDoList(){
    const list = Object.assign(new List(), JSON.parse(localStorage.getItem('myData')));

    list.setProjects(list.getProjects().map((project)=> Object.assign(new Project(), project)));

    list.getProjects().forEach((project)=> project.setTasks(project.getTasks().map((task)=> Object.assign(new ListItem(), task))));

    return list;
}

function addSavedProject(project){
    const list = getToDoList();
    list.addProject(project);
    saveList(list);
}

function deleteSavedProject(projectName){
    const list = getToDoList();
    list.deleteProject(projectName);
    saveList(list);
}

function addSavedTask(projectName, task){
    const list = getToDoList();
    list.getProject(projectName).addTask(task);
    saveList(list);
} 

function deleteSavedTask(projectName, taskName){
    const list = getToDoList();
    list.getProject(projectName).deleteTask(taskName);
    saveList(list);
} 

function renameSavedTask(projectName, taskName, newName){
    const list = getToDoList();
    list.getProject(projectName).getTask(taskName).setName(newName);
    saveList(list);
} 

function setSavedTaskDate(projectName, taskName, newDate){
    const list = getToDoList();
    list.getProject(projectName).getTask(taskName).setDate(newDate);
    saveList(list);
}

function setSavedTaskCompleted(projectName, taskName, name2, status){
    const list = getToDoList();
    list.getProject(projectName).getTaskPrecise(taskName, name2).setCompleted(status);
    saveList(list);
}

function setSavedTaskName2(projectName, taskName, name2){
    const list = getToDoList();
    list.getProject(projectName).getTask(taskName).setName2(name2);
    saveList(list);
}

export{saveList, getToDoList, addSavedProject, deleteSavedProject, addSavedTask, deleteSavedTask, renameSavedTask, setSavedTaskDate, setSavedTaskCompleted, setSavedTaskName2};