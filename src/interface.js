import { ListItem } from "./list-item";
import { Project } from "./project";
import { List } from "./list";
import { getToDoList, addSavedTask, addSavedProject, setSavedTaskDate } from "./storage";

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // Months are 0-indexed, so add 1
const day = today.getDate();

const formattedToday = `${year}-0${month}-${day}`;

function isDateInThisWeek(date) {
    const [givenYear, givenMonth, givenDay] = date.split('-').map(Number);
 
    const firstDayOfWeek = new Date(year, month -1, day - today.getDay()+1);
    const lastDayOfWeek = new Date(year, month -1, day + (7 - today.getDay()));

    const inputDate = new Date(givenYear, givenMonth - 1, givenDay);

    return inputDate >= firstDayOfWeek && inputDate <= lastDayOfWeek;
  }

function createAddTaskButton() {
    const addTaskButton = document.createElement("button");
    addTaskButton.textContent = "+ Add Task";
    addTaskButton.classList.add("add-task-button");

    return addTaskButton;
}

function createTask(ListItem, projectName) {

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
        if(date==formattedToday){
            addSavedTask('Today', ListItem);
        }
        if(isDateInThisWeek(date)){
            addSavedTask('This Week', ListItem);
        }
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

            taskDateInput.addEventListener('change', function(event){
                taskDateInput.remove();
                taskDateInput = null;
                setSavedTaskDate(projectName, text, event.target.value);
                let newDate = getToDoList().getProject(projectName).getTask(text).getDate();
                dateBtn.innerHTML = `${newDate}` || 'No date';

                if(newDate==formattedToday){
                    addSavedTask('Today', ListItem);
                }
                if(isDateInThisWeek(newDate)){
                    addSavedTask('This Week', ListItem);
                }
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

function createProject(projectName) {

    let btn = document.createElement("button");
    btn.classList.add("project-button");

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("project-name");
    nameDiv.innerText = projectName;
    btn.appendChild(nameDiv);

    return btn;
}

function displayProjectTasks(projectName) {

    const project = getToDoList().getProject(projectName)
    const tasks = project.getTasks();
    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = '';

    let label = document.createElement('h1');
    label.setAttribute("id", "projectLabel");
    label.innerText = projectName;

    taskContainer.appendChild(label);

    const addTaskButton = createAddTaskButton();

    if (projectName=='Today' || projectName=='This Week'){
        addTaskButton.style.display = 'none';
    } else {
        addTaskButton.style.display = 'inline-block';
    
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
            
            addSavedTask(projectName, newTask);
            displayProjectTasks(projectName);
        
            modal.style.display = "none";
            }

        cancelButton.onclick = function() {
        modal.style.display = "none";
            }

        taskContainer.appendChild(addTaskButton);
    }

    tasks.forEach((task) => {
        const button = createTask(task, projectName);
        taskContainer.appendChild(button);

    });
    const dateBtns = document.getElementsByClassName('dateBtn');
    if (projectName=='Today' || projectName=='This Week'){
        for(let i=0; i<dateBtns.length; i++){
            dateBtns[i].dsabled =true;
        }
    } 
}

function displayProjects() {

    let projects = getToDoList().getProjects();
    const projectContainer = document.getElementById('project-container');
    projectContainer.innerHTML = '';

    const homeButton = document.getElementById("button-home-projects");
    homeButton.addEventListener('click', function() {
        displayProjectTasks('Home');
    })

    const todayButton = document.getElementById("button-today-projects");
    todayButton.addEventListener('click', function() {
        displayProjectTasks('Today');
    })

    const thisWeekButton = document.getElementById("button-week-projects");
    thisWeekButton.addEventListener('click', function() {
        displayProjectTasks('This Week');
    })

    for (let j = 3; j<projects.length; j++){
        const projectButton = createProject(projects[j].getName());
        projectContainer.appendChild(projectButton);
        projectButton.classList.add('project-button');
        projectButton.addEventListener('click', function() {
            displayProjectTasks(projects[j].getName());
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
    addSavedProject(newProject);
    displayProjects();

    modal.style.display = "none";
    }

    cancelButton.onclick = function() {
    modal.style.display = "none";
    }
}
export {displayProjectTasks, displayProjects, manageAddProjectButton};