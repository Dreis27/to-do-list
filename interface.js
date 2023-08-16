import { ListItem } from "./src/list-item";
import { Project } from "./src/project";
import { List } from "./src/list";

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

    const homeButton = document.getElementById("button-inbox-projects");
    homeButton.addEventListener('click', function() {
        displayProjectTasks(projects[0]);
    })

    const todayButton = document.getElementById("button-today-projects");
    homeButton.addEventListener('click', function() {
        displayProjectTasks(projects[1]);
    })

    const thisWeekButton = document.getElementById("button-week-projects");
    homeButton.addEventListener('click', function() {
        displayProjectTasks(projects[2]);
    })

    for (let j = 3; j<projects.length; j++){
        const projectButton = createProject(projects[j]);
        projectContainer.appendChild(projectButton);
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

    // Do something with projectName and projectDate
    console.log(projectName, projectDate);

    modal.style.display = "none";
    }

    // When the user clicks on "Cancel", just close the modal
    cancelButton.onclick = function() {
    modal.style.display = "none";
    }
}