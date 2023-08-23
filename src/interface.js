import { ListItem } from "./list-item";
import { Project } from "./project";
import { List } from "./list";
import { getToDoList, addSavedTask, addSavedProject, setSavedTaskDate, deleteSavedTask, deleteSavedProject, deleteSavedDoneProject, addSavedDoneTask,
        deleteSavedDoneTask, 
        addSavedDoneProject,
        getDoneList} from "./storage";

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

const formattedToday = `${year}-0${month}-${day}`;

function isDateInThisWeek(date) { //fix this function fr wtf
    const [givenYear, givenMonth, givenDay] = date.split('-').map(Number);

      // Calculate the day of the week where Monday is 0 and Sunday is 6
    const todayDayOfWeek = (today.getDay() + 6) % 7;
 
    const firstDayOfWeek = new Date(year, month - 1, day - todayDayOfWeek);

    // Calculate the last day of the week (Sunday)
    const lastDayOfWeek = new Date(year, month - 1, day + (6 - todayDayOfWeek));

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
    let date = getToDoList().getProject(projectName).getTask(text).getDate();


    let btn = document.createElement("div");
    btn.classList.add("task-button");

    const icon = document.createElement('i');
    icon.classList.add('fa-regular', 'fa-square');
    icon.style.fontSize = '24px';

    icon.addEventListener('click', function(event){
        event.stopPropagation();
            icon.classList = [];
            icon.classList.add('far', 'fa-check-square');
            addSavedDoneTask(projectName, ListItem);
            deleteSavedTask(projectName, text);
            displayProjectTasks(projectName);
    })

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("task-name");
    nameDiv.innerText = text;

    const span = document.createElement('span');
    span.classList.add('close');
    span.innerHTML = '&times;';

    span.addEventListener('click', function(){
        deleteSavedTask(projectName, text);
        deleteSavedTask('Today', text);
        deleteSavedTask('This Week', text);
        displayProjectTasks(projectName);
    })

    let dateDiv = document.createElement("div");
    const dateBtn = document.createElement('button');
    if (projectName=='Today' || projectName=='This Week'){
        dateBtn.disabled = true;
        span.style.display = 'none';
    }
    
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
    
    btn.appendChild(icon);
    btn.appendChild(nameDiv);
    btn.appendChild(dateDiv);
    btn.appendChild(span);

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

                if(newDate==formattedToday){ // here must also check whether project already contains the task!!!!!!!!!!!!!!!!!!!!
                    deleteSavedTask('Today', text);
                    addSavedTask('Today', getToDoList().getProject(projectName).getTask(text));
                } else {
                    deleteSavedTask('Today', text);
                }
                if(isDateInThisWeek(newDate)){
                    deleteSavedTask('This Week', text);
                    addSavedTask('This Week', getToDoList().getProject(projectName).getTask(text));
                } else {
                    deleteSavedTask('This Week', text);
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

    btn.innerHTML = '<i class="fas fa-project-diagram"></i>';

    const span = document.createElement('span');
    span.classList.add('close');
    span.classList.add('left');
    span.innerHTML = '&times;';

    span.addEventListener('click', function(event){
        event.stopPropagation();
        const array = getToDoList().getProject(projectName).getTasks();
        array.forEach(task => {
            if(getToDoList().getProject('Today').contains(task.getName())){
                deleteSavedTask('Today', task.getName());
            }
            if(getToDoList().getProject('This Week').contains(task.getName())){
                deleteSavedTask('This Week', task.getName());
            }
        });
        deleteSavedProject(projectName);
        deleteSavedDoneProject(projectName);
        displayProjects();
    })

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("project-name");
    nameDiv.innerText = projectName;
    btn.appendChild(nameDiv);
    btn.appendChild(span);

    return btn;
}

function displayProjectTasks(projectName) {

    const project = getToDoList().getProject(projectName)
    const projectDone = getDoneList().getProject(projectName);

    const taskContainer = document.getElementById('task-container');

    if(project== undefined){
        taskContainer.innerHTML = '';
    } else {
        const tasks = project.getTasks();

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
    }

    const containerDone = document.getElementById('done-container');

    if(projectDone== undefined){
        containerDone.innerHTML = '';
        console.log('project undefined');
    } else {
        console.log('project should work');
        const tasksDone = projectDone.getTasks();
        containerDone.innerHTML = '';

        tasksDone.forEach((task) => {
            const button = createDoneTask(task, projectName);
            containerDone.appendChild(button);

        });
    }
    }

    function displayProjects() {

        let projects = getToDoList().getProjects();
        let projectsDone = getDoneList().getProjects();
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
    const span = document.getElementById("close2");
    const addButton = document.getElementById("add");
    const cancelButton = document.getElementById("cancel");

    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
        console.log('ok');
    modal.style.display = "none";
    }

    document.onclick = function(event) {
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
    addSavedDoneProject(newProject);
    displayProjects();

    modal.style.display = "none";
    }

    cancelButton.onclick = function() {
    modal.style.display = "none";
    }
}

function checkTodayThisWeek(){
    const today = getToDoList().getProject('Today').getTasks();
    const thisWeek = getToDoList().getProject('This Week').getTasks();
    const projects = getToDoList().getProjects();

    today.forEach(task=>{
        if(task.getDate()!== formattedToday){
            deleteSavedTask('Today', task.getName());
        }
    });

    thisWeek.forEach(task=>{
        if(!isDateInThisWeek(task.getDate())){
            deleteSavedTask('This Week', task.getName());
        }
    });

    for(let i = 2; i<projects.length; i++){
        let projectTasks = projects[i].getTasks();
        projectTasks.forEach(task=>{
            if(task.getDate() == formattedToday){
                addSavedTask('Today', task);
            }
            if(isDateInThisWeek(task.getDate())){
                addSavedTask('This Week', task);
            }
        })

    }
}

function createDoneTask(ListItem, projectName) {

    let text = ListItem.getName();

    let btn = document.createElement("div");
    btn.classList.add("task-done-button");

    const icon = document.createElement('i');
    icon.classList.add('far', 'fa-check-square');
    icon.style.fontSize = '24px';

    icon.addEventListener('click', function(event){
        event.stopPropagation();
            icon.classList = [];
            icon.classList.add('fa-regular', 'fa-square');
            addSavedTask(projectName, ListItem);
            deleteSavedDoneTask(projectName, text);
            displayProjectTasks(projectName);
    })

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("task-name");
    nameDiv.innerText = text;

    const span = document.createElement('span');
    span.classList.add('close');
    span.innerHTML = '&times;';

    span.addEventListener('click', function(){
        deleteSavedDoneTask(projectName, text);
        displayProjectTasks(projectName);
    })

    btn.appendChild(icon);
    btn.appendChild(nameDiv);
    btn.appendChild(span);

    return btn;
}
export {displayProjectTasks, displayProjects, manageAddProjectButton, checkTodayThisWeek};