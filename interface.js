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

    // Append the button to the task container
    document.getElementById("task-container").appendChild(btn);
}

function createProject(Project) {

    let text = Project.getName();

    let btn = document.createElement("button");
    btn.classList.add("project-button");

    let nameDiv = document.createElement("div");
    nameDiv.classList.add("project-name");
    nameDiv.innerText = text;
    btn.appendChild(nameDiv);

    document.getElementById("menu-bar").appendChild(btn);
}