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

function setSavedTaskCompleted(projectName, taskName, status){
    const list = getToDoList();
    list.getProject(projectName).getTask(taskName).setCompleted(status);
    saveList(list);
}

//DoneList

function saveDoneList(data) {
    localStorage.setItem('DoneList', JSON.stringify(data));
}

function getDoneList(){
    const list = Object.assign(new DoneList(), JSON.parse(localStorage.getItem('DoneList')));

    list.setProjects(list.getProjects().map((project)=> Object.assign(new Project(), project)));

    list.getProjects().forEach((project)=> project.setTasks(project.getTasks().map((task)=> Object.assign(new ListItem(), task))));

    return list;
}

function addSavedDoneProject(project){
    const list = getDoneList();
    list.addProject(project);
    saveDoneList(list);
}
function deleteSavedDoneProject(projectName){
    const list = getDoneList();
    list.deleteProject(projectName);
    saveDoneList(list);
}

function addSavedDoneTask(projectName, task){
    const list = getDoneList();
    list.getProject(projectName).addTask(task);
    saveDoneList(list);
} 

function deleteSavedDoneTask(projectName, taskName){
    const list = getDoneList();
    list.getProject(projectName).deleteTask(taskName);
    saveDoneList(list);
} 

function renameSavedDoneTask(projectName, taskName, newName){
    const list = getDoneList();
    list.getProject(projectName).getTask(taskName).setName(newName);
    saveDoneList(list);
} 

export{saveList, getToDoList, addSavedProject, deleteSavedProject, addSavedTask, deleteSavedTask, renameSavedTask, setSavedTaskDate, setSavedTaskCompleted,
        saveDoneList, getDoneList, addSavedDoneProject, deleteSavedDoneProject, addSavedDoneTask, deleteSavedDoneTask, renameSavedDoneTask};