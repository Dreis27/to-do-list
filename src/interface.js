import { ListItem } from "./list-item";
import { Project } from "./project";
import { List } from "./list";

const list = new List();

function createAddTaskButton() {
    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "+ Add Task";
    addTaskButton.classList.add("add-task-button");

    return addTaskButton;
}

function createTask(ListItem) {
    // Get name and date from the ListItem object
    let text = ListItem.getName();
    let date = ListItem.getDate();

    // Create the button
    let btn = document.createElement("button");
    btn.classList.add("task-button");

    // Create the name div and set its content
    let nameDiv = document.createElement("div");
    nameDiv.classList.add("task-name");
    nameDiv.innerText = text;

    // Create the date div and set its content
    let dateDiv = document.createElement("div");
    dateDiv.classList.add("task-date");
    dateDiv.innerText = date;

    // Append the name and date divs to the button
    btn.appendChild(nameDiv);
    btn.appendChild(dateDiv);

    return btn;
    // Append the button to the task container
    // document.getElementById("task-container").appendChild(btn);
}

function createProject(Project) {

    let text = Project.getName();

    let btn = document.createElement("button");
    btn.classList.add("project-button");

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("project-name");
    nameDiv.innerText = text;
    btn.appendChild(nameDiv);

    return btn;

    //document.getElementById("menu-bar").appendChild(btn);
}

function displayProjectTasks(Project) {

    let tasks = Project.getTasks();
    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = '';

    let label = document.createElement('h1');
    label.innerText = Project.getName();

    taskContainer.appendChild(label);

    const addTaskButton = createAddTaskButton();
    const modal = document.getElementById("myModal1");
    const span = document.getElementsByClassName("close1")[0];
    const addButton = document.getElementById("add1");
    const cancelButton = document.getElementById("cancel1");

    // When the user clicks the button, open the modal 
    addTaskButton.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    addButton.onclick = function() {
        const taskName = document.getElementById("taskName").value;
        const taskDate = document.getElementById("taskDate").value;
    
        let newTask = new ListItem(taskName,taskDate);
        Project.addTask(newTask);
        displayProjectTasks(Project);
    
        // Do something with projectName and projectDate
        console.log(taskName, taskDate);
    
        modal.style.display = "none";
        }

    // When the user clicks on "Cancel", just close the modal
    cancelButton.onclick = function() {
    modal.style.display = "none";
        }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }}

    taskContainer.appendChild(addTaskButton);

    tasks.forEach((task) => {
        const button = createTask(task);
        taskContainer.appendChild(button);
        button.addEventListener('click', function(task) {
            Project.deleteTask(task.getName());
            Project.addTask(task);
            displayProjectTasks(Project);
        })
    });
}

function displayProjects(List) {

    let projects = List.getProjects();
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = '';

    const homeButton = document.getElementById("button-home-projects");
    homeButton.addEventListener('click', function() {
        displayProjectTasks(projects[0]);
    })

    const todayButton = document.getElementById("button-today-projects");
    todayButton.addEventListener('click', function() {
        displayProjectTasks(projects[1]);
    })

    const thisWeekButton = document.getElementById("button-week-projects");
    thisWeekButton.addEventListener('click', function() {
        displayProjectTasks(projects[2]);
    })

    for (let j = 3; j<projects.length; j++){
        const projectButton = createProject(projects[j]);
        projectContainer.appendChild(projectButton);
        projectButton.classList.add('project-button');
        projectButton.addEventListener('click', function() {
            displayProjectTasks(projects[j]);
        })
    }
}

function manageAddProjectButton(){

    const modal = document.getElementById("myModal");
    const btn = document.getElementById("button-add-project");
    const span = document.getElementsByClassName("close")[0];
    const addButton = document.getElementById("add");
    const cancelButton = document.getElementById("cancel");

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks on "Add" button, get the data and close the modal
    addButton.onclick = function() {
    const projectName = document.getElementById("projectName").value;
    const projectDate = document.getElementById("projectDate").value;

    let newProject = new Project(projectName);
    list.addProject(newProject);
    displayProjects(list);

    // Do something with projectName and projectDate
    console.log(projectName, projectDate);

    modal.style.display = "none";
    }

    // When the user clicks on "Cancel", just close the modal
    cancelButton.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }}
}
export {createTask, createProject, displayProjectTasks, displayProjects, manageAddProjectButton, list};