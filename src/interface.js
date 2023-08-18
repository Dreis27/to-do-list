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

    let text = ListItem.getName();
    let date = ListItem.getDate();

    let btn = document.createElement("div");
    btn.classList.add("task-button");

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("task-name");
    nameDiv.innerText = text;

    let dateDiv = document.createElement("div");
    const dateBtn = document.createElement('button');
    dateDiv.classList.add("task-date");
    dateBtn.classList.add('dateBtn');
 
    if(!date){
        dateBtn.innerHTML = "No date";
    } else {
        dateBtn.innerHTML = `${date}`;
    }

    dateDiv.appendChild(dateBtn);

    btn.appendChild(nameDiv);
    btn.appendChild(dateDiv);

    let taskDateInput = null;
    dateBtn.addEventListener('click', function(){
        if (!taskDateInput) {
            taskDateInput = document.createElement('input');
            taskDateInput.type = 'date';
            taskDateInput.id = 'taskDate';

            // Append the input element to the clicked dateDiv
            dateDiv.appendChild(taskDateInput);
            dateBtn.style.display = 'none';

            taskDateInput.addEventListener('input', function(event){
                taskDateInput.remove();
                taskDateInput = null;
                ListItem.setDate(event.target.value);
                dateBtn.innerHTML = `${ListItem.getDate()}` || 'No date';
                dateBtn.style.display = 'inline-block';
            });

            // Add a click event to the document to handle cancellation
            document.addEventListener('click', function(event) {
                
                    // Check if the clicked element is the date input or date button
                    if (event.target !== taskDateInput && !event.target.classList.contains('dateBtn')) {
                        
                        // Remove the input element and remove the click event listener
                        if (taskDateInput) {
                            taskDateInput.remove();
                            taskDateInput = null;
                            dateBtn.style.display = 'inline-block';
                        }
                    }
            });
        }
    })

    return btn;
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

    addTaskButton.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }}

    addButton.onclick = function() {
        const taskName = document.getElementById("taskName").value;
        const taskDate = document.getElementById("taskDate").value;

        if (taskName.trim() === "") {
            alert("Task name is required.");
            return;
          }
    
        let newTask = new ListItem(taskName,taskDate);
        Project.addTask(newTask);
        displayProjectTasks(Project);
    
        modal.style.display = "none";
        }

    cancelButton.onclick = function() {
    modal.style.display = "none";
        }

    taskContainer.appendChild(addTaskButton);

    tasks.forEach((task) => {
        const button = createTask(task);
        taskContainer.appendChild(button);

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

    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }
    span.addEventListener('click', function() {
        modal.style.display = "none";
        })

    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }}

    addButton.onclick = function() {
    const projectName = document.getElementById("projectName").value;

    if (projectName.trim() === "") {
        alert("Project name is required.");
        return;
      }

    let newProject = new Project(projectName);
    list.addProject(newProject);
    displayProjects(list);

    modal.style.display = "none";
    }

    cancelButton.onclick = function() {
    modal.style.display = "none";
    }
}
export {displayProjectTasks, displayProjects, manageAddProjectButton, list};