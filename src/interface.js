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
    let btn = document.createElement("div");
    btn.classList.add("task-button");

    // Create the name div and set its content
    let nameDiv = document.createElement("div");
    nameDiv.classList.add("task-name");
    nameDiv.innerText = text;

    // Create the date div and set its content
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

        if (taskName.trim() === "") {
            alert("Task name is required.");
            return; // Do not close the modal if input is empty
          }
    
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

    });
    let dateDivs = document.getElementsByClassName('task-date');
    let dateBtns = document.getElementsByClassName('dateBtn');
    let taskDateInput = null;

    if(dateBtns){
        for (let i = 0; i < dateBtns.length; i++){
        dateBtns[i].addEventListener('click', function(){
            if (!taskDateInput) {
                taskDateInput = document.createElement('input');
                taskDateInput.type = 'date';
                taskDateInput.id = 'taskDate';

                // Append the input element to the clicked dateDiv
                dateDivs[i].appendChild(taskDateInput);
                dateBtns[i].style.display = 'none';

                taskDateInput.addEventListener('input', function(event){
                    Project.getTasks()[i].setDate(event.target.value);
                    displayProjectTasks(Project);
                    dateBtns[i].style.display = 'inline-block';
                });

                // Add a click event to the document to handle cancellation
                document.addEventListener('click', function(event) {
                    
                        // Check if the clicked element is the date input or date button
                        if (event.target !== taskDateInput && !event.target.classList.contains('dateBtn')) {
                            dateBtns[i].style.display = 'inline-block';
                            // Remove the input element and remove the click event listener
                            if (taskDateInput) {
                                taskDateInput.remove();
                                taskDateInput = null;

                            }
                        }
                });
            }
        });
    }}
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

    if (projectName.trim() === "") {
        alert("Project name is required.");
        return; // Do not close the modal if input is empty
      }

    let newProject = new Project(projectName);
    list.addProject(newProject);
    displayProjects(list);

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