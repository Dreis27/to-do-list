import { Project } from "./project";
import { ListItem } from "./list-item";

class List {
    constructor(){
        this.projects = [];
        this.projects.push(new Project('Home'));
        this.projects.push(new Project('Today'));
        this.projects.push(new Project('This Week'));
    }

    getProjects(){
        return this.projects;
    }

    setProjects(projectArray){
        this.projects = projectArray;
    }

    getProject(name){
        return this.projects.find((project)=> project.getName() === name);
    }

    addProject(newProj){
        if (this.projects.find((project)=> project.getName() === newProj.getName())) return;
        this.projects.push(newProj);
    }

    deleteProject(name){
        this.projects = this.projects.filter((project)=> project.getName() !== name);
    }
}
export {List};

