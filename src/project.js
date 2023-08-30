import { ListItem } from "./list-item";

class Project {
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    getName(){
        return this.name;
    }
    getTasks(){
        return this.tasks;
    }
    getTask(taskName){
        return this.tasks.find((task)=> task.getName() === taskName);
    }
    getTaskPrecise(taskName, name2){
        return this.tasks.find((task)=> task.getName()===taskName && task.getName2() === name2);
    }

    setName(name){
        this.name = name;
    }
    setTasks(taskArray){
        this.tasks = taskArray;
    }
    addTask(newTask){
        if(this.name == 'Today' || this.name == 'This Week'){
            if(this.tasks.find((task)=> task.getName()===newTask.getName() && task.getName2() === newTask.getName2())) {
                //alert('Choose a different name!');
                return;
        }
    } else {
        if(this.tasks.find((task)=> task.getName()===newTask.getName())) {
            //alert('Choose a different name!');
            return;
        }
    }
        this.tasks.push(newTask)
    }

    deleteTask(taskName, name2){
        this.tasks = this.tasks.filter((task)=> task.name !== taskName || task.getName2() !== name2);
    }
    contains(taskName, name2) {
        return this.tasks.some((task) => task.getName() === taskName && task.getName2() === name2);
      }

    //contains2(taskName, name2){
    //    return this.tasks.some((task) => task.getName() === taskName && task.getName2() === name2);
    //}
}

export {Project};